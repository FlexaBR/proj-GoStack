import Sequelize, { Model } from 'sequelize';

class Preposto extends Model {
  static init(sequelize) {
    super.init(
      {
        situacao: Sequelize.INTEGER,
        nome_preposto: Sequelize.STRING,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
        email: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        observacoes: Sequelize.STRING,
        tipo_logradouro: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cep: Sequelize.STRING,
        conta_corrente: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Preposto;
