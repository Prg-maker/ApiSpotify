
import SpotifyWebApi from 'spotify-web-api-node'
import getToken from '../hooks/GetTokenController'

import {prismaClient} from '../prisma'

import {sign} from 'jsonwebtoken'

const spotifyWebApi = new SpotifyWebApi()
class AuthorizationUserServices{
  async execute(code){
    const accessToken = await  getToken(code)
    try{
      spotifyWebApi.setAccessToken(accessToken.token)
    
    

      const me =  await spotifyWebApi.getMe()
  
      const {id , display_name:name , email ,  type , country } = me.body
  
      const url = me.body.images
  
      const urlPhoto = url[0].url
  
  
  
      let user = await prismaClient.user.findFirst({
        where:{
          id
        }
      })
  
      if(!user){
    
        user = await prismaClient.user.create({
          data:{
            id,
            name,
            email,
            urlPhoto,
            type,
            country
          }
        })
      }
      
  
  
      const token = sign({
        user:{
          id: user.id,
          name: user.name,
          url_photo: user.urlPhoto,
          type: user.type,
          country: user.country
        }
      }, 
        process.env.JWT_TOKEN,
        {
          subject: user.id,
          expiresIn: "1d"
        }
      ) 
  
  
      return {token , user}
    }catch(err){
      return "Code erro"
    }
    


  }
}

export {AuthorizationUserServices}