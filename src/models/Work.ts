import { model, Schema } from 'mongoose'

export interface WorkDto {
	name: string
  time: string
  descriptions: string[]
}

const schema = new Schema<WorkDto>({
  name: { type: String, required: true },
  time: { type: String, required: true },
	descriptions: [{ type: String, required: true}]
})

const WorkModel = model<WorkDto>('works', schema)

export default WorkModel
