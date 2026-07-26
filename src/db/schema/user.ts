import { pgTable, text, uuid, timestamp, } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    image: text("image").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
})

