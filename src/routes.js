import { Router } from "express";

import {AuthorizationUserController} from './Controller/AuthorizationUserController'
import {ProfileUserController} from './Controller/ProfileUserController'
import {ListPlaylistController} from './Controller/ListPlaylistController'


import {ensureAuthenticate} from './middleware/ensureAuthenticate'



const router = Router()



router.post('/authorization' , new AuthorizationUserController().handle)
router.get('/user' ,ensureAuthenticate, new ProfileUserController().handle )

router.get('/listplaylist' , /*ensureAuthenticate,*/ new ListPlaylistController().handle )


export {router}