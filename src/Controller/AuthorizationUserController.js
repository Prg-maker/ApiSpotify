import {AuthorizationUserServices} from '../services/AuthorizationUserServices'


class AuthorizationUserController{
  async handle(request , response){
    const {code} = request.body

    const services = new AuthorizationUserServices()

    const result = await services.execute(code)

    return response.json(result)




  }
}

export {AuthorizationUserController}