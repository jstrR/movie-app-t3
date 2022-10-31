// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { usersRouter } from "./users";
import { moviesRouter } from "./movies";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("question.", protectedExampleRouter)
  .merge("users.", usersRouter)
  .merge("movies.", moviesRouter);

export { createContext } from "./context";
// export type definition of API
export type AppRouter = typeof appRouter;
