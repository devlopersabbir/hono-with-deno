import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { posts } from "./schema.ts";

const url = Deno.env.get("DATABASE_URL")!;
console.log("url: ", url);

// Use pg driver.
const { Pool } = pg;

export const db = drizzle({
  client: new Pool({
    connectionString: url,
  }),
  schema: {
    posts,
  },
});
