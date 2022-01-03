
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
  
  
      let playlist
  
      let user = await prismaClient.user.findFirst({
        where:{
          id
        },
        include:{
          playlist: true
        }
      })



     


  
      if(!user){

        const data = await spotifyWebApi.getUserPlaylists(id)

        


        
        for( playlist of data.body.items){
          
        }
        let image = playlist.images[0].url
    
        user = await prismaClient.user.create({
          data:{
            id,
            name,
            email,
            urlPhoto,
            type,
            country,
            playlist:{
              create:{
                userId: playlist.id,
                name: playlist.name,
                image: image,
              }
            }
          }
        })

     
                
        const dataMusic = await spotifyWebApi.getPlaylistTracks(playlist.id , {
          offset: 1,
          limit: 100,
          fields: 'items'
        })

    

        
        for(let tracks_obj of dataMusic.body.items){
          let track 
          track = tracks_obj.track

          let artist = track.album.artists.map(artist => {
            return artist.name
          })

          let img = track.album.images.map(img => {

            return img.url

          })
         
          let music = await prismaClient.musicas.create({
            data:{
              id:track.album.id,
              name: track.album.name,
              imageUrl:img[0],
              artist: artist[0],
              preview_url: track.preview_url,
              userId: playlist.id
            }
          })
        }

     
          
        

      }
      
  
  
      const token = sign({
        user:{
          id: user.id,
          name: user.name,
          url_photo: user.urlPhoto,
          type: user.type,
          country: user.country,
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
      return console.log('err')
    }
    


  }
}

export {AuthorizationUserServices}