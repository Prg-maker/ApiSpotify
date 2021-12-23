import SpotifyWebApi from "spotify-web-api-node"


async function getToken(code){
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
  })
  
  try{
  
    const data = await spotifyApi.authorizationCodeGrant(code)
    .then(data => {
      const accessToken = data.body['access_token']
      const refreshToken = data.body['refresh_token']
      const expire_in = data.body['expires_in']
  
  
      spotifyApi.setAccessToken(accessToken)
  
      spotifyApi.setRefreshToken(refreshToken)
  
  
      return {token: accessToken}
  
  
    })
    return data
  
  }catch(err){
    console.log('errou')
  }
}
export default getToken
