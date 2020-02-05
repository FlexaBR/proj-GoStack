module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos_produtos', {
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
      produto_id: {
        type: Sequelize.INTEGER,
        references: { model: 'produtos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      cancelado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      detalhes: {
        type: Sequelize.STRING,
      },
      observacoes: {
        type: Sequelize.STRING,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      sub_total: {
        type: Sequelize.DECIMAL(10, 2),
      },
      comissao_pedido: {
        type: Sequelize.DECIMAL(10, 2),
      },
      sub_comissao: {
        type: Sequelize.DECIMAL(10, 2),
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
    return queryInterface.dropTable('pedidos_produtos');
  }
};
