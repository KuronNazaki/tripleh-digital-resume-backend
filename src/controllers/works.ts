import { Request, Response } from 'express'
import mongoose from 'mongoose'
import WorkModel from '../models/Work'

export const getWorks = (request: Request, response: Response): void => {
  WorkModel.find((error, data) => {
    response.json(data)
    if (error) {
      console.log(error)
    }
  })
}

export const getWork = async (
  request: Request,
  response: Response
): Promise<any> => {
  const workId = request.params.id
  console.log('Work ID:', workId)
  if (!mongoose.Types.ObjectId.isValid(workId)) {
    return false
  }

  await WorkModel.findById(workId).exec()

  WorkModel.findById(workId, (error: any, work: any) => {
    response.json(work)
    if (error) {
      console.log(error)
    }
  })
}
