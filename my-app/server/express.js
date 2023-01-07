const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

const cors = require('cors');
app.use(cors({
    origin: true,
    credentials: true,
}));

app.use(express.json());

app.listen(2005, ()=>{console.log('server run in 2005');})