function WorkHistoryContents({ history }) {
  return history.map((work) => {
    return (
      <div>
        <p className="text-lg font-bold text-gray-500">
          {work.position}
          <a
            className="text-blue-500"
            href={work.link}
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            @ {work.company}
          </a>
        </p>
        <p className="text-sm tracking-wide text-gray-500">
          {work.start_date} - {work.end_date}
        </p>
        <ul className="mt-4 tracking-wide">
          {work.highlights.map((highlight) => {
            return (
              <li className="flex items-start">
                <svg
                  className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">{highlight}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}

export default WorkHistoryContents;
