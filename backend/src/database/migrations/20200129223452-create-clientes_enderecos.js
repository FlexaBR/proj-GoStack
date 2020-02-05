module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes_enderecos', {
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
      cidade_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cidades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
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
      observacao: {
        type: Sequelize.STRING,
      },
      seleciona: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      cnpj_endereco: {
        type: Sequelize.STRING,
      },
      insc_estadual: {
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
    return queryInterface.dropTable('clientes_enderecos');
  }
};
