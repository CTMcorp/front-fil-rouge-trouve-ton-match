import { useRef, useState } from "react";

function Document() {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setFiles([...files, ...Array.from(e.target.files)]);
    };

    const handleAddClick = () => {
        fileInputRef.current.click();
    };

    const handleDelete = (idx) => {
        setFiles(files.filter((_, i) => i !== idx));
    };

    const handleOpen = (file) => {
        const url = URL.createObjectURL(file);
        window.open(url, "_blank");
    };

    return (
        <div>
            <h2>Mes documents</h2>
            <button onClick={handleAddClick}>Ajouter un document</button>
            <input
                type="file"
                multiple
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <ul>
                {files.map((file, idx) => (
                    <li key={idx}>
                        {file.name}
                        <button
                            onClick={() => handleOpen(file)}
                            style={{ marginLeft: "10px" }}
                        >
                            Ouvrir
                        </button>
                        <button
                            onClick={() => handleDelete(idx)}
                            style={{ marginLeft: "10px" }}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Document;
