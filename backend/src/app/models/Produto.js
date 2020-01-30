import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        ativo: Sequelize.BOOLEAN,
        nome_produto: Sequelize.STRING,
        referencia: Sequelize.STRING,
        unidade: Sequelize.STRING,
        caixa_padrao: Sequelize.STRING,
        tabela1: Sequelize.DECIMAL,
        tabela2: Sequelize.DECIMAL,
        tabela3: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Produto;
