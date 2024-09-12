import React, { useState } from 'react';
import DocumentForm from './components/DocumentForm';
import DocumentList from './components/DocumentList';

function App() {
    const [selectedDocument, setSelectedDocument] = useState(null);

    const handleDocumentUpdated = () => {
        setSelectedDocument(null);
    };

    return (
        <div className="App">
            <h1>Document Manager</h1>
            <DocumentForm
                selectedDocument={selectedDocument}
                onDocumentUpdated={handleDocumentUpdated}
            />
            <DocumentList onSelectDocument={setSelectedDocument} />
        </div>
    );
}

export default App;
// import logo from './logo.svg';

// import './App.css';
// import DocumentForm from './components/DocumentForm';
// import DocumentList from './components/DocumentList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   const [selectedDocument, setSelectedDocument] = useState(null);

//   const handleDocumentUpdated = () => {
//       setSelectedDocument(null);
//   };

//   return (
//       <div className="App">
//           <h1>Document Manager</h1>
//           <DocumentForm
//               selectedDocument={selectedDocument}
//               onDocumentUpdated={handleDocumentUpdated}
//           />
//           <DocumentList onSelectDocument={setSelectedDocument} />
//       </div>
//   );
// }


// export default App;
