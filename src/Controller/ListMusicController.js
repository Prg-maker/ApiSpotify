import { ListMusicService } from "../services/ListMusicService"



class ListMusicController{
  async handle(request , response){
    const {userId} = request.body

    const service = new ListMusicService()

    const result = await service.execute(userId)


    return response.json(result)
  }
}

export {ListMusicController}