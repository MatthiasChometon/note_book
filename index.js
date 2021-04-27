require('dotenv').config()

import express from 'express';
import mongoose from 'mongoose';
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '50MB' }));
const PORT = process.env.SERVER_PORT;

// connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});

// bodyparser
app.use(express.json())

import markRoutes from './src/routes/markRoute'
app.use('/', markRoutes)

import userRoutes from './src/routes/userRoute'
app.use('/', userRoutes)

import authRoutes from './src/routes/authRoutes'
app.use('/', authRoutes)

app.use(express.static('public'));

var corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
}

app.get('/', cors(corsOptions), (req, res) =>
    res.send(`Serveur sur port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`votre serveur est sur le port ${PORT}`)
);

