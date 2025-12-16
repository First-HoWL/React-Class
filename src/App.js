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

function Note({ profile }) {
  // let isEdit = true;
  const [isEditName, setisEditName] = useState(false);
  const [isEditEmail, setisEditEmail] = useState(false);
  const [profile1, setprofile] = useState(profile);
  const [isEditselect1, setisEditselect1] = useState(false);

  return (
    <>
      <h3>Notes</h3>
      {isEditName ? (
        <form
          onSubmit={() => {
            setisEditName(false);
          }}
        >
          <textarea
            onChange={(e) => {
              setprofile({
                name: e.target.value,
                email: profile1.email,
                gender: profile1.gender,
              });
            }}
            required
            value={profile1.name}
          ></textarea>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <p>{profile1.name}</p>
          <button
            onClick={() => {
              setisEditName(true);
            }}
          >
            Edit
          </button>
        </>
      )}
      {isEditEmail ? (
        <form
          onSubmit={() => {
            setisEditEmail(false);
          }}
        >
          <textarea
            onChange={(e) => {
              setprofile({
                name: profile1.name,
                email: e.target.value,
                gender: profile1.gender,
              });
            }}
            required
            value={profile1.email}
          ></textarea>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <p>{profile1.email}</p>
          <button
            onClick={() => {
              setisEditEmail(true);
            }}
          >
            Edit
          </button>
        </>
      )}

      {isEditselect1 ? (
        <form
          onSubmit={() => {
            setisEditselect1(false);
          }}
        >
          <select
            onChange={(event) => {
              setprofile({
                name: profile1.name,
                email: profile1.email,
                gender: event.target.value,
              });
            }}
            value={profile1.gender}
          >
            <option value="Man"> Man </option>
            <option value="Woman"> Woman </option>
            <option value="None"> None </option>
            <option value="Croissant"> Croissant </option>
          </select>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <p>{profile1.gender}</p>
          <button
            onClick={() => {
              setisEditselect1(true);
            }}
          >
            Edit
          </button>
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      <Note
        profile={{ name: "HoWL", email: "HoWL@gmail.com", gender: "Man" }}
      />
    </>
  );
}
