
import React, { useState, useEffect } from 'react';
import './App.css'
import Main from './components/main'
import Header from './components/header'
import QCombineComponent from './components/centre'
import FilterComponent from './components/filter'
import QuestionComponent from './components/questions'
import Footer from './components/Footer'
function App() {

  const [arr, setArr] = useState([{
    name: "",
    price: 0,
    currency: "",
    change: 0,
    change_percent: 0,
    country: "",
    timezone: ""
  }]);
  function addData(profile) {
    let brr = [...arr, profile];
    setArr(brr);
  }

  return (
    <>
      <Header />
      <Main />
      <QCombineComponent fun={addData} data={arr} />
      {/* <FilterComponent /> */}
      <QuestionComponent />
      <Footer />
    </>
  )
}

export default App