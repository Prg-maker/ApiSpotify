import { prismaClient } from "../prisma"
import SpotifyApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyApi()

class ListPlaylistService{
  async execute(id){
    const playListUser = await prismaClient.playList.findFirst({
      where:{
        id
      }
    })


    let playlist = {
      name: playListUser.name,
      image: playListUser.image,
      
    }

    

  }
}

export {ListPlaylistService}
