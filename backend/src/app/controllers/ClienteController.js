import Cliente from '../models/Cliente';

class ClienteController {
  async store(req, res) {
    console.log(req.userId)
    const cliente = await Cliente.create({
      user_id: req.userId,
      situacao: req.body.situacao,
      razao_social: req.body.razao_social,
    });

    return res.json(cliente);
  }
}

export default new ClienteController();
