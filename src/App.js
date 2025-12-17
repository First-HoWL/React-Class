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

function PageButton({ onClick, message, active }) {
  return (
    <button onClick={onClick} className={active ? "active" : ""}>
      {message}
    </button>
  );
}

function PagesSwitch({ onChange, activePage }) {
  return (
    <>
      <div class="navBar">
        <PageButton
          onClick={() => onChange(1)}
          active={activePage == 1}
          message="First"
        />
        <PageButton
          onClick={() => onChange(2)}
          active={activePage == 2}
          message="Seccond"
        />
        <PageButton
          onClick={() => onChange(3)}
          active={activePage == 3}
          message="Third"
        />
      </div>
    </>
  );
}

function PagesWindow() {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <PagesSwitch
        onChange={(num) => setActivePage(num)}
        activePage={activePage}
      />
      {activePage == 1 ? (
        <FirstPage />
      ) : activePage == 2 ? (
        <SecPage />
      ) : activePage == 3 ? (
        <ThirdPage />
      ) : (
        ""
      )}
      <p>{activePage}</p>
    </>
  );
}

function FirstPage() {
  return (
    <img src="https://shuba.life/static/content/thumbs/660x440/7/f4/b5ymju---c3x2x50px50p-up--0d6385942b23a21478b21096172ecf47.jpg" />
  );
}
function SecPage() {
  return (
    <img src="https://goodfruits.com.ua/wp-content/uploads/2024/02/tomat-krasn%D1%8Bj-scaled-1.jpg" />
  );
}
function ThirdPage() {
  return (
    <img src="https://images.prom.ua/1289180610_w$%7Bwidth%7D_h$%7Bheight%7D_vse-pro-mango.jpg" />
  );
}

export default function App() {
  const [theme, setTheme] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <main>
        <PagesWindow />
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
