import { createResource, createSignal, createMemo, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { fetchKata, executeQuery } from "~/lib/api-client";
import type { QueryResponse } from "~/lib/types";
import MarkdownContent from "~/components/markdown-content/markdown-content";
import SqlEditor from "~/components/query-workspace/sql-editor";
import ResultTable from "~/components/query-workspace/result-table";

export default function KataPage() {
	const params = useParams();

	const [kata] = createResource(
		() => params.kataId,
		(id) => fetchKata(id),
	);

	const [result, setResult] = createSignal<QueryResponse | null>(null);
	const [loading, setLoading] = createSignal(false);

	const handleExecute = async (query: string) => {
		setLoading(true);
		try {
			const res = await executeQuery(query);
			setResult(res);
		} catch (error) {
			setResult({ success: false, error: String(error), rows: [], columns: [] });
		} finally {
			setLoading(false);
		}
	};

	const markdownContent = createMemo(() => {
		const k = kata();
		if (!k) return "";

		const sections: string[] = [];

		if (k.description) {
			sections.push(k.description);
		}
		if (k.schemaOverview) {
			sections.push(`## Schema Overview\n\n${k.schemaOverview}`);
		}
		if (k.reasoning) {
			sections.push(`## Step-by-Step Reasoning\n\n${k.reasoning}`);
		}
		if (k.solution) {
			sections.push(
				`## Solution\n\n\`\`\`sql\n${k.solution}\n\`\`\`\n\n${k.solutionExplanation}`,
			);
		}
		if (k.alternativeSolutions) {
			sections.push(`## Alternative Solutions\n\n${k.alternativeSolutions}`);
		}

		return sections.join("\n\n---\n\n");
	});

	// Reset results when navigating to a different kata
	createMemo(() => {
		const _id = params.kataId;
		setResult(null);
		setLoading(false);
	});

	return (
		<div class="flex flex-1 overflow-hidden">
			{/* Loading */}
			<Show when={kata.loading}>
				<div class="flex-1 flex items-center justify-center">
					<span style={{ color: "var(--text-muted)" }}>Loading kata...</span>
				</div>
			</Show>

			{/* Error */}
			<Show when={kata.error}>
				<div class="flex-1 flex items-center justify-center">
					<span style={{ color: "var(--error)" }}>Failed to load kata.</span>
				</div>
			</Show>

			{/* Content */}
			<Show when={kata()} keyed>
				{(k) => (
					<>
						{/* Left panel — markdown content */}
						<div
							class="flex-1 overflow-y-auto border-r"
							style={{
								"border-color": "var(--border)",
								"min-width": "0",
							}}
						>
							<div class="max-w-3xl p-6">
								<div class="mb-2 flex items-center gap-3">
									<span
										class="text-xs px-2 py-0.5 rounded-full font-medium"
										style={{
											"background-color": "var(--accent-light)",
											color: "var(--accent)",
										}}
									>
										Phase {k.phase}
									</span>
									<span
										class="text-xs"
										style={{ color: "var(--text-muted)" }}
									>
										{k.phaseTitle}
									</span>
								</div>
								<h1
									class="text-2xl font-bold mb-6"
									style={{ color: "var(--text-primary)" }}
								>
									{k.sequence}. {k.title}
								</h1>
								<MarkdownContent source={markdownContent()} />
							</div>
						</div>

						{/* Right panel — SQL editor + results */}
						<div
							class="flex flex-col"
							style={{ width: "40%", "min-width": "400px" }}
						>
							<div
								class="flex-1 min-h-0 border-b"
								style={{ "border-color": "var(--border)" }}
							>
								<SqlEditor
									initialCode={k.starterSql || "SELECT * FROM customers LIMIT 10;"}
									onExecute={handleExecute}
								/>
							</div>
							<div class="flex-1 min-h-0">
								<ResultTable result={result()} loading={loading()} />
							</div>
						</div>
					</>
				)}
			</Show>
		</div>
	);
}
