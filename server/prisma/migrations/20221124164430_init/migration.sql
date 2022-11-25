/*
  Warnings:

  - You are about to drop the column `user_id` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image_source` on the `User` table. All the data in the column will be lost.
  - Made the column `post_id` on table `Image` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Image_Type" AS ENUM ('Profile', 'Post');

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_user_id_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "user_id",
ADD COLUMN     "type" "Image_Type" NOT NULL DEFAULT 'Post',
ALTER COLUMN "source" SET DEFAULT '',
ALTER COLUMN "post_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profile_image_source",
ADD COLUMN     "address" TEXT;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;
