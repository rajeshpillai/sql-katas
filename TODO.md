# SQL Katas — Project Status

## Infrastructure

- [ ] Initialize backend project (Bun + Elysia)
- [ ] Initialize frontend project (SolidJS + Tailwind CSS)
- [ ] Set up Biome for linting/formatting
- [ ] Set up PostgreSQL database and connection
- [ ] Create read-only database role for learner queries
- [ ] Implement query execution sandbox (timeouts, row limits, SELECT-only)
- [ ] Set up seed script runner (`backend/seeds/`)

## Sample Datasets

- [ ] Design unified e-commerce schema (customers, orders, products, categories, employees, regions)
- [ ] Write seed data with intentional NULLs, duplicates, and edge cases
- [ ] Add time-series data for window function exercises
- [ ] Implement dataset reset endpoint

## Backend API

- [ ] POST `/api/query` — execute learner SQL (read-only, sandboxed)
- [ ] GET `/api/explain` — return query execution plan
- [ ] POST `/api/reset` — reset dataset to seed state
- [ ] Error responses with educational messages

## Frontend — Core UI

- [ ] Landing page with Katas and Applications (Coming Soon) cards
- [ ] Kata browser / sidebar navigation (Phases 0–10)
- [ ] SQL query editor component
- [ ] Result table component (with row limit display)
- [ ] Execution plan viewer component
- [ ] Error display with educational context
- [ ] Dataset reset button

## Kata Content — Phase 0: Relational Thinking

- [ ] 0A — Tables & Structure (data types, schemas)
- [ ] 0B — Keys & Constraints (PK, FK, UNIQUE, NOT NULL, CHECK)
- [ ] 0C — Relationships (1:1, 1:N, M:N, junction tables, ER diagrams)
- [ ] 0D — Normalization & Denormalization (1NF, 2NF, 3NF, tradeoffs)
- [ ] 0E — NULL & Three-Valued Logic

## Kata Content — Phase 1: Basic SELECT

- [ ] SELECT, FROM, WHERE
- [ ] DISTINCT
- [ ] ORDER BY
- [ ] LIMIT / OFFSET

## Kata Content — Phase 2: Filtering & Conditions

- [ ] Comparison operators, AND/OR/NOT
- [ ] IN, BETWEEN, LIKE
- [ ] NULL handling (IS NULL, COALESCE, NULLIF)
- [ ] CASE expressions
- [ ] Type casting
- [ ] String functions
- [ ] Date/time functions

## Kata Content — Phase 3: Aggregation & GROUP BY

- [ ] COUNT, SUM, AVG, MIN, MAX
- [ ] GROUP BY
- [ ] HAVING
- [ ] Grouping vs filtering logic

## Kata Content — Phase 4: Joins & Relationships

- [ ] INNER JOIN
- [ ] LEFT JOIN
- [ ] RIGHT JOIN
- [ ] FULL JOIN
- [ ] Join conditions vs filters
- [ ] Join explosion and duplication

## Kata Content — Phase 5: Subqueries & CTEs

- [ ] Scalar subqueries
- [ ] Correlated subqueries
- [ ] WITH (CTEs)
- [ ] Recursive CTEs (hierarchical data)
- [ ] Subqueries vs CTEs vs derived tables

## Kata Content — Phase 6: Advanced Filtering

- [ ] EXISTS vs IN
- [ ] Anti-joins
- [ ] UNION, INTERSECT, EXCEPT
- [ ] Deduplication strategies

## Kata Content — Phase 7: Window Functions

- [ ] OVER() clause
- [ ] PARTITION BY
- [ ] ROW_NUMBER, RANK, DENSE_RANK
- [ ] LAG, LEAD
- [ ] Window frames

## Kata Content — Phase 8: Advanced Analytics

- [ ] Running totals
- [ ] Moving averages
- [ ] Sessionization
- [ ] Top-N per group
- [ ] Gaps and islands

## Kata Content — Phase 9: Execution & Performance

- [ ] Logical vs physical execution order
- [ ] Reading EXPLAIN / EXPLAIN ANALYZE
- [ ] Indexes (B-tree, composite, covering, selectivity)
- [ ] Common performance pitfalls

## Kata Content — Phase 10: Real-World Challenges

- [ ] Classic SQL interview problems
- [ ] Business analytics queries
- [ ] Reporting queries
- [ ] Data cleanup and transformation

## Testing

- [ ] Backend: query sandbox safety tests (timeout, DDL blocking, row limits)
- [ ] Backend: API endpoint tests
- [ ] Backend: seed data setup/teardown tests
- [ ] Frontend: query editor component tests
- [ ] Frontend: result rendering tests
- [ ] Frontend: error display tests

## Future (V2)

- [ ] Multi-database support architecture
- [ ] MySQL adapter
- [ ] SQLite adapter
- [ ] SQL dialect comparison highlights
- [ ] Applications section content
