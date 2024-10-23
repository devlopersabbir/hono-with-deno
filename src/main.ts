import { Hono } from "hono";
import type { Context } from "hono";
import { logger } from "hono/logger";
import { db } from "./db.ts";

const app = new Hono();
app.use(logger());

app.get("/:id/", (c: Context) => {
  const id = c.req.param("id"); // as string
  const query = c.req.query("query"); // as string

  return c.text(`id: ${id}. query data ${query}`, {
    status: 200,
  });
});

Deno.serve(
  {
    port: 5000,
  },
  app.fetch
);
