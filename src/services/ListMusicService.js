import {prismaClient} from '../prisma'


class ListMusicService{
  async execute(userId){  
    let musicas = await prismaClient.musicas.findMany({
      where:{
        userId
      }
    })
    console.log(userId)

    return musicas
  } 
}

export {ListMusicService}