// // // import React from "react"

// // // function Navbar() {
// // //   return (
// // //     <div className=" flow-root ">
// // //       <div className="flex float-left  gap-8 ml-4">
// // //         <div className="">Tech Task : React</div>
// // //       </div>
// // //       {/* <div className="flex float-right gap-8 mr-4">
// // //         <div className="">HOME</div>
// // //         <div className="">ABOUT</div>
// // //         <div className="">MESSAGE</div>
// // //         <div className="">SIGNUP</div>
// // //       </div> */}
// // //     </div>
// // //   )
// // // }
// // // export default Navbar
// // import React from "react"

// // export default function Tabs() {
// //   const [body, setBody] = React.useState([<div>cutshort</div>, <div>is</div>])

// //   function update() {
// //     body.push(<div>amazing</div>)
// //     setBody([...body, <div>awesome</div>])
// //     body.push(<div>best</div>)
// //   }
// //   return (
// //     <div>
// //       {body}
// //       <button onClick={() => update()}>update</button>
// //     </div>
// //   )
// // }
// import React, { useState } from "react"

// const App = () => {
//   const [count, setCount] = useState(0)

//   const incrementByone = () => {
//     setCount(count + 1)
//   }

//   const incrementByFour = () => {
//     for (let i = 0; i < 4; i++) incrementByone()
//   }

//   return (
//     <div className="App">
//       <button onClick={incrementByone}> incrementByone </button>
//       <button onClick={incrementByFour}> incrementByFour </button>
//       <div>{count}</div>
//     </div>
//   )
// }

// export default App
import React, { useRef } from "react"

const App = () => {
  const togglerRef = useRef(null)

  const buttonClickHandler = () => {
    alert("button clicked")
  }

  togglerRef.current.click()

  return (
    <div className="App">
      <button ref={togglerRef} onClick={buttonClickHandler}>
        toggle button
      </button>
    </div>
  )
}

export default App
