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

9. Create a postgress database into the docker container

```bash
bash docker.sh
```

10. Connect postgres database using hono
11. Schema creation using drizzle and postgres
12. Generate database using `drizzle-kit generate` and check generated file

```bash
"db:generate": "drizzle-kit generate"
```

13. Migrate database using `drizzle-kit migrate`

```bash
  "db:migrate": "drizzle-kit migrate"
```

14. Introducing about CRUD operation in hono web framewwork
15. Create a new post
16. Read all post from postgresql database
17. Update a single post using `params id`
18. Delete a single post using `params id`
19. Query single post by `quary params`
20. Test our entire app
21. Deploy Hono REST API
