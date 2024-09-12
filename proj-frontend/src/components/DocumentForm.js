import React, { useState, useEffect } from "react";
import axios from "axios";

const DocumentForm = ({selectDocument, onDocumentUpdate}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (selectDocument) {
            setTitle(selectDocument.title);
            setContent(setContent.content);
        }
    }, [selectDocument]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectDocument) {
            await axios.patch(`http://localhost:5000/documents/${selectDocument._id}`, { title, content });
            onDocumentUpdate();
        } else {
            await axios.post('http://localhost:5000/documents', { title, content });
            setTitle('');
            setContent('');
            onDocumentUpdate();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tiltle</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">{selectDocument ? 'Update' : 'Create'} Document</button>
        </form>
    );
};

export default DocumentForm;