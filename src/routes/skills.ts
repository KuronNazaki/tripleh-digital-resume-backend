import { Router } from 'express'
import { getSkills, getSkill } from '../controllers/skills'

const router = Router()

router.get('/', getSkills)
router.get('/:id', getSkill)

export default router
