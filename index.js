import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/note_book', {
    useNewUrlParser: true
});

// bodyparser
app.use(express.json())

import markRoutes from './src/routes/markRoute'
app.use('/', markRoutes)

import userRoutes from './src/routes/userRoute'
app.use('/', userRoutes)

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`Serveur node et express sur port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`votre serveur est sur le port ${PORT}`)
);
