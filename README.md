1. What is hono and why we should use `hono`
2. Discuss about hono supported all package manager
3. How to create hono app using DENO runtime
4. Hello world - first app creation
5. Hono middlewares
6. Hono request `query` and `params`

<!-- database connection -->

7. Introducing drizzle orm
8. Creating a `drizzle.config.ts`

```ts
export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
```

9. Create a postgress database into the docker container & Schema creation using drizzle and postgres

```bash
bash docker.sh
```

10. Generate database using `drizzle-kit generate` and check the generated file

```bash
deno run --node-modules-dir -A npm:drizzle-kit generate --config=drizzle.config.ts
```

11. Migrate database using `drizzle-kit migrate`

```bash
  deno --env -A --node-modules-dir npm:drizzle-kit migrate --config=drizzle.config.ts
```

12. Pool drizzle database connection
13. Introducing about CRUD operation in hono web framewwork
14. Create a new post
15. Read all post from postgresql database
16. Update a single post using `params id`
17. Delete a single post using `params id`
18. Query single post by `quary params`
19. Test our entire app
20. Deploy Hono REST API
