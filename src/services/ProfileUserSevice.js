import { prismaClient } from "../prisma"



class ProfileUserService{
  async handle(id){
    const User = await prismaClient.user.findFirst({
      where:{
        id
      }
    })
    
    return User
  }
}
export {ProfileUserService}