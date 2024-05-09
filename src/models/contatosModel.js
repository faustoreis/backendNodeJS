const connection = require('./connections');

const getAll = async () => {
  const query = 'SELECT * FROM contatos';
  const contatos = await connection.execute(query);
  return contatos;
};

const getOne = async (id) => {
  const query = 'SELECT * FROM contatos WHERE id=?';
  const contatos = await connection.execute(query, [id]);
  return contatos;
};

const contatoAdd = async (reg) => {
  const query = 'INSERT INTO contatos (nome, email, sexo) VALUES (?,?,?)';
  const [contatoAdd] = await connection.execute(query, [
    reg.nome,
    reg.email,
    reg.sexo,
  ]);
  return contatoAdd;
};

const contatoDelete = async (id) => {
  const query = 'DELETE FROM contatos WHERE id=?';
  const contatos = await connection.execute(query, [id]);
  return contatos;
};

const contatoUpdate = async (id, reg) => {
  const query = 'UPDATE contatos SET nome=?, sexo=?, email=? WHERE id=?';
  const [contatoUpdate] = await connection.execute(query, [
    reg.nome,
    reg.sexo,
    reg.email,
    id,
  ]);
  return contatoUpdate;
};

module.exports = {
  getAll,
  contatoAdd,
  getOne,
  contatoDelete,
  contatoUpdate,
};
