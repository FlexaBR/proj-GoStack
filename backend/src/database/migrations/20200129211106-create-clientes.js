module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
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
        type: Sequelize.STRING
      },
      fantasia: {
        type: Sequelize.STRING
      },
      contato: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('clientes');
  }
};
