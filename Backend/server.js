const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const exerciseRouter = require('./routes/exerciese');
const userRoute = require('./routes/user');

app.use('/exercise', exerciseRouter);
app.use('/user', userRoute);

app.listen(port, () => console.log(`app is listining at http://localhost:${port}`));

