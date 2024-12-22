## Drizzle ORM version problem

the current drizzle version is more then `0.38.2` this is not compatible so, we have to use the down versoin to do this just download this bellow version

```bash
deno add npm:drizzle-orm@0.36.0
```

## No need to add any `npm:` convension

## Generate, Push, Pull etc
```bash
deno -A npm:drizzle-kit generate
```

## Task 
```json
 "tasks": {
    "start": "deno run --env -A --watch src/main.ts",
    "generate": "deno run --node-modules-dir -A npm:drizzle-kit generate --config=drizzle.config.ts",
    "migrate": "deno --env -A --node-modules-dir npm:drizzle-kit migrate --config=drizzle.config.ts"
  }
```
