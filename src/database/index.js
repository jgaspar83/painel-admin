import Sequelize from "sequelize";
import config from "../config/database";
// inport Model from '../models/xxxx'


const models = [];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();

  }

  init() {
    models.forEach((model) => model.init(this.connection));
  }
}

export default new Database();