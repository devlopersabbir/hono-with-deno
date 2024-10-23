import { drizzle } from "npm:drizzle-orm/node-postgres";
import { Pool } from "npm:pg";
import { posts } from "./schema.ts";

const pool = new Pool({
  connectionString: Deno.env.get("DATABASE_URI") as string,
});

const db = drizzle({
  client: pool,
  schema: {
    posts,
  },
});

export { db };
