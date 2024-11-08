import { Viewer, Worker } from '@react-pdf-viewer/core';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// import pdf from "./Test-1 soln.pdf";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useParams } from 'react-router-dom';


const PdfViewer = () => {
    const params = useParams();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={`http://localhost:8080/catalogue/books/${params.bookId}/read`}
                    plugins={[
                        defaultLayoutPluginInstance,
                    ]}
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;



// <iframe
//     title="file"
//     style={{ width: '100%', height: '100%' }}
//     src={`http://localhost:8080/books/${bookName}`}
// />