module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      //foreign key usage
      fabrica_id: {
        type: Sequelize.INTEGER,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      nome_produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      referencia: {
        type: Sequelize.STRING,
      },
      unidade: {
        type: Sequelize.STRING,
      },
      caixa_padrao: {
        type: Sequelize.STRING,
      },
      tabela1: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      tabela2: {
        type: Sequelize.DECIMAL(10, 2),
      },
      tabela3: {
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
    return queryInterface.dropTable('produtos');
  }
};
