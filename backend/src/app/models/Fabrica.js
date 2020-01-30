import Sequelize, { Model } from 'sequelize';

class Fabrica extends Model {
  static init(sequelize) {
    super.init(
      {
        situacao: Sequelize.INTEGER,
        razao_social: Sequelize.STRING,
        fantasia: Sequelize.STRING,
        nome_abreviado: Sequelize.STRING,
        contato: Sequelize.STRING,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
        email: Sequelize.STRING,
        email_cc: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        tipo_logradouro: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Fabrica;
