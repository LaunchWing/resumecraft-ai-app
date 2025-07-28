async function selectTemplate(templateType) {
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
        const response = await fetch(`/functions/api/handler.ts/download?format=${format}`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `resume.${format}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading resume:', error);
    }
}