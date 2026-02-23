# SQL Katas

An interactive SQL learning playground that teaches SQL as a language for reasoning about data — not just querying it.

## What is this?

SQL Katas is a structured, hands-on platform for learning SQL from foundations to advanced analytical queries. Learners progress through phased exercises (katas) with a live query editor, visual result tables, and execution plan viewer.

## Learning Path

| Phase | Topic | Focus |
|-------|-------|-------|
| 0 | Relational Thinking | Tables, keys, constraints, normalization, NULL logic |
| 1 | Basic SELECT | SELECT, FROM, WHERE, ORDER BY, LIMIT |
| 2 | Filtering & Conditions | Operators, CASE, type casting, string/date functions |
| 3 | Aggregation & GROUP BY | COUNT, SUM, AVG, GROUP BY, HAVING |
| 4 | Joins & Relationships | INNER, LEFT, RIGHT, FULL JOIN, join explosions |
| 5 | Subqueries & CTEs | Scalar, correlated, recursive CTEs |
| 6 | Advanced Filtering | EXISTS, anti-joins, set operations, deduplication |
| 7 | Window Functions | OVER, PARTITION BY, ROW_NUMBER, RANK, LAG/LEAD |
| 8 | Advanced Analytics | Running totals, moving averages, gaps & islands |
| 9 | Execution & Performance | EXPLAIN plans, indexes, performance pitfalls |
| 10 | Real-World Challenges | Interview problems, business analytics, reporting |

## Tech Stack

- **Frontend:** SolidJS + Tailwind CSS
- **Backend:** Bun + Elysia
- **Database:** PostgreSQL (V1)
- **Linting:** Biome
- **Testing:** Bun test (backend), Vitest (frontend)

## Project Structure

```
sql-katas/
├── frontend/          # SolidJS application
├── backend/           # Bun + Elysia API server
│   └── seeds/         # Idempotent database seed scripts
├── CLAUDE.md          # AI assistant instructions & full spec
├── TODO.md            # Project status tracker
└── README.md
```

## Getting Started

> Project setup instructions will be added once the initial scaffold is built.

### Prerequisites

- [Bun](https://bun.sh/) (runtime)
- [PostgreSQL](https://www.postgresql.org/) (database)

## Development

```bash
# Backend
cd backend
bun install
bun dev

# Frontend
cd frontend
bun install
bun dev

# Testing
cd backend && bun test
cd frontend && bunx vitest

# Linting
bunx biome check .
```

## Roadmap

- **V1** — PostgreSQL as the sole database backend
- **V2** — Multi-database support (MySQL, SQLite, SQL Server, Oracle)

See [TODO.md](TODO.md) for detailed task tracking.
