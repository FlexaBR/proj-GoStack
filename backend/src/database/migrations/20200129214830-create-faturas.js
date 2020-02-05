module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('faturas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      //foreign key usage
      pedido_id: {
        type: Sequelize.INTEGER,
        references: { model: 'pedidos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      cancelado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      nf: {
        type: Sequelize.STRING,
      },
      data_faturamento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      valor_faturado: {
        type: Sequelize.DECIMAL(10, 2),
      },
      porcentagem_comissao: {
        type: Sequelize.DECIMAL(3, 2),
      },
      valor_comissao: {
        type: Sequelize.DECIMAL(10, 2),
      },
      data_vencimento: {
        type: Sequelize.DATE,
      },
      valor_receita: {
        type: Sequelize.DECIMAL(10, 2),
      },
      data_receita: {
        type: Sequelize.DATE,
      },
      porcentagem_preposto: {
        type: Sequelize.DECIMAL(3, 2),
      },
      valor_preposto: {
        type: Sequelize.DECIMAL(10, 2),
      },
      data_preposto: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('faturas');
  }
};
