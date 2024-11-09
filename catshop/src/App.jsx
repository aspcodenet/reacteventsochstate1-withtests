import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { PageContext } from './components/data/PageContext'

function App() {
  //const arr = useState("Home")
  //let activePage = "Home"
  const [activePage, setActivePage] = useState("Home")


  // {activePage:"Home", onItemClicked:function() }
  // När är det nödvändigt att använda jsx taggarna? `<></>` i mitt jsx projekt verkar de inte vara nödvändiga?
  return ( 
    <>
      <PageContext.Provider value={{ activePage, setActivePage }}>
          <Header ></Header>
          <Main ></Main>
      </PageContext.Provider>
      <Footer></Footer>
    </>
  )
}

export default App
