module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cidades', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: false,
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
    return queryInterface.dropTable('cidades');
  }
};
