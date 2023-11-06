// Note: App Component...!

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Material Design Bootstrap Integration...!
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Importing required components...!
import NotFound from './components/404/404';

// Note: Unauthroized components...!
import Login from './components/login/login';
import SignUp from './components/signup/signup';

// Note: Authroized components...!
import Navbar from './components/navbar/navbar';
import HomeScreen from './components/home/home';
import MyProducts from './components/my-products/my-products';
import AddProduct from './components/add-product/add-product';

const App = () => {

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("AuthenticatedUser") != null) {
      let fetchUser = localStorage.getItem("AuthenticatedUser");
      fetchUser = JSON.parse(fetchUser);
      fetchUser && setAuthUser(fetchUser);
    }

    else {
      localStorage.setItem("AuthenticatedUser", JSON.stringify(null));
    };
  }, []);

  return (
    <>
      <Router>
        {authUser ? <Navbar /> : null}

        <Routes>
          {
            (authUser)
              ?
              (
                <>
                  <Route path='/' element={<HomeScreen />} />
                  <Route path='my-products' element={<MyProducts />} />
                  <Route path='add-product' element={<AddProduct />} />
                </>
              )
              :
              (
                <>
                  <Route path='/' element={<Login />} />
                  <Route path='signup' element={<SignUp />} />
                </>
              )
          }
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;