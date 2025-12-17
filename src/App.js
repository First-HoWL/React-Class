import { useState } from "react";
import "./styles.css";

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
  return <button onClick={onClick}>Switch theme</button>;
}

export default function App() {
  const [theme, setTheme] = useState("");
  return (
    <>
      <main className={theme}>
        <ThemeSwitch
          onClick={() =>
            setTheme(
              theme == ""
                ? "darkTheme"
                : theme == "darkTheme"
                ? "greenTheme"
                : theme == "greenTheme"
                ? "blueTheme"
                : ""
            )
          }
        />
        <h2>Hello World!</h2>
        <p>
          {theme == ""
            ? "White Theme"
            : theme == "darkTheme"
            ? "Dark Theme"
            : theme == "greenTheme"
            ? "Green Theme"
            : "Blue Theme"}
        </p>
      </main>

      {/* <Note
        profile={{ name: "HoWL", email: "HoWL@gmail.com", gender: "Man" }}
      /> */}
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
