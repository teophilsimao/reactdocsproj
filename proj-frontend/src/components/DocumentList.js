import React, {useState, useEffect} from "react";
import axios from "axios";

const DocumentList = ({ onSelectDocument }) => {
    const [documents, setDocuments] = useState([]);

    const fetchDocuments = async () => {
        const response = await axios.get('http://localhost:5000/documents');
        setDocuments(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/documents/${id}`);
        fetchDocuments();
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    return (
        <div>
            <h3>Documents</h3>
            <ul>
                {documents.map((doc) => (
                    <li key={doc._id}>
                        <strong>{doc.title}</strong>
                        <p>{doc.content}</p>
                        <button onClick={() => onSelectDocument(doc)}>Edit</button>
                        <button onClick={() => handleDelete(doc._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocumentList;