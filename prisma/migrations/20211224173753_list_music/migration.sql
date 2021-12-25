/*
  Warnings:

  - Added the required column `image` to the `PlayList` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `PlayList` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Musicas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "preview_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MusicasToPlayList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Musicas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "PlayList" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "PlayList_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayList" ("id", "name", "userId") SELECT "id", "name", "userId" FROM "PlayList";
DROP TABLE "PlayList";
ALTER TABLE "new_PlayList" RENAME TO "PlayList";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_MusicasToPlayList_AB_unique" ON "_MusicasToPlayList"("A", "B");

-- CreateIndex
CREATE INDEX "_MusicasToPlayList_B_index" ON "_MusicasToPlayList"("B");
