import "./App.css";
import Heading from "./Heading";
import SkillsList from "./SkillsList";

function App() {
  return (
    <div className="container mx-auto max-w-screen-md px-4 md:px-0">
      <div className="mt-16 mb-8">
        <Heading name="About Me" />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="leading-relaxed md:mr-16">
          <p>Hey, I’m AJ! 👋</p>
          <p className="mt-4">
            I’m a Ruby on Rails developer from the Philippines 🇵🇭, an indie
            maker, and a lifelong learner. I’m currently looking for remote work
            or contracting opportunities.
          </p>
          <p className="mt-4">
            I created and sold{" "}
            <a href="https://btfy.io" className="text-blue-500" target="_blank">
              Btfy
            </a>
            . Right now, I’m interested in studying more about Serverless
            architecture and looking for my next business.
          </p>
          <p className="mt-4">
            Here are a few technologies I've been working with recently:
          </p>

          <div className="mt-2">
            <SkillsList />
          </div>
        </div>

        <div className="flex justify-center mt-4 items-start">
          <img src="me.jpg" className="w-64 md:w-96" />
        </div>
      </div>
    </div>
  );
}

export default App;
