import Sequelize, { Model } from 'sequelize';

class Perfil extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_perfil: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

}

export default Perfil;
