export function validateRequest(req: Request): { error?: string, data?: any } {
  if (req.method !== 'POST') {
    return { error: 'Invalid request method. Only POST is allowed.' };
  }

  try {
    const data = await req.json();
    if (!data.industry || !data.experience) {
      return { error: 'Missing required fields: industry and experience.' };
    }
    return { data };
  } catch (err) {
    return { error: 'Invalid JSON payload.' };
  }
}