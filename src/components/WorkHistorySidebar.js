import React, { useState } from "react";

function WorkHistorySidebar({ history, onTabChange }) {
  const initialState = { currentActive: history[0].company };
  const [state, setState] = useState(initialState);

  const items = history.map((work) => {
    return (
      <li
        onClick={handleClick}
        key={work.company}
        className={`py-2 px-2 bg-gray-100 cursor-pointer ${
          state.currentActive === work.company
            ? "text-blue-500 border-blue-500 border-l-2 pl-3.5"
            : "text-gray-500 pl-4"
        }`}
      >
        {work.company}
      </li>
    );
  });

  function handleClick(event) {
    onTabChange(event.target.innerHTML);
    setState({ currentActive: event.target.innerHTML });
  }

  return <ul>{items}</ul>;
}

export default WorkHistorySidebar;
