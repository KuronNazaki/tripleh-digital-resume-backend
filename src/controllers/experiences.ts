import { Request, Response } from 'express'
import mongoose from 'mongoose'
import ExperienceModel from '../models/Experience'

export const getExperiences = (request: Request, response: Response): void => {
  ExperienceModel.find((error, data) => {
    response.json(data)
    if (error) {
      console.log(error)
    }
  })
}

export const getExperience = async (
  request: Request,
  response: Response
): Promise<any> => {
  const experienceId = request.params.id
  console.log('Experience ID:', experienceId)
  if (!mongoose.Types.ObjectId.isValid(experienceId)) {
    return false
  }

  await ExperienceModel.findById(experienceId).exec()

  ExperienceModel.findById(experienceId, (error: any, experience: any) => {
    response.json(experience)
    if (error) {
      console.log(error)
    }
  })
}
