-- AlterTable
ALTER TABLE "User" ALTER COLUMN "mail" DROP NOT NULL;

-- RenameIndex
ALTER INDEX "User_mail_key" RENAME TO "User_email_key";

