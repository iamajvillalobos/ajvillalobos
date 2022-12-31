import profilePhoto from "./assets/profile.jpeg";

function App() {
  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-6">
      <img
        src={profilePhoto}
        alt="Profile Photo"
        className="w-36 h-36 rounded-full"
      />

      <p className="max-w-md text-center">
        Hello! I'm AJ, a web developer from the Philippines. I'm still updating
        this site. Please come back later.
      </p>

      <p className="max-w-md text-center">
        For the meantime, you can know more about me on the following places:
      </p>

      <ul className="flex space-x-4">
        <li className="underline underline-offset-4">
          <a href="https://www.linkedin.com/in/aj-villalobos/">LinkedIn</a>
        </li>
        <li className="underline underline-offset-4">
          <a href="https://github.com/iamajvillalobos">Github</a>
        </li>
      </ul>
    </main>
  );
}

export default App;
