import * as Yup from 'yup';
import Colaborador from '../models/Colaborador';

class ColaboradorController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      data_nascimento: Yup.string().required(),
      data_admissao: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id, cidade_id, nome, data_nascimento, data_admissao
    } = await Colaborador.create(req.body);

    return res.json({
      id,
      cidade_id,
      nome,
      data_nascimento,
      data_admissao,
    });
  }

  async index(req, res) {
    const colaboradores = await Colaborador.findAll({
      attributes: ['id', 'nome', 'email'],
    });

    return res.json(colaboradores)
  }

}

export default new ColaboradorController();
