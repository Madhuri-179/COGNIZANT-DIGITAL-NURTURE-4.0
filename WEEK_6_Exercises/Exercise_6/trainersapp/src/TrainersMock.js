// src/TrainersMock.js
import Trainer from './trainer';

const trainers = [
  new Trainer(1, "Aathma", "aathma@example.com", "1234567890", "React", ["React", "Node", "MongoDB"]),
  new Trainer(2, "Jojo Jose", "jojo@example.com", "2345678901", "Java", ["Java", "Spring", "Hibernate"]),
  new Trainer(3, "Elisa Smith", "elisa@example.com", "3456789012", "Python", ["Python", "Django", "Flask"])
];

export default trainers;
