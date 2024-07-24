import express from 'express';
import router from './routes/route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParder.erlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use('/', router);

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log('Server is running on PORT ${PORT}'));
