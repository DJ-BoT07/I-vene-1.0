import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
	id: serial("id").primaryKey(),
	jsonMockResp: text("jsonMockResp").notNull(),
	jobPosition: varchar("jobPosition").notNull(),
	jobDesc: varchar("jobDesc").notNull(),
	jobExperience: varchar("jobExperience").notNull(),
	createdBy: varchar("createdBy").notNull(),
	createdAt: varchar("createdAt").notNull(),
	mockId: varchar("mockId").notNull(),
});

export const answersOfUser = pgTable("answersOfUser", { // Updated table name
	id: serial("id").primaryKey(),
	mockIdRef: varchar("mockIdRef").notNull(), // Adjusted field name to match the new table name
	question: varchar("question").notNull(),
	correctAns: text("correctAns"),
	userAns: text("userAns"),
	feedback: text("feedback"),
	rating: varchar("rating"),
	userEmail: varchar("userEmail"),
	createdAt: varchar("createdAt"),
});
