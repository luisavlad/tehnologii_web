const fs = require("fs");

fs.mkdir("directorCreat", (error) => {
  if (error) {
    return console.warn(error);
  }
  console.log("Director was created successfully!");
});

fs.writeFile(
  "./directorCreat/fisierCreat.txt",
  "Hiii, I am a new file!",
  (error) => {
    if (error) {
      return console.warn(error);
    }
    console.log("File was created successfully!");
  }
);

fs.rm("directorCreat", { recursive: true }, (error) => {
  if (error) {
    return console.warn(error);
  }
  console.log("Director was deleted successfully!");
});
