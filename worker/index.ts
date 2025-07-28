// Auto-generated entrypoint for Cloudflare Worker

import { TemplateLibraryBackendHandler } from './api/TemplateLibraryBackend';
import { AIContentSuggestionsBackendHandler } from './api/AIContentSuggestionsBackend';
import { DownloadManagerBackendHandler } from './api/DownloadManagerBackend';

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResumeCraft AI</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-100 text-gray-900">
    <header class="bg-white shadow-lg py-4">
        <div class="container mx-auto flex items-center justify-between px-4">
            <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-dUt8HMksgcDPCVjkfHV6JORR.png?st=2025-07-28T05%3A44%3A18Z&se=2025-07-28T07%3A44%3A18Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T18%3A43%3A57Z&ske=2025-07-28T18%3A43%3A57Z&sks=b&skv=2024-08-04&sig=Mrg7kiMe40j7eHCHMHddGs8hPhIODGFt8rCznUp1S0E%3D" alt="ResumeCraft AI Logo" class="h-12">
            <h1 class="text-xl font-semibold text-blue-600">ResumeCraft AI</h1>
        </div>
    </header>
    <main class="container mx-auto mt-10 px-4">
        <section id="template-selection" class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Template Selection</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <h3 class="text-lg font-semibold text-gray-700">Professional Template</h3>
                    <button class="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600" onclick="selectTemplate('professional')">Select</button>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <h3 class="text-lg font-semibold text-gray-700">Creative Template</h3>
                    <button class="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600" onclick="selectTemplate('creative')">Select</button>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <h3 class="text-lg font-semibold text-gray-700">Modern Template</h3>
                    <button class="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600" onclick="selectTemplate('modern')">Select</button>
                </div>
            </div>
        </section>
        <section id="ai-suggestions" class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">AI Content Suggestions</h2>
            <div class="bg-white shadow-lg rounded-lg p-4">
                <p class="text-gray-700">Based on your industry and experience, here are some content suggestions:</p>
                <ul id="suggestions-list" class="list-disc pl-5 mt-2">
                    <!-- AI suggestions will be inserted here -->
                </ul>
            </div>
        </section>
        <section id="customization-options" class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Customization Options</h2>
            <div class="bg-white shadow-lg rounded-lg p-4">
                <label class="block text-gray-700">Font Style:</label>
                <select class="block w-full mt-1 bg-gray-100 border border-gray-300 rounded py-2 px-3">
                    <option>Arial</option>
                    <option>Times New Roman</option>
                    <option>Georgia</option>
                </select>
                <label class="block mt-4 text-gray-700">Color Scheme:</label>
                <div class="flex space-x-4 mt-2">
                    <button class="w-8 h-8 bg-blue-500 rounded-full"></button>
                    <button class="w-8 h-8 bg-orange-500 rounded-full"></button>
                    <button class="w-8 h-8 bg-green-500 rounded-full"></button>
                </div>
            </div>
        </section>
        <section id="download-options" class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Download Formats</h2>
            <div class="bg-white shadow-lg rounded-lg p-4">
                <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onclick="downloadResume('pdf')">Download as PDF</button>
                <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-2" onclick="downloadResume('word')">Download as Word</button>
            </div>
        </section>
    </main>
    <footer class="bg-white shadow-lg py-4 mt-10">
        <div class="container mx-auto text-center">
            <p class="text-gray-600">&copy; 2023 ResumeCraft AI. Crafting Your Future, One Resume at a Time.</p>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>`;
const STYLE_CSS = `/* Custom CSS styles */
body {
    font-family: 'Inter', sans-serif;
}
header {
    border-bottom: 1px solid #e2e8f0;
}
button {
    transition: background-color 0.2s ease-in-out;
}
button:hover {
    filter: brightness(0.9);
}
`;
const SCRIPT_JS = `async function selectTemplate(templateType) {
    try {
        const response = await fetch('/functions/api/handler.ts/selectTemplate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ template: templateType })
        });
        const data = await response.json();
        // Display data or handle further
        console.log('Template selected:', data);
    } catch (error) {
        console.error('Error selecting template:', error);
    }
}

async function downloadResume(format) {
    try {
        const response = await fetch(\`/functions/api/handler.ts/download?format=\${format}\`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = \`resume.\${format}\`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading resume:', error);
    }
}`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/TemplateLibraryBackend') return TemplateLibraryBackendHandler(request);
    if (path === '/api/AIContentSuggestionsBackend') return AIContentSuggestionsBackendHandler(request);
    if (path === '/api/DownloadManagerBackend') return DownloadManagerBackendHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
