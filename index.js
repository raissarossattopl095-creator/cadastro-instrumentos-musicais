
import express from 'express';
import Instrumento from './models/Instrumento.js';

const app = express();

// Configuração do formulário
app.use(express.urlencoded({ extended: true }));

// Configuração do EJS
app.set('view engine', 'ejs');

// Configuração da pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + '/public'));

// Página inicial
app.get('/', (req, res) => {
    res.send('Sistema de Cadastro de Instrumentos Musicais');
});

// Abrir formulário de cadastro
app.get('/instrumento/add', (req, res) => {
    res.render('instrumento/add');
});

// Salvar instrumento
app.post('/instrumento/add/ok', async (req, res) => {
    const { nome, fabricante, preco, tipo } = req.body;

    await Instrumento.create({
        nome,
        fabricante,
        preco,
        tipo
    });

    res.render('instrumento/addok', { nome });
});

// Listar instrumentos
app.get('/instrumento/lst', async (req, res) => {
    const instrumentos = await Instrumento.find();

    res.render('instrumento/lst', { instrumentos });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
