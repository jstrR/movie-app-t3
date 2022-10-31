/*
  Warnings:

  - You are about to drop the column `places` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the `MovieGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MovieGenre" DROP CONSTRAINT "MovieGenre_genre_id_fkey";

-- DropForeignKey
ALTER TABLE "MovieGenre" DROP CONSTRAINT "MovieGenre_movie_id_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "places";

-- DropTable
DROP TABLE "MovieGenre";

-- CreateTable
CREATE TABLE "MovieToGenre" (
    "movie_id" TEXT NOT NULL,
    "genre_id" TEXT NOT NULL,

    CONSTRAINT "MovieToGenre_pkey" PRIMARY KEY ("movie_id","genre_id")
);

-- AddForeignKey
ALTER TABLE "MovieToGenre" ADD CONSTRAINT "MovieToGenre_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieToGenre" ADD CONSTRAINT "MovieToGenre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
