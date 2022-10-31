import { PrismaClient } from '@prisma/client';

import { MoviesDB } from './moviesDB';

const prisma = new PrismaClient();

async function main() {
  const movies = await Promise.all(MoviesDB.map(movie => prisma.movie.create({
    data: { ...movie, releaseDate: new Date(movie.releaseDate), genres: { create: movie.genres.map(movieGenre => ({ genre: { connectOrCreate: { where: {title: movieGenre }, create: {title: movieGenre } } } }))} }
  })));

  console.log({ movies })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })