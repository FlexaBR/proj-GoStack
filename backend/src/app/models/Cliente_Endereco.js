import Sequelize, { Model } from 'sequelize';

class Cliente_Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo_logradouro: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cep: Sequelize.STRING,
        observacoes: Sequelize.STRING,
        seleciona: Sequelize.BOOLEAN,
        cnpj_endereco: Sequelize.STRING,
        insc_estadual: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Cliente_Endereco;
