import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL || "postgres://localhost:5432/sql_katas");

const learnerSql = postgres(process.env.DATABASE_URL || "postgres://localhost:5432/sql_katas", {
	username: process.env.LEARNER_DB_USER || "sql_katas_learner",
	password: process.env.LEARNER_DB_PASSWORD || "learner",
	connection: {
		statement_timeout: 5000,
	},
	max: 5,
});

export { sql, learnerSql };
