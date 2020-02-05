module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('prepostos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      //foreign key usage
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
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
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      celular: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      cnpj: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      observacoes: {
        type: Sequelize.STRING,
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
      conta_corrente: {
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
    return queryInterface.dropTable('prepostos');
  }
};
