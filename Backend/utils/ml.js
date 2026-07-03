const axios = require('axios');

const HF_URL =
  "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2";

async function getEmbedding(text) {
  const res = await axios.post(
    HF_URL,
    { inputs: text },
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`
      }
    }
  );
  return res.data;
}

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
  return dot / (magA * magB);
}

module.exports = { getEmbedding, cosineSimilarity };