import { sql } from "./db";

const seedPath = new URL("../seeds/001-ecommerce.sql", import.meta.url).pathname;
const seedSql = await Bun.file(seedPath).text();

try {
	await sql.unsafe(seedSql);
	console.log("Seed completed successfully.");
} catch (error) {
	console.error("Seed failed:", error);
	process.exit(1);
}

await sql.end();
