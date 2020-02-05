import Sequelize, { Model } from 'sequelize';

class Cliente_Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo_logradouro: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cep: Sequelize.STRING,
        observacoes: Sequelize.STRING,
        seleciona: Sequelize.BOOLEAN,
        cnpj_endereco: Sequelize.STRING,
        insc_estadual: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // Associação entre tabela users e files
  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade' });
  }
}

export default Cliente_Endereco;
