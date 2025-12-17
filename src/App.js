import { useState } from "react";
import "./styles.css";

function PersonalSite({ profile }) {
  return (
    <>
      <h3>
        {profile.firstName} {profile.secName} {profile.surName}
      </h3>
      <h4>{profile.phone}</h4>
      <h4>{profile.email}</h4>
      <h4>{profile.adress}</h4>
      <h4>{profile.workExperience}</h4>
      <h4>{profile.skills}</h4>
      <img src={profile.img}></img>
    </>
  );
}

function ThemeSwitch({ onClick }) {
  const [ispressed, setIsPressed] = useState(true);
  return (
    <div
      onClick={() => {
        setIsPressed(ispressed ? false : true);
        onClick(ispressed);
      }}
      className={ispressed ? "radButton" : "radButton on"}
    >
      <div className="circleBtn"></div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <main /*className={isPressed ? "darkTheme" : ""}*/>
        <ThemeSwitch onClick={(pressed) => setIsPressed(pressed)} />
        <h2>Hello World!</h2>
        <input type="radio" checked={isPressed}></input>
        <p>
          {/* {theme == ""
            ? "White Theme"
            : theme == "darkTheme"
            ? "Dark Theme"
            : theme == "greenTheme"
            ? "Green Theme"
            : "Blue Theme"} */}
        </p>
      </main>

      {/* <PersonalSite
        profile={{
          firstName: "Denis",
          secName: "Hello",
          surName: "World!",
          phone: "0123456789",
          email: "email@email.com",
          adress: "none",
          workExperience: "2 years",
          skills: "lots of",
          img: "https://media.istockphoto.com/id/92202969/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D0%B5-%D1%88%D0%B8%D0%BC%D0%BF%D0%B0%D0%BD%D0%B7%D0%B5-simia-troglodytes-6-years-old.jpg?s=612x612&w=0&k=20&c=ROdNqiuQmQo7KtQmWaUduxUKQzPSK1TTf3XA8B5eJZI=",
        }}
      /> */}
    </>
  );
}
