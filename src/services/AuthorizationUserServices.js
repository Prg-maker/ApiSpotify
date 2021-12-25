
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
        
      })

      /*Playlist image*/ 


     


  
      if(!user){

        const data = await spotifyWebApi.getUserPlaylists(id)

        let tracks = []

        for( playlist of data.body.items){
        
          let tracks = await getPlaylistTracks(playlist.id , playlist.name)
  
          
        }
        console.log(playlist.id , playlist.name , playlist.images)


      
        
        async function  getPlaylistTracks(playlistId , playlistName){
          const data = await spotifyWebApi.getPlaylistTracks(playlistId , {
            offset: 1,
            limit: 100,
            fields: 'items'
          })
  
          let track 
          
  
          for(let tracks_obj of data.body.items){
            track = tracks_obj.track
  
            tracks.push(track)
            
          }
          

          return tracks
  
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
                musicas:{
                  create:{
                    id: '1',
                    artist: "daniel",
                    imageUrl: '5',
                    name: "daniel",
                    preview_url: "565"
                  }
                }
              }
            }
           
          }
        })
      }
      
  
  
      const token = sign({
        user:{
          id: user.id,
          name: user.name,
          url_photo: user.urlPhoto,
          type: user.type,
          country: user.country,
          playlist: playlist
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
      return console.log(err)
    }
    


  }
}

export {AuthorizationUserServices}