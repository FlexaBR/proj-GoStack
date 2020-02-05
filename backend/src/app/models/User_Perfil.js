import Sequelize, { Model } from 'sequelize';

class User_Perfil extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        perfil_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // Associação entre tabelas
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'usuario' });
    this.belongsTo(models.Perfil, { foreignKey: 'perfil_id', as: 'perfil' });
  }
}

export default User_Perfil;
