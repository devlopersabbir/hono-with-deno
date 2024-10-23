import { defineConfig } from "drizzle-kit";

console.log("bd: ", Deno.env.get("DATABASE_URI"));
export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: Deno.env.get("DATABASE_URI") as string,
    ssl: true,
  },
});
