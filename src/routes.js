import { Router } from "express";

import {AuthorizationUserController} from './Controller/AuthorizationUserController'


const router = Router()


router.post('/authorization' , new AuthorizationUserController().handle)
router.post('/listPlaylist' , )


export {router}