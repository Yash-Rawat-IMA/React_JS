// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";
import photo from "./components/photo.jpeg"
function App() {
  let myObject = {
    name: "Yash Rawat",
    address:{
      city:"Agra",
      state:"Uttar Pradesh",
      country:"India"
    }
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500 underline ">Hello</h1>
      <Card username = "Kamlesh Rawat" post="Home Maker" />
      <Card username = "Ajay Rawat" post = "Defence Personnel" />
      <Card username = "Ayush Rawat" post="Student" />
      <Card username = "Yash Rawat" post="Defence Aspirant" icon={photo} />
      <Card myArr = {newArr} obj={myObject}/>
      {/* can not pass the array directly like ormal js: myArr = [1, 2, 3] instead use jsx and do it as shown above or even a better way of doing it is creating and using an object */}
    </>
  );
}

export default App;
