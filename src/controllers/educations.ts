import { Request, Response } from 'express'
import EducationModel from '../models/Education'
import mongoose from 'mongoose'

export const getEducations = (request: Request, response: Response): void => {
  EducationModel.find((error, data) => {
    response.json(data)
    if (error) {
      console.log(error)
    }
  })
}

export const getEducation = async (
  request: Request,
  response: Response
): Promise<any> => {
  const educationId = request.params.id
  console.log('Education ID:', educationId)
  if (!mongoose.Types.ObjectId.isValid(educationId)) {
    return false
  }

  await EducationModel.findById(educationId).exec()

  EducationModel.findById(educationId, (error: any, education: any) => {
    response.json(education)
    if (error) {
      console.log(error)
    }
  })
}
