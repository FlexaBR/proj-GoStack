import Sequelize, { Model } from 'sequelize';

class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        situacao: Sequelize.INTEGER,
        data_orcamento: Sequelize.DATE,
        data_pedido: Sequelize.DATE,
        pedido_fabrica: Sequelize.STRING,
        frete: Sequelize.STRING,
        parcelas: Sequelize.STRING,
        data_entrega: Sequelize.DATE,
        total_orcamento: Sequelize.DECIMAL,
        total: Sequelize.DECIMAL,
        desconto: Sequelize.DECIMAL,
        porcentagem_comissao: Sequelize.DECIMAL,
        valor_comissao: Sequelize.DECIMAL,
        observacoes: Sequelize.STRING,
        data_email: Sequelize.DATE,
        lido: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Pedido;
