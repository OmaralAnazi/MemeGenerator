import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Meme from './components/meme'
import "./style.css"

function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render( <App /> )