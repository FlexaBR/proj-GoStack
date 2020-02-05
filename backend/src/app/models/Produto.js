import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        ativo: Sequelize.BOOLEAN,
        nome: Sequelize.STRING,
        referencia: Sequelize.STRING,
        unidade: Sequelize.STRING,
        caixa_padrao: Sequelize.STRING,
        tabela1: Sequelize.DECIMAL,
        tabela2: Sequelize.DECIMAL,
        tabela3: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // Associação entre tabelas
  static associate(models) {
    this.belongsTo(models.Fabrica, { foreignKey: 'fabrica_id', as: 'fabrica' });
  }
}

export default Produto;
