// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Post from './post.jsx';
import { useState } from 'react';
import Effect from './Effect.jsx';
import Ref from './ref.jsx';
import Reducer from './Reducer.jsx';
function App() {
  const myName = 'Sarayut Dechpaeng'
  const myAge = 19
  const num1 = 10
  const num2 = 20


  const [userData, setUserData] = useState({
    user: "",
    password: "",
    address: ""
  })
  const [showUser, setShowUser] = useState(false)

  const userClick = () => {
    if (!showUser) {
      setUserData({
        user: "Sarayut",
        password: "1234",
        address: "Bangkok"
      })
      setShowUser(true)
    } else {
      setShowUser(false)
      setUserData({
        user: "",
        password: "",
        address: ""
      })
    }
  }

  return (
    <>
      <Reducer />
      {/* <Ref /> */}
      <Effect />
    <button onClick={userClick}>อย่าคลิ๊กนะ เดะรู้เรื่อง</button>
    {showUser && (
      <>
        <p>My name is : {userData.user}</p>
        <p>My Password is : {userData.password}</p>
        <p>My address is : {userData.address}</p>
      </>
    )}
      {/* <Post student = 'Ball' score = "50" />
      <Post student = 'Leak'score = "190" /> */}
       {/* <Post myId="1"> Lenovo Gaming Labtops </Post>
      <Post myId="2"> Asus Gaming Labtops </Post> */}
      {/* <h1>Hello world</h1>
      <h2 style={{color: 'green' , fontSize: '24'}}>My name is :{myName}  , I am {myAge} year old </h2>
      <strong style={{color: 'skyblue'}}>Sum of {num1} + {num2} = {num1 + num2}</strong>
      <p>Random Number : {(randomNum).toFixed(2)}</p>
      {
        randomNum < 0.5 ? <div>คุณแพ้</div> : <div> มึงชนะล่ะ </div>
      } */}
      

    </>
  )
}

export default App
