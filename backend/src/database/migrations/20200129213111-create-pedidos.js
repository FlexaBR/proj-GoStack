module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      //foreign key usage
      cliente_id: {
        type: Sequelize.INTEGER,
        references: { model: 'clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      fabrica_id: {
        type: Sequelize.INTEGER,
        references: { model: 'fabricas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      preposto_id: {
        type: Sequelize.INTEGER,
        references: { model: 'prepostos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      data_orcamento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      data_pedido: {
        type: Sequelize.DATE
      },
      pedido_fabrica: {
        type: Sequelize.STRING,
      },
      frete: {
        type: Sequelize.STRING,
      },
      parcelas: {
        type: Sequelize.STRING,
      },
      data_entrega: {
        type: Sequelize.DATE,
      },
      total_orcamento: {
        type: Sequelize.DECIMAL(10, 2),
      },
      total: {
        type: Sequelize.DECIMAL(10, 2),
      },
      desconto: {
        type: Sequelize.DECIMAL(6, 2),
      },
      porcentagem_comissao: {
        type: Sequelize.DECIMAL(3, 2),
      },
      valor_comissao: {
        type: Sequelize.DECIMAL(10, 2),
      },
      observacoes: {
        type: Sequelize.STRING,
      },
      data_email: {
        type: Sequelize.DATE,
      },
      lido: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    return queryInterface.dropTable('pedidos');
  }
};
