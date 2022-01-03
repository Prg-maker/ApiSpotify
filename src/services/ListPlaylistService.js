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
      userId: playListUser.userId,
      name: playListUser.name,
      image: playListUser.image,
      
    }

    return playlist


  }
}

export {ListPlaylistService}
