function SkillsList() {
  const skills = [
    "Ruby",
    "Ruby on Rails",
    "JavaScript (ES6+)",
    "ReactJS",
    "TailwindCSS",
    "Postgres"
  ];

  const skillsItems = skills.map((skill) => {
    return (
      <li className="flex items-center">
        <svg
          className="w-4 h-4 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{skill}</span>
      </li>
    );
  });

  return <ul class="grid grid-cols-2">{skillsItems}</ul>;
}

export default SkillsList;
