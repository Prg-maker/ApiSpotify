/*
  Warnings:

  - Added the required column `userId` to the `Musicas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Musicas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "preview_url" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_Musicas" ("artist", "id", "imageUrl", "name", "preview_url") SELECT "artist", "id", "imageUrl", "name", "preview_url" FROM "Musicas";
DROP TABLE "Musicas";
ALTER TABLE "new_Musicas" RENAME TO "Musicas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
