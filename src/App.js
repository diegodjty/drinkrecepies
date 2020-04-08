import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import RecepiesList from './Components/RecepiesList';

import CategoryProvider from './context/Category'
import RecepiesProvider from './context/RecepiesContext'
import ModalProvider from './context/ModalContext'



function App() {
  return (
      <CategoryProvider >
        <RecepiesProvider>
          <ModalProvider>
            <Header /> 
            <div className="container mt-5">
              <div className="row">
                <Form />
              </div>
              <RecepiesList
              />
            </div>
          </ModalProvider>
        </RecepiesProvider>
      </CategoryProvider>
  );
}

export default App;