import { model, Schema } from 'mongoose'

export interface EducationDto {
  name: string
  time: string
  address: string
}

const schema = new Schema<EducationDto>({
  name: { type: String, required: true },
  time: { type: String, required: true },
  address: { type: String, required: true },
})

const EducationModel = model<EducationDto>('educations', schema)

export default EducationModel
