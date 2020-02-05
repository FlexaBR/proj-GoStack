import Sequelize, { Model } from 'sequelize';

class Pedido_Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        cancelado: Sequelize.BOOLEAN,
        detalhes: Sequelize.STRING,
        observacoes: Sequelize.STRING,
        quantidade: Sequelize.INTEGER,
        preco: Sequelize.DECIMAL,
        sub_total: Sequelize.DECIMAL,
        comissao_pedido: Sequelize.DECIMAL,
        sub_comissao: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // Associação entre tabelas
  static associate(models) {
    this.belongsTo(models.Pedido, { foreignKey: 'pedido_id', as: 'pedido' });
    this.belongsTo(models.Produto, { foreignKey: 'produto_id', as: 'produto' });
  }
}

export default Pedido_Produto;
