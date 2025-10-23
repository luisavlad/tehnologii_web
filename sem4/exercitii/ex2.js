class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} software is currently running`);
  }
}

class Plugin {
  constructor(name) {
    this.name = name;
  }

  install() {
    console.log(`${this.name} plugin is installing....`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(p) {
    this.plugins.push(p);
  }

  install() {
    console.log("installing plugins....");
    for (const p of this.plugins) {
      p.install();
    }
    console.log("All plugins were succesfully installed!");
  }
}

const s1 = new Software("Programul meu");
s1.run();

const p1 = new Plugin("Plugin cool");
const p2 = new Plugin("Plugin mai putin cool");

const b1 = new Browser("Chrome");
b1.addPlugin(p1);
b1.addPlugin(p2);
b1.install();
