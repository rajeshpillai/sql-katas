import type { QueryResponse, ExplainResponse, ResetResponse } from "./types";

const API_BASE = "/api";

export async function executeQuery(query: string): Promise<QueryResponse> {
	const res = await fetch(`${API_BASE}/query`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query }),
	});
	return res.json();
}

export async function explainQuery(query: string): Promise<ExplainResponse> {
	const res = await fetch(`${API_BASE}/explain`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query }),
	});
	return res.json();
}

export async function resetDataset(): Promise<ResetResponse> {
	const res = await fetch(`${API_BASE}/reset`, { method: "POST" });
	return res.json();
}

export async function healthCheck(): Promise<{ status: string; database: string }> {
	const res = await fetch(`${API_BASE}/health`);
	return res.json();
}
