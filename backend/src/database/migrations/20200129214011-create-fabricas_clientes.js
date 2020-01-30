module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fabricas_clientes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      //foreign key usage
      cliente_id: {
        type: Sequelize.INTEGER,
      },
      fabrica_id: {
        type: Sequelize.INTEGER,
      },
      preposto_id: {
        type: Sequelize.INTEGER,
      },
      comissao_cliente: {
        type: Sequelize.DECIMAL(3, 2),
      },
      tabela: {
        type: Sequelize.STRING,
      },
      observacao: {
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
    return queryInterface.dropTable('fabricas_clientes');
  }
};
