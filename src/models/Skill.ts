import { model, Schema } from 'mongoose'

export interface SkillDto {
  name: string
  skills: {
    name: string
    proficiency?: string
  }
}

const schema = new Schema<SkillDto>({
  name: { type: String, required: true },
  skills: {
    name: { type: String, required: true },
    proficiency: { type: String, required: false },
  },
})

const SkillModel = model<SkillDto>('skills', schema)

export default SkillModel
