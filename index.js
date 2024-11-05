const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }
  return sum / notes.length;
};

class Student {
  ecole = "jule ferry";
  _notes = [];

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  set notes(v) {
    if (Array.isArray(v)) {
      this._notes = v;
    }
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  get notes() {
    console.log(this._notes);
  }

  canPass() {
    return moyenne(this._notes) >= Student.moyenne;
  }

  static moyenne = 10;
}

class SuperStudent extends Student {
  _notes = [];
  constructor(firstname, lastname, notes) {
    super(firstname, lastname);
    this._notes = notes;
  }
  get name() {
    return `Super ` + super.name;
  }

  canPass() {
    return super.canPass();
  }
}

const john = new SuperStudent("john", "Doe", [0, 10, 8]);
const jane = new Student("jane", "Doe");

jane.notes = [15, 17, 12];

console.log(john.notes);
