import express from 'express';
import 'dotenv/config';

const app = express();
const { PORT } = process.env;

app.use(express.json())

app.listen(PORT, () => console.log('Server Up\nhttp://localhost:%s', PORT));
