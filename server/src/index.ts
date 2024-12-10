import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from TypeScript Express!??');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});