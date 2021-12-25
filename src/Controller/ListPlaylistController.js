import { ListPlaylistService } from "../services/ListPlaylistService"


class ListPlaylistController{
  async handle(request , response){
    const {id} = request.body

    const service = new ListPlaylistService()

    const result = await service.execute(id)

    return response.json(result)
  }
}

export {ListPlaylistController}