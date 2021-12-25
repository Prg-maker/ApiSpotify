import { ProfileUserService } from "../services/ProfileUserSevice"



class ProfileUserController{
  async handle(request , response){
    const {id} = request.body


    const service = new ProfileUserService()


    const result = await service.handle(id)

    return response.json(result)
  }
}

export {ProfileUserController}