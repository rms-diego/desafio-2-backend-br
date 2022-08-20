import express from 'express';
import 'dotenv/config';
import errorMiddleware from './middleware/errorMiddleware';
import userRoutes from './routes'

const app = express();
const { PORT } = process.env;

app.use(express.json())
app.use(userRoutes)
app.use(errorMiddleware)

app.listen(PORT, () => console.log('Server Up\nhttp://localhost:%s', PORT));
