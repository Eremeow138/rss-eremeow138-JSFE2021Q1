import { Router } from 'express';
import { StatusCodes } from '../common';
import { getStatistics, resetStatistic, updateStatistic } from './repository';
import { WordStatistics } from './staistics';

const router = Router();

// Get all categoriesnpm
router.get('/', async (req, res) => {
  const allStatistics = await getStatistics();
  return res.json(allStatistics);
});
router.delete('/', async (req, res) => {
  const allStatistics = await resetStatistic();
  return res.json(allStatistics);
});

router.put('/', async (req, res) => {
  const wordsStatistics = req.body as WordStatistics[];

  try {
    const newWordStatistic = await updateStatistic(wordsStatistics);
    return res.json(newWordStatistic);
  } catch (e) {
    return res.status(StatusCodes.NotFound).send(e);
  }
});

export default router;
