import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import educationsRoute from './routes/educations'
import mongoose from 'mongoose'

dotenv.config()

console.log(process.env.DB_HOST)

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/educations', educationsRoute)

const port = process.env.PORT || 8080

mongoose
  .connect(`${process.env.DB_HOST_DOCKER}`)
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
