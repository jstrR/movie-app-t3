/*
  Warnings:

  - Added the required column `places` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "places" INTEGER NOT NULL;
