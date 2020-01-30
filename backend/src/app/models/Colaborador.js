import Sequelize, { Model } from 'sequelize';

class Colaborador extends Model {
  static init(sequelize) {
    super.init(
      {
        desligado: Sequelize.BOOLEAN,
        nome_colaborador: Sequelize.STRING,
        data_nascimento: Sequelize.DATE,
        data_admissao: Sequelize.DATE,
        tipo_logradouro: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cep: Sequelize.STRING,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        contato_emergencia: Sequelize.STRING,
        telefone_emergencia: Sequelize.STRING,
        conta_corrente: Sequelize.STRING,
        observacoes: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Colaborador;
