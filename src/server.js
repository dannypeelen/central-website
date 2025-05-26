const express = require('express');
const cors = require('cors');
const { createAnkiDeck } = require('./anki_generator');
const { processQuestions } = require('./model_handler');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get();