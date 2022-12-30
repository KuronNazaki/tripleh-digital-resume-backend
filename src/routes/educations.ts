import { Router } from 'express'
import { getEducations, getEducation } from '../controllers/educations'

const router = Router()

router.get('/', getEducations)
router.get('/:id', getEducation)

export default router
