import Sequelize, { Model } from 'sequelize';

class Fatura extends Model {
  static init(sequelize) {
    super.init(
      {
        cancelado: Sequelize.BOOLEAN,
        nf: Sequelize.STRING,
        data_faturamento: Sequelize.DATE,
        valor_faturado: Sequelize.DECIMAL,
        porcentagem_comissao: Sequelize.DECIMAL,
        valor_comissao: Sequelize.DECIMAL,
        data_vencimento: Sequelize.DATE,
        valor_receita: Sequelize.DECIMAL,
        data_receita: Sequelize.DATE,
        porcentagem_preposto: Sequelize.DECIMAL,
        valor_preposto: Sequelize.DECIMAL,
        data_preposto: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Fatura;
