import Sequelize, { Model } from 'sequelize';

class Preposto extends Model {
  static init(sequelize) {
    super.init(
      {
        situacao: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
        email: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        observacoes: Sequelize.STRING,
        tipo_logradouro: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cep: Sequelize.STRING,
        conta_corrente: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // Associação entre tabelas
  static associate(models) {
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade' });
  }
}

export default Preposto;
