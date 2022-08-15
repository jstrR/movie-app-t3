/*
  Warnings:

  - Made the column `mail` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "mail" SET NOT NULL;

-- RenameIndex
ALTER INDEX "User_email_key" RENAME TO "User_mail_key";
