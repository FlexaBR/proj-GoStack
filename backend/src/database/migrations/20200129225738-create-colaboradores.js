module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('colaboradores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      //foreign key usage
      cidade_id: {
        type: Sequelize.INTEGER,
      },
      desligado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      nome_colaborador: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      data_admissao: {
        type: Sequelize.DATE
      },
      tipo_logradouro: {
        type: Sequelize.STRING,
      },
      logradouro: {
        type: Sequelize.STRING,
      },
      numero: {
        type: Sequelize.STRING,
      },
      complemento: {
        type: Sequelize.STRING,
      },
      bairro: {
        type: Sequelize.STRING,
      },
      cep: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      contato_emergencia: {
        type: Sequelize.STRING
      },
      telefone_emergencia: {
        type: Sequelize.STRING
      },
      conta_corrente: {
        type: Sequelize.STRING,
      },
      observacoes: {
        type: Sequelize.STRING
      },
      cadastrado_por: {
        type: Sequelize.STRING
      },
      atualizado_por: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('colaboradores');
  }
};
