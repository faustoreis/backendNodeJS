const contatosModel = require('../models/contatosModel');

const getAll = async (request, response) => {
  const contatos = await contatosModel.getAll();
  return response.status(200).json(contatos[0]);
};

const getOne = async (request, response) => {
  const { id } = request.params;
  const contatos = await contatosModel.getOne(id);
  return response.status(200).json(contatos[0][0]);
};

const contatoAdd = (request, response) => {
  const contato = contatosModel.contatoAdd(request.body);
  return response.status(201).json(contato);
};

const contatoDelete = async (request, response) => {
  const { id } = request.params;
  const contatos = await contatosModel.contatoDelete(id);
  return response.status(200).json(contatos[0][0]);
};

const contatoUpdate = async (request, response) => {
  const { id } = request.params;
  await contatosModel.contatoUpdate(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  contatoAdd,
  getOne,
  contatoDelete,
  contatoUpdate,
};
