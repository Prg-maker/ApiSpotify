import { api } from "../../api"
import { useState } from "react"

import {  createContext } from "react";

export const AuthContext = createContext()







export function Callback(props){
  const [userProfile , setUser] = useState('')
  const [tokenUser , setToken] = useState('')







  return (
    <AuthContext.Provider value={name}>
    </AuthContext.Provider>
  )

}



