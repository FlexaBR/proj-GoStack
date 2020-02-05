module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fabricas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      //foreign key usage,
      cidade_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cidades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      razao_social: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nome_abreviado: {
        type: Sequelize.STRING,
      },
      fantasia: {
        type: Sequelize.STRING,
      },
      contato: {
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
      email_cc: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('fabricas');
  }
};
