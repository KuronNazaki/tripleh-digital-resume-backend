import { model, Schema } from 'mongoose'

interface Education {
  name: string
  time: string
  address: string
}

const schema = new Schema<Education>({
  name: { type: String, required: true },
  time: { type: String, required: true },
  address: { type: String, required: true },
})

const EducationModel = model<Education>('educations', schema)

export default EducationModel
