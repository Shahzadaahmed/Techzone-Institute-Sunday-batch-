// Note: App Component...!

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Importing required components...!
import Navigation from './routing-components/navigation/navigation';
import HomeScreen from './routing-components/home-screen/home-screen';
import AboutScreen from './routing-components/about-screen/about-screen';
import ContactScreen from './routing-components/contact-screen/contact';
import TodoList from './components/todo-list/todo-list';
import ListData from './components/list/list';
import ImageSlider from './components/image-slider/image-slider';

const App = () => {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='about' element={<AboutScreen />} />
          <Route path='contact' element={<ContactScreen />} />
          <Route path='todo-list' element={<TodoList />} />
          <Route path='list-data' element={<ListData />} />
          <Route path='image-slider' element={<ImageSlider />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;