import { useState , useEffect} from 'react'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5173");

function App() {

  function sendMessage() {
    socket.emit()
  }

  return (
    <>
    <input placeholder='Message...'/>
    <button onClick={sendMessage}>Send Message</button>
    </>
  )
}

export default App