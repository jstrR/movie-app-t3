/*
  Warnings:

  - You are about to drop the `Custom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Custom";

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
