// Note: App Component...!

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store';

// Importing required components...!
import HomeScreen from './routing-components/home-screen/home-screen';
import AboutScreen from './routing-components/about-screen/about-screen';
import Crud from './routing-components/crud/crud';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Crud />} />
          <Route path='about' element={<AboutScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;