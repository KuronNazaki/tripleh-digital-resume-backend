import { Request, Response } from 'express'
import mongoose from 'mongoose'
import SkillModel from '../models/Skill'

export const getSkills = (request: Request, response: Response): void => {
  SkillModel.find((error, data) => {
    response.json(data)
    if (error) {
      console.log(error)
    }
  })
}

export const getSkill = async (
  request: Request,
  response: Response
): Promise<any> => {
  const skillId = request.params.id
  console.log('Skill ID:', skillId)
  if (!mongoose.Types.ObjectId.isValid(skillId)) {
    return false
  }

  await SkillModel.findById(skillId).exec()

  SkillModel.findById(skillId, (error: any, skill: any) => {
    response.json(skill)
    if (error) {
      console.log(error)
    }
  })
}