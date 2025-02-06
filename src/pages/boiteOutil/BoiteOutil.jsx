import Document from '../../components/molecules/document/Document';
import './boiteOutil.scss';

const BoiteOutil = () => {
    return (
        <div className='boiteOutil'>
            <h1>Boite à outils</h1>
            <button className="addDocument">
                    <span>Importer un document</span>
            </button>
            <div className="tableauDocuments">
                <Document />
                <Document />
                <Document />
            </div>
        </div>
    );
}

export default BoiteOutil;