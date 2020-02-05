import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        situacao: Sequelize.INTEGER,
        razao_social: Sequelize.STRING,
        nome_abreviado: Sequelize.STRING,
        fantasia: Sequelize.STRING,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
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
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Cliente;
