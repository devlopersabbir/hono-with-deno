import {
  pgTable,
  serial,
  uuid,
  timestamp,
  varchar,
  text,
} from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().unique(),

  name: varchar("name", { length: 255 }).notNull(),
  description: text("descriptions").notNull(),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
