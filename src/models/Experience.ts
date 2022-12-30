import { model, Schema } from 'mongoose'

export interface ExperienceDto {
  name: string
  time: string
	contentRole: string,
	description: string
}

const schema = new Schema<ExperienceDto>({
  name: { type: String, required: true },
  time: { type: String, required: true },
	contentRole: { type: String, required: true },
	description: { type: String, required: true }
})

const ExperienceModel = model<ExperienceDto>('experiences', schema)

export default ExperienceModel
