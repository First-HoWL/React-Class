import { useState } from "react";
import "./styles.css";

function GetImage({ url, bigtext, desc }) {
  console.log(url);
  return (
    <>
      <div className="card">
        <img
          src={url == "" ? "  " : url}
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

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    gender: "Man",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validation() {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Поле не може бути порожнім!";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Ім'я повинно містити щонайменше 3 символи!";
    }
    if (formData.age.trim() === "") {
      newErrors.age = "Поле не може бути порожнім!";
    } else if (formData.age < 0) {
      newErrors.age = "Вік не може бути від'ємним";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Поле не може бути порожнім!";
    } else if (formData.email.startsWith("@")) {
      newErrors.email = "Емаіл не може починатися з @!";
    } else if (formData.email.endsWith("@")) {
      newErrors.email = "Емаіл не може закінчуватися на @!";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Емаіл має включати @!";
    }
    if (formData.gender.trim() === "Croissant") {
      newErrors.gender = "Ви не круасан!";
    }

    return newErrors;
  }

  return (
    <div className="divForm">
      <form
        className="logiform"
        onSubmit={(e) => {
          e.preventDefault();
          const newErrors = validation();
          setErrors(newErrors);
          if (Object.keys(newErrors).length === 0) {
            alert("Помилок немає");
          }
        }}
      >
        <h3>Sign In</h3>
        <div className="row">
          <div className="blockOfForm">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name != "" && <span className="error">{errors.name}</span>}
          </div>
          <div className="blockOfForm">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className={errors.age ? "error" : ""}
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>
        </div>
        <div className="row">
          <div className="blockOfForm">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="blockOfForm">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={errors.gender ? "error" : ""}
            >
              <option>Man</option>
              <option>Woman</option>
              <option>None</option>
              <option>Croissant</option>
            </select>

            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>
        </div>
        <button type="submit">Submit</button>

        {/* <p>{formData.name}</p>
        <p>{formData.age}</p>
        <p>{formData.email}</p>
        <p>{formData.gender}</p> */}
      </form>
    </div>
  );
}

export default function App() {
  return (
    <>
      <RegisterForm />
    </>
  );
}
