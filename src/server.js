import'dotenv/config'
import cors from 'cors'
import express from 'express'
import {router} from './routes'
const server = express()

server.use(cors())

server.use(express.json())
server.use(router)

server.get('/', (request , response) => {
  return response.redirect(`https://accounts.spotify.com/authorize?response_type=${process.env.TYPE_CODE}&client_id=${process.env.CLIENT_ID}&scope=${process.env.SCOPE}&redirect_uri=${process.env.REDIRECT_URI}`)
})



const corsOptions = {
  origin: "*"
}

server.use(cors(corsOptions))

server.get('/callback' , async (request , response) => {
  const {code} = request.query
  console.log(code)
  return response.json(code)

})




server.listen(3001 , () => console.log('server running'))