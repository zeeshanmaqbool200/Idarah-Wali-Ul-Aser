import * as pdfjsLib from './pdfjs/pdf.mjs';

// 🔥 Ensure correct worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = '../pdfjs/pdf.worker.mjs';

let isRendering = false; // Track rendering state

document.getElementById('upload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = function () {
            const typedArray = new Uint8Array(this.result);
            pdfjsLib.getDocument(typedArray).promise.then(pdf => {
                pdf.getPage(1).then(page => {
                    if (isRendering) {
                        console.warn("Render in progress, skipping new render request.");
                        return;
                    }

                    isRendering = true; // Mark rendering as in progress

                    const canvas = document.getElementById('pdf-canvas');
                    const ctx = canvas.getContext('2d');
                    const viewport = page.getViewport({ scale: 1.5 });

                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    const renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };

                    // 🔥 Render the page and wait for it to complete
                    page.render(renderContext).promise.then(() => {
                        isRendering = false; // Reset flag after rendering
                    }).catch(error => {
                        console.error('Render Error:', error);
                        isRendering = false; // Ensure reset on error
                    });
                });
            });
        };
        fileReader.readAsArrayBuffer(file);
    }
});
