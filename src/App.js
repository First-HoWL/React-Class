import { useState } from "react";
import "./styles.css";

function func() {
  alert("hello World");
}

// var input1;
// var input2;
// var input3;

// function CalculatorFeature() {
//   //const [header, setheader] = useState("My first Ract App");
//   const [input1, setinput1] = useState("");
//   const [select1, setselect1] = useState("+");
//   const [input2, setinput2] = useState("");
//   const [output, setoutput] = useState("");

//   function changeOutput() {
//     let out;
//     if (select1 == "+") out = parseInt(input1) + parseInt(input2);
//     else if (select1 == "-") out = parseInt(input1) - parseInt(input2);
//     else if (select1 == "/") out = parseInt(input1) / parseInt(input2);
//     else if (select1 == "*") out = parseInt(input1) * parseInt(input2);
//     setoutput(out);
//   }

//   function setinp1(inp) {
//     setinput1(inp);
//   }
//   function setinp2(inp) {
//     setinput2(inp);
//   }

//   return (
//     <>
//       <div className="calculator">
//         <div>
//           <input
//             type="text"
//             onChange={(event) => {
//               setinput1(event.target.value);
//             }}
//             placeholder="input 1"
//           />
//           <select
//             onChange={(event) => {
//               setselect1(event.target.value);
//             }}
//           >
//             <option value="+"> + </option>
//             <option value="-"> - </option>
//             <option value="*"> * </option>
//             <option value="/"> / </option>
//           </select>
//         </div>
//         <div>
//           <input
//             type="text"
//             onChange={(event) => {
//               setinput2(event.target.value);
//             }}
//             placeholder="input 2"
//           />
//           <button onClick={changeOutput}>Start</button>
//           <span>{output}</span>
//         </div>
//       </div>
//     </>
//   );
// }

// function InputFeature() {
//   return (
//     <>
//       <div>
//         <input
//           onChange={(event) => {
//             input1 = event.target.value;
//           }}
//         />
//       </div>
//     </>
//   );
// }

function ClickerFeature({ firstButton, secButton, thirdButton }) {
  const [clicked, setclick] = useState(0);

  function addclicks(inp) {
    setclick(clicked + parseInt(inp));
  }

  return (
    <>
      <div className="counter">
        <button
          onClick={() => {
            addclicks(firstButton);
          }}
        >
          {firstButton}
        </button>
        <button
          onClick={() => {
            addclicks(secButton);
          }}
        >
          {secButton}
        </button>
        <button
          onClick={() => {
            addclicks(thirdButton);
          }}
        >
          {thirdButton}
        </button>
        <span>{clicked}</span>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* <InputFeature /> */}
      <ClickerFeature firstButton={1} secButton={-1} thirdButton={10} />
    </>
  );
}
