import pdfIcon from '../../../assets/document/pdf-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import './document.scss';

const Document = () => {
    return (
        <div className="document">
            <img src={pdfIcon} alt="logo pdf" className='image-pdf'/>
            <p>Document.pdf</p>
            <div className='buttonsDocuments'>
                <button className='viewDocument'>
                    <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="downloadDocument">
                    <FontAwesomeIcon icon={faDownload} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    )
}

export default Document;