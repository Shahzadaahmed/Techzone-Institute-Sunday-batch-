import React from 'react';
import ReactDOM from 'react-dom/client';

// Note: React Bootstrap Integration...!
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./index.css";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);