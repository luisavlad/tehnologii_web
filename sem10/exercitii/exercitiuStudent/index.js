const express = require("express");
const application = express();
const port = process.env.PORT || 8080;

const sequelize = require("./sequelize");

const University = require("./models/university");
const Student = require("./models/student");
const Course = require("./models/course");

University.hasMany(Student);
University.hasMany(Course);
Student.belongsToMany(Course, { through: "enrollments" });
Course.belongsToMany(Student, { through: "enrollments" });

application.use(
  express.urlencoded({
    extended: true,
  })
);
application.use(express.json());

application.listen(port, () => {
  console.log(`The server is running on http://localhost: ${port}.`);
});

application.use((error, request, response, next) => {
  console.error(`[ERROR]: ${error}`);
  response.status(500).json(error);
});

application.post("/universities", async (request, response, next) => {
  try {
    const university = await University.create(request.body);
    response.status(201).location(university.id).send();
  } catch (error) {
    next(error);
  }
});

application.post(
  "/universities/:universityId/students",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const student = await Student.create(request.body);
        university.addStudent(student);
        await university.save();
        response.status(201).location(student.id).send();
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

application.get("/universities", async (request, response, next) => {
  try {
    const universities = await University.findAll();
    if (universities.length > 0) {
      response.json(universities);
    } else {
      response.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

application.get(
  "/universities/:universityId/students",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const students = await university.getStudents();
        if (students.length > 0) {
          response.json(students);
        } else {
          response.sendStatus(204);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

application.get(
  "/universities/:universityId/students/:studentId/enrollments",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);

      if (university) {
        const student = await Student.findOne({
          where: {
            id: request.params.studentId,
            universityId: university.id,
          },
          include: [
            {
              model: Course,
              through: { attributes: [] },
            },
          ],
        });

        if (student) {
          if (student.courses && student.courses.length > 0) {
            response.json(student.courses);
          } else {
            response.sendStatus(204);
          }
        } else {
          response.status(404).json({ message: "Student not found" });
        }
      } else {
        response.status(404).json({ message: "University not found" });
      }
    } catch (error) {
      next(error);
    }
  }
);

application.post(
  "/universities/:universityId/courses",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const course = await Course.create(request.body);
        university.addCourse(course);
        await university.save();
        response.status(201).location(course.id).send();
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

application.post(
  "/universities/:universityId/students/:studentId/enrollments/:courseId",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const students = await university.getStudents({
          id: request.params.studentId,
        });
        const student = students.shift();
        const courses = await university.getCourses({
          id: request.params.courseId,
        });
        const course = courses.shift();
        if (student && course) {
          student.addCourse(course);
          student.save();
          response.sendStatus(204);
        } else {
          response.sendStatus(404);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

application.get(
  "/universities/:universityId/courses",
  async (request, response, next) => {
    try {
      const university = await University.findByPk(request.params.universityId);
      if (university) {
        const courses = await university.getCourses();
        if (courses.length > 0) {
          response.json(courses);
        } else {
          response.sendStatus(204);
        }
      } else {
        response.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
);

application.get("/", async (request, response, next) => {
  try {
    const universities = await University.findAll({
      include: [
        {
          model: Student,
          attributes: ["id", "firstName", "lastName"],
        },
        {
          model: Course,
          attributes: ["id", "name"],
          include: [
            {
              model: Student,
              attributes: ["id"],
              through: { attributes: [] },
            },
          ],
        },
      ],
    });

    if (universities.length > 0) {
      const result = universities.map((u) => {
        const uni = u.get({ plain: true });
        const enrollments = [];

        uni.courses.forEach((course) => {
          if (course.students) {
            course.students.forEach((student) => {
              enrollments.push({
                studentId: student.id,
                courseId: course.id,
              });
            });
          }
          delete course.students;
        });

        return {
          ...uni,
          enrollments: enrollments,
        };
      });

      response.json(result);
    } else {
      response.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});
