import { createRouter } from "./context";
import { z } from "zod";
import * as trpc from '@trpc/server';

export const moviesRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.movie.findMany({
        include: {
          genres: {
            include: {
              genre: true,
            }
          }
        }
      });
    },
  });
