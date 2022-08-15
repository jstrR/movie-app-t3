/*
  Warnings:

  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" RENAME COLUMN "email" TO "mail";
ALTER TABLE "User" RENAME COLUMN "emailVerified" TO "mailVerified";
