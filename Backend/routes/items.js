const router = require('express').Router();
const Item = require('../models/Item');
const { getEmbedding, cosineSimilarity } = require('../utils/ml');

router.post('/', async (req, res) => {
  const { type, title, description, category, location } = req.body;
  const text = `${title} ${description} ${category} ${location}`;
  const embedding = await getEmbedding(text);

  const item = new Item({
    type, title, description, category, location, embedding
  });

  await item.save();
  res.json(item);
});

router.get('/match/:id', async (req, res) => {
  const target = await Item.findById(req.params.id);
  const opposite = target.type === 'lost' ? 'found' : 'lost';
  const items = await Item.find({ type: opposite });

  const matches = items
    .map(i => ({
      item: i,
      score: cosineSimilarity(target.embedding, i.embedding)
    }))
    .filter(m => m.score > 0.6)
    .sort((a, b) => b.score - a.score);

  res.json(matches);
});

module.exports = router;