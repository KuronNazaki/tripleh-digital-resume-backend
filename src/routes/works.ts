import { Router } from 'express'
import { getWorks, getWork } from '../controllers/works';

const router = Router()

router.get('/', getWorks)
router.get('/:id', getWork)

export default router