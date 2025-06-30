import React from "react";

export const About = () => {
  let myStyle = {
    minHeight: "82vh",
  };
  return (
    <div className="about text-center" style={myStyle}>
      <div className="heading my-3">
        <h3>About Todo App</h3>
      </div>
      <div>
        <h2> Introduction</h2>
        <p>
          {" "}
          A React to-do list app helps users manage tasks efficiently while
          showcasing key React concepts.
        </p>
        <h2>Components</h2>{" "}
        <p>
          The app uses reusable components, like a task form and a task list,
          keeping the code organized.
        </p>{" "}
        <h2>State Management </h2>
        <p>
          State handles task updates instantly, ensuring a smooth and dynamic
          user experience.
        </p>{" "}
        <h2>Extra Features</h2>{" "}
        <p>
          Features like local storage and task filters make the app more
          practical and user-friendly.
        </p>{" "}
        <h2>Learning</h2>{" "}
        <p>
          It’s a great project for learning React, offering a solid base for
          building more complex apps.
        </p>
      </div>
    </div>
  );
};
