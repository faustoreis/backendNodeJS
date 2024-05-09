const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const porta = process.env.PORT;

app.listen(porta, () => {
  console.log(`Server executando porta ${porta}`);
});
