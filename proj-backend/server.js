const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Document = require('./models/Document')

const app = express();
app.use(express.json());
app.use(cors());

//db connection
mongoose.connect('mongodb://localhost:27017/documents', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//doc creation
app.post('/documents', async (req, res) => {
    try {
        const { title, content } = req.body;
        const document = new Document({ title, content  });
        await document.save();
        res.status(201).json(document);
    } catch (error) {
        res.status(500).json({ message: 'Fail', error});
    }
})

//docs get
app.get('/documents', async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Fail', error});
    }
})

//doc update
app.put('/documents/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const document = await Document.findByIdAndUpdate(id, { title, content }, {new: true}); 
        res.json(document);
    } catch (error) {
        res.status(500).json({ message: 'Fail', error});
    }
})

//doc delete
app.delete('/documents/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Document.findByIdAndDelete(id);
        res.json({ message: 'Goners' });
    } catch (error) {
        res.status(500).json({ message: 'Fail', error});
    }
})

const PORT = 5000;
app.listen(PORT, () => console.log(`PORT ${PORT}`));