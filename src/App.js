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
      <div className="navBar">
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

function GetImage({ url, bigtext, desc }) {
  return (
    <>
      <div className="card">
        <img
          src={url}
          onError={(e) => {
            e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq28kcrRkckC-x3mW3IMKjn2HHq8gR8_oVxA&s";
          }}
        ></img>
        <h3>{bigtext}</h3>
        <p>{desc}</p>
      </div>
    </>
  );
}

function Func() {
  const [newimg, setImg] = useState("");
  const [bigtext, setBigtext] = useState("");
  const [newdesc, setDesc] = useState("");
  const [imgslist, setImgsList] = useState();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (imgslist) {
            setImgsList([
              ...imgslist,
              <GetImage url={newimg} bigtext={bigtext} desc={newdesc} />,
            ]);
          } else {
            setImgsList([
              <GetImage url={newimg} bigtext={bigtext} desc={newdesc} />,
            ]);
          }
        }}
      >
        <input
          type="text"
          value={newimg}
          onChange={(e) => setImg(e.target.value)}
          placeholder="src"
        />
        <br />
        <input
          type="text"
          value={bigtext}
          onChange={(e) => setBigtext(e.target.value)}
          placeholder="big text"
        />
        <br />
        <input
          type="text"
          value={newdesc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="desc"
        />
        <br />
        <button type="submit">Add image</button>
      </form>

      <h3>Image: </h3>
      <div className="galery">{imgslist}</div>
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      {/* <main>
        <PagesWindow />
      </main> */}
      <Func />
    </>
  );
}
