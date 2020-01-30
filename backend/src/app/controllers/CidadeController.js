import * as Yup from 'yup';
import Cidade from '../models/Cidade';

class CidadeController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome_cidade: Yup.string().required(),
      estado: Yup.string().required().min(2).max(2),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id, nome_cidade, estado } = await Cidade.create(req.body);

    return res.json({
      id,
      nome_cidade,
      estado,
    });
  }

}

export default new CidadeController();
