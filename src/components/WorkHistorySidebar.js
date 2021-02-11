import React, { useState } from "react";

function WorkHistorySidebar({ history, onTabChange }) {
  const initialState = { currentActive: history[0].company };
  const [state, setState] = useState(initialState);

  const items = history.map((work) => {
    return (
      <li
        onClick={handleClick}
        key={work.company}
        className={`p-2 flex-shrink-0 bg-gray-100 cursor-pointer ${
          state.currentActive === work.company
            ? "text-blue-500 border-blue-500 border-b-2 md:border-b-0 md:border-l-2"
            : "text-gray-500 md:pl-2.5"
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

  return <ul className="flex overflow-x-auto md:flex-col">{items}</ul>;
}

export default WorkHistorySidebar;
