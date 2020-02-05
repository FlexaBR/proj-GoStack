import * as Yup from 'yup';
import Cidade from '../models/Cidade';

class CidadeController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      estado: Yup.string().required().min(2).max(2),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id, nome, estado } = await Cidade.create(req.body);

    return res.json({
      id,
      nome,
      estado,
    });
  }

  async index(req, res) {
    const cidades = await Cidade.findAll({
      attributes: ['id', 'nome', 'estado'],
    });

    return res.json(cidades)
  }

}

export default new CidadeController();
