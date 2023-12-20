// import React, { useEffect, useRef, useState } from "react";
// import "./App.css"
// import sendRequest from "./Response";
// import FooterSection from "./Components/FooterSection";
// import SideBarSection from "./Components/SideBarSection";
// import ResponseMessage from "./Components/ResponseMessage";
// import Login from "./Pages/Login/Login";

// function App() {
//   const [input , setInput] = useState("");
//   const [result , setResult] = useState([
//     {
//       text: "Hello How Can i Help",
//       isBot: true
//     }
//   ]) 

//   const messageRef = useRef(null);

//   useEffect(() => {
//     messageRef.current.scrollIntoView();
//   } , [result])


//   const handleReload = () => {
//     window.location.reload();
//   }
  
//   const handleKeyPress = (event) => {
//     if(event.key === 'Enter'){
//       handleGetResponse();
//     }
//   }

//   const handlerQueryResponseOne = async(promptText) => {
//     //const promptText = "What is Programming ?"

//     setResult([
//       ...result ,
//       {text : promptText , isBot : false}
//     ]);

//     const queryResponseData = await sendRequest(promptText);
//     console.log(queryResponseData);

//     setResult((prev) => [
//       ...prev ,
//       {text : queryResponseData , isBot : true}
//     ])
//   }

//   const handleChange = (event) => {
//     setInput(event.target.value);
//     //console.log(input);
//   }

//   const handleGetResponse = async() => {
//     try {

//       setResult([
//         ...result , 
//         {text: input , isBot: false}
//       ])

//       setInput("");

//       const apiUrl =
//         "https://api.openai.com/v1/engines/text-davinci-003/completions"; // Update with the correct API endpoint
//       const apiKey = "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"; // Replace with your actual OpenAI API key

//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`
//       };

//       const data = {
//         prompt: input,
//         max_tokens: 256, // Adjust as needed
//         temperature: 0.7 // Adjust as needed
//       };

//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers,
//         body: JSON.stringify(data)
//       });

//       const responseData = await response.json();
//       console.log(responseData);
      

//       let resData = responseData.choices[0].text
//       console.log(resData)

//       setResult((prevResult) => [
//         ...prevResult,
//         { text: resData, isBot: true },
//       ]);

//       console.log(responseData.text);
      
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

 
  
//   return (
//     <div className="App">

//       <SideBarSection
//         onClick = {handleReload}
//         ResponseOne = {handlerQueryResponseOne}
//       />

//       <div className="main">

//         <div className="chats">
//           {result.map((message , index) => 
//              ( 
//               <ResponseMessage
//                 message = {message.text}
//                 index = {index}
//                 isBot = {message.isBot}
//               />

//              )
//           )}

//           <div ref = {messageRef}/>
//         </div>

//         <FooterSection
//           onClick = {handleGetResponse}
//           value = {input}
//           onChange = {handleChange}
//           onKeyDown = {handleKeyPress}
//         />

//         <Login/>
        
//       </div>
//     </div>
//   );
// }

// export default App;


// // import {createBrowserRouter , RouterProvider} from "react-router-dom"
// // import HomePage from "./Pages/Home/HomePage";
// // import Login from "./Pages/Login/Login";
// // import Signup from "./Pages/Signup/Signup";

// // const router = createBrowserRouter([
// //   {
// //     path : '/',
// //     element : <HomePage/>
// //   },
// //   {
// //     path : '/login',
// //     element: <Login/>
// //   },
// //   {
// //     path : "/signup",
// //     element: <Signup/>
// //   }
// // ])

// // function App () {
// //   return <RouterProvider router = {router} />
// // }

// // export default App;

import { createBrowserRouter , RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup"

const router = createBrowserRouter([
  {
    path : '/',
    element : <Login/>
  },
  {
    path : '/home',
    element : <HomePage/>
  },
  {
    path: '/signup',
    element : <Signup/>
  }
])

function App () {

  return <RouterProvider router = {router} />
}

export default App
