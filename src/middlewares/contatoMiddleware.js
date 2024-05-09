const validacao = (request, response, next) => {
  const data = request.body;

  if (data.nome === '' || data.nome === undefined) {
    return response.status(400).json({
      message: 'Campo nome tem que ser preenchido.',
    });
  }

  next();
};

module.exports = {
  validacao,
};
