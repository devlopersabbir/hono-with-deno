import { Hono } from "hono";
import { logger } from "hono/logger";
import type { Context } from "hono";
import { db } from "./db.ts";
import { posts } from "./schema.ts";
import { eq, like } from "drizzle-orm";

const app = new Hono();
app.use(logger());

// CRUD
// create
app.post("/posts", async (c: Context) => {
  const body = await c.req.json();
  try {
    await db.insert(posts).values(body);
    return c.json({ message: "Post created!" });
  } catch (error) {
    return c.json({ message: "Fail to create a post", error });
  }
});
// get
app.get("/posts", async (c: Context) => {
  try {
    const allPost = await db.select().from(posts);
    if (!allPost.length) return c.json({ message: "No post found" });
    return c.json(allPost);
  } catch (error) {
    return c.json({ message: "Fail to get posts", error });
  }
});
// update
app.put("/posts/:uuid", async (c: Context) => {
  const uuid = c.req.param("uuid");
  const body = await c.req.json();
  try {
    const pst = await db.query.posts.findFirst({
      where: (post, { eq }) => eq(post.uuid, uuid),
    });
    if (!pst) return c.json({ message: "Post not found" });
    await db.update(posts).set(body).where(eq(posts.uuid, uuid));
    return c.json({ message: "Post updated!" });
  } catch (error) {
    return c.json({ message: "Fail to update post", error });
  }
});
// delete
app.delete("/posts/:uuid", async (c: Context) => {
  const uuid = c.req.param("uuid");
  if (!uuid) return c.json({ message: "UUID not found" });
  try {
    const pst = await db.query.posts.findFirst({
      where: (post, { eq }) => eq(post.uuid, uuid),
    });
    if (!pst) return c.json({ message: "Post not found" });
    await db.delete(posts).where(eq(posts.uuid, uuid));
    return c.json({ message: "Post deleted!" });
  } catch (error) {
    return c.json({ message: "Fail to delete post", error });
  }
});
// get single post
app.get("/posts/search", async (c: Context) => {
  const query = c.req.query("q");

  console.log("query: ", query);
  if (!query) return c.json({ message: "Query not found" });
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
