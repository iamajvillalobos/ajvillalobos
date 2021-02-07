import React, { useState } from "react";

function WorkHistorySidebar({ history }) {
  const initialState = history.map((work) => {
    return { company: work.company, active: false };
  });

  const [state, setState] = useState(initialState);

  const items = history.map((work) => {
    return (
      <li
        onClick={handleClick}
        key={work.company}
        className="pl-4 py-2 bg-gray-100 text-gray-500"
      >
        {work.company}
      </li>
    );
  });

  function handleClick(event) {
    const currentItemState = state.find((item) => {
      return item.company === event.target.innerHTML;
    });

    const newState = state.map((item) => {
      return {
        company: item.company,
        active: item.company === event.target.innerHTML ? true : false,
      };
    });

    setState(newState);
  }

  return <ul>{items}</ul>;
}

export default WorkHistorySidebar;
