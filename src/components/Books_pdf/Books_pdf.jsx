import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; 
import style from './Books_pdf.module.css';
import { useNavigate } from 'react-router-dom';


// const url = "https://cors-anywhere.herokuapp.com/https://narrative.onlinemodule.ru/wp-content/uploads/2021/11/vino-iz-oduvanchikov_2705.pdf";

const url = "https://cors-anywhere.herokuapp.com/https://tocit.ru/static/files/cb8086855d3d7fa3db79c8ce6d977c368d61f257108d0d7568bc5cd0591a4b69.pdf";

pdfjs.GlobalWorkerOptions.workerSrc =  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs`;


const Books_pdf = () => {
    const navigate = useNavigate();
    const [numPages, setNumPages] = useState(null); 
    const [pageNumber, setPageNumber] = useState(1); 

    const onDocumentLoadSuccess = ({numPages}) => { 
        setNumPages(numPages); 
        setPageNumber(1); 
    };

    function changePage(offset) { 
        setPageNumber(prevPageNumber => prevPageNumber + offset); 
    }
    function previousPage() { 
        changePage(-1); 
    } 
    function nextPage() { 
        changePage(1); 
    }

    const CartItemPage = () => navigate('/my_books/want_books');

    return (
    <div className={style.content}>
        <div> 
            <button 
                onClick={CartItemPage}
                className={style.buttonBack}
                > 
                Назад
            </button> 
        </div>
            <Document 
                file={url} 
                onLoadSuccess={onDocumentLoadSuccess} 
                className={style.doc}
            > 
                <Page 
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false} 
                /> 
            </Document>
        <div className={style.pages_num_and_nav}> 
            <div> 
                {pageNumber || (numPages ? 1 : '--')} / {numPages || '--'} 
            </div> 
            <div> 
                <button 
                    disabled={pageNumber <= 1} 
                    onClick={previousPage} 
                    className={style.button}> 
                    Предыдущая 
                </button> 
                <button 
                    disabled={pageNumber >= numPages} 
                    onClick={nextPage}
                    className={style.button}
                    > 
                    Следующая 
                </button> 
            </div> 
        </div>
    </div>
    );
};


export default Books_pdf;
