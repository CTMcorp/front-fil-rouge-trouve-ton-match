const BoiteOutil = () => {
    return (
        <div>
            <h1>Boite à outils</h1>
            <div className="gestionDocument">
                <button className="addDocument">
                    <i className="fas fa-file-upload"></i>
                    <span>Importer un document</span>
                </button>
                <button className="exportDocument">
                    <i className="fas fa-file-download"></i>
                    <span>Exporter un document</span>
                </button>
                <button className="deleteDocument">
                    <i className="fas fa-trash-alt"></i>
                    <span>Supprimer un document</span>
                </button>
            </div>
        </div>
    );
}

export default BoiteOutil;