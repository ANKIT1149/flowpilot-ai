import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";

export const refreshTokens = pgTable("refreshTokens", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").references(() => users.id),
    token: text("token").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
})
