import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import educationsRoute from './routes/educations'
import experiencesRoute from './routes/experiences'
import worksRoute from './routes/works'
import skillsRoute from './routes/skills'
import mongoose from 'mongoose'
import { getDatabaseUrl } from './utils/databaseConnection'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/educations', educationsRoute)
app.use('/experiences', experiencesRoute)
app.use('/works', worksRoute)
app.use('/skills', skillsRoute)

const port = process.env.PORT || 8080

const databaseUrl =
  process.env.ENVIRONMENT === 'production'
    ? getDatabaseUrl(
        process.env.DB_HOST,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        process.env.DB_NAME
      )
    : process.env.DB_HOST_DOCKER

mongoose
  .connect(`${databaseUrl}`)
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Server and database running on port ${port}, http://localhost:${port}`
      )
    )
  })
  .catch((error: any) => {
    console.log(error)
  })

mongoose.set('strictQuery', false)

module.exports = app
