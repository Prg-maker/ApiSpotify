---- Spotify

# usuario
- id 
- Nome
- Country
- email
- image 
- Playlist
- type == artist or user

# playlist 
- id
- name 
- musics


# musics 
- id 
- name 
- urlPhoto




plalist  PlayList[]

model PlayList {
  id   String @id
  name String

  User   User?   @relation(fields: [userId], references: [id])
  userId String?

}

