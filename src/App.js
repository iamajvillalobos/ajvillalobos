import "./App.css";
import AboutMe from "./components/AboutMe"
import Work from "./components/Work"

function App() {
  return (
    <div className="container mx-auto max-w-screen-md px-4 mb-8 md:px-0">
      <AboutMe />
      <Work />
    </div>
  );
}

export default App;
