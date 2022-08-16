import { createRouter } from "./context";
import { z } from "zod";
import * as trpc from '@trpc/server';

export const usersRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  })
  .mutation("addOne", {
    input: z
      .object({
        name: z.string(),
        mail: z.string().email(),
      }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.upsert({
        create: {
            name: input.name,
            mail: input.mail,
        },
        update: {
            name: input.name,
            mail: input.mail,
        },
        where: {
            mail: input.mail,
        },
      });
    },
  })
  .mutation("deleteOne", {
    input: z
      .object({
        mail: z.string().email(),
      }),
    async resolve({ ctx, input }) {
      try {
        return await ctx.prisma.user.delete({
          where: {
              mail: input.mail,
          },
        });
      }
      catch(e) {
        throw new trpc.TRPCError({
          code: 'NOT_FOUND',
          message:`Unable to delete ${input.mail}`,
          cause: e,
        });
      }
    },
  });
