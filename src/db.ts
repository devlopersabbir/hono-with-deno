// import { drizzle } from "npm:drizzle-orm/node-postgres";

import { drizzle } from "npm:drizzle-orm/postgres-js";
import { posts } from "./schema.ts";
import postgres from "postgres";

const url = Deno.env.get("DATABASE_URI");
console.log("url: ", url);
const queryClient = postgres(url as string);

const db = drizzle({
  client: queryClient,
  schema: {
    posts,
  },
});

export { db };
