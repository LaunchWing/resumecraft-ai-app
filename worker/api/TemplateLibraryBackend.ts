export async function TemplateLibraryBackendHandler(req: Request): Promise<Response> {
  try {
    const { method } = req;
    if (method !== "GET") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" } });
    }
    const templates = await fetchTemplates();
    return new Response(JSON.stringify({ templates }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}

async function fetchTemplates(): Promise<string[]> {
  // Simulate fetching template data from a data source
  return [
    "Professional",
    "Modern",
    "Creative",
    "Elegant"
  ];
}