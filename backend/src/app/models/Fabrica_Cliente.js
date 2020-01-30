import Sequelize, { Model } from 'sequelize';

class Fabrica_Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        comissao_cliente: Sequelize.DECIMAL,
        tabela: Sequelize.STRING,
        observacoes: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Fabrica_Cliente;
