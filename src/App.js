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

function NewTaskForm({ callbackfunc, callbackPressed }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    priority: "",
    desc: "",
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
    if (formData.title.trim() === "") {
      newErrors.title = "Поле не може бути порожнім!";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "title повинно містити щонайменше 3 символи!";
    }
    if (formData.date.trim() === "") {
      newErrors.age = "Поле не може бути порожнім!";
    } //else if (formData.age < 0) {
    //   newErrors.age = "Вік не може бути від'ємним";
    // }
    if (formData.priority.trim() === "") {
      newErrors.priority = "Не може бути порожнім!";
    }
    if (formData.desc.trim() === "") {
      newErrors.desc = "Поле не може бути порожнім!";
    }
    return newErrors;
  }

  return (
    <div className="divForm">
      <div className="NewTaskForm">
        <div className="row">
          <span className="h3">Add New Task</span>
          <button> Go back</button>
        </div>
        <form
          className="logiform"
          onSubmit={(e) => {
            e.preventDefault();
            const newErrors = validation();
            setErrors(newErrors);
            if (Object.keys(newErrors).length === 0) {
              callbackfunc(formData);
              callbackPressed();
              alert("Помилок немає");
            }
          }}
        >
          <span>Title</span>{" "}
          {errors.title != "" && <span className="error">{errors.title}</span>}
          <div className="blockOfForm">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? "error" : ""}
            />
          </div>
          <span>Date</span>{" "}
          {errors.date && <span className="error">{errors.date}</span>}
          <div className="blockOfForm">
            <input
              type="Date"
              name="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? "error" : ""}
            />
          </div>
          <span>Priority</span>{" "}
          {errors.priority && <span className="error">{errors.priority}</span>}
          <div className="row">
            <div className="rowBlockOfForm">
              <span className="Extreme">
                Extreme{" "}
                <input
                  type="radio"
                  name="priority"
                  value="Extreme"
                  onChange={handleChange}
                  className={errors.priority ? "error" : ""}
                />
              </span>
              <span className="Moderate">
                Moderate{" "}
                <input
                  type="radio"
                  name="priority"
                  value="Moderate"
                  onChange={handleChange}
                  className={errors.priority ? "error" : ""}
                />
              </span>
              <span className="Low">
                Low{" "}
                <input
                  type="radio"
                  name="priority"
                  value="Low"
                  onChange={handleChange}
                  className={errors.priority ? "error" : ""}
                />
              </span>
            </div>
          </div>
          <span>Task Description</span>{" "}
          {errors.desc && <span className="error">{errors.desc}</span>}
          <div className="blockOfForm">
            <textarea
              name="desc"
              placeholder="Description"
              value={formData.desc}
              onChange={handleChange}
              className={errors.desc ? "error" : ""}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          {/* <p>{formData.title}</p>
          <p>{formData.date}</p>
          <p>{formData.priority}</p>
          <p>{formData.desc}</p> */}
        </form>
      </div>
    </div>
  );
}

function Task({ task }) {
  return (
    <>
      <div>
        <h3>{task.title}</h3>
        <p>{task.desc}</p>
        <div className="row">
          <span>Priority: {task.priority}</span>
          <span>Date: {task.date}</span>
        </div>
      </div>
    </>
  );
}

function ToDolist({ ToDoInfo }) {
  console.log(Object.values(ToDoInfo.tasks)[0].a.title); // test version
  return (
    <>
      <div className="row">
        <span>To-Do</span>
        <button onClick={ToDoInfo.callbackPressed}>Add-Task</button>
      </div>
      <div className="collumn">
        {/* <Task task={ToDoInfo.tasks[0]} /> */}
        {/* <Task task={ToDoInfo.tasks[1]} /> */}
      </div>
    </>
  );
}

function Main({ TaskInfo }) {
  const [pressed, setPressed] = useState(true);
  return (
    <>
      {pressed == true ? (
        <>
          <div className="row">
            <span>Welcome back, {TaskInfo.name}</span>
          </div>
          <div className="genToDolist">
            <ToDolist
              ToDoInfo={{
                callbackfunc: TaskInfo.callbackfunc,
                callbackPressed: () => setPressed(false),
                tasks: TaskInfo.tasks,
              }}
            />
          </div>
        </>
      ) : (
        <NewTaskForm
          callbackfunc={TaskInfo.callbackfunc}
          callbackPressed={() => setPressed(true)}
        />
      )}
    </>
  );
}

export default function App() {
  const [tasks, setTask] = useState();
  return (
    <>
      {/* <NewTaskForm /> */}
      <Main
        TaskInfo={{
          name: "name123",
          tasks: { tasks },
          callbackfunc: (a) => {
            setTask((prev) => ({ ...prev, a }));
          },
        }}
      />
    </>
  );
}
