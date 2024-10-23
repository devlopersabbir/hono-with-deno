import { Hono } from "hono";
import type { Context } from "hono";
import { logger } from "hono/logger";
import { db } from "./db.ts";
import { posts } from "./schema.ts";
import { eq, like } from "npm:drizzle-orm";

const app = new Hono();
app.use(logger());

app.get("/", (c: Context) => {
  const id = c.req.param("id"); // as string
  const query = c.req.query("query"); // as string

  return c.text(`id: ${id}. query data ${query}`, {
    status: 200,
  });
});

// create
app.post("/posts", async (c: Context) => {
  const body = await c.req.json();
  await db.insert(posts).values(body);

  return c.text("post created");
});
// read
app.get("/posts", async (c: Context) => {
  const post = await db.select().from(posts);
  return c.json(post);
});
// update
app.put("/posts/:uuid", async (c: Context) => {
  const uuid = c.req.param("uuid");
  const { name, description } = await c.req.json();
  const pst = await db.query.posts.findFirst({
    where: (post, { eq }) => eq(post.uuid, uuid),
  });
  if (!pst)
    return c.json({
      message: "Post not fund!",
    });
  try {
    const updatePost = await db
      .update(posts)
      .set({
        name: name || pst.name,
        description: description || pst.description,
      })
      .where(eq(posts.uuid, uuid))
      .returning();
    return c.json(updatePost[0]);
  } catch (error) {
    console.log(error);
    return c.text("something went wrong!");
  }
});
// delete
app.delete("/posts/:uuid", async (c: Context) => {
  const uuid = c.req.param("uuid");
  await db.delete(posts).where(eq(posts.uuid, uuid)).returning();

  return c.text("post deleted");
});
// find one by title
app.get("/posts/search", async (c: Context) => {
  const query = c.req.query("q");

  const data = await db
    .select()
    .from(posts)
    .where(like(posts.name, `%${query}%`));

  return c.json(data);
});

Deno.serve(
  {
    port: 5000,
  },
  app.fetch
);
