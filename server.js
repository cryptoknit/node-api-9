import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true, name: 'node-api' });
});

app.listen(8899, () => console.log('[node-api] listening on :8899'));