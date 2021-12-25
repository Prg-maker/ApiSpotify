import {verify} from 'jsonwebtoken'
import {Request, response, NextFunction} from 'express'

export function ensureAuthenticate(request , response , next){
  const authToken = request.headers.authorization

  if(!authToken){
    return response.status(404).json({
      errorCode: 'token.invalid'
    })
  }

  const [, token] = authToken.split(" ")

  try{
    return next()
  }catch(err){
    return response.json('token.expired')
  }
}