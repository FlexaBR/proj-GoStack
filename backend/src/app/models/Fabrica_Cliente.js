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

  // Associação entre tabela users e files
  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
    this.belongsTo(models.Fabrica, { foreignKey: 'fabrica_id', as: 'fabrica' });
    this.belongsTo(models.Preposto, { foreignKey: 'preposto_id', as: 'preposto' });
  }
}

export default Fabrica_Cliente;
