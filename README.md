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

11. Generate database using `drizzle-kit generate` and check the generated file

```bash
deno run --node-modules-dir -A npm:drizzle-kit generate --config=drizzle.config.ts
```

11. Migrate database using `drizzle-kit migrate`

```bash
  deno --env -A --node-modules-dir npm:drizzle-kit migrate --config=drizzle.config.ts
```

14. Pool drizzle database connection
15. Introducing about CRUD operation in hono web framewwork
16. Create a new post
17. Read all post from postgresql database
18. Update a single post using `params id`
19. Delete a single post using `params id`
20. Query single post by `quary params`
21. Test our entire app
22. Deploy Hono REST API
