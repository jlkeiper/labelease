import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// TODO: Add routes for QR generation, PDF export, inventory management

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Label Ease API running on port ${PORT}`);
});
