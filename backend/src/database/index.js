import Sequelize from 'sequelize';

import Cidade from '../app/models/Cidade';
import Cliente from '../app/models/Cliente';
import Cliente_Endereco from '../app/models/Cliente_Endereco';
import Colaborador from '../app/models/Colaborador';
import Fabrica from '../app/models/Fabrica';
import Fabrica_Cliente from '../app/models/Fabrica_Cliente';
import Fatura from '../app/models/Fatura';
import Pedido from '../app/models/Pedido';
import Pedido_Produto from '../app/models/Pedido_Produto';
import Perfil from '../app/models/Perfil';
import Preposto from '../app/models/Preposto';
import Produto from '../app/models/Produto';
import User from '../app/models/User';

import databaseConfig from '../config/database'

const models = [
  Cidade, Cliente, Cliente_Endereco, Colaborador, Fabrica, Fabrica_Cliente,
  Fatura, Pedido, Pedido_Produto, Perfil, Preposto, Produto, User
];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
