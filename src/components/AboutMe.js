import Heading from "./Heading";
import SkillsList from "./SkillsList";

function AboutMe() {
  return (
    <>
      <div className="my-4 md:mt-16 md:mb-8">
        <Heading name="About Me" />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="leading-relaxed md:mr-16">
          <p>Hey, I’m AJ! 👋</p>
          <p className="mt-4">
            I’m a web developer from the Philippines 🇵🇭, an indie
            maker, and a lifelong learner. I’m currently looking for remote work
            or contracting opportunities.
          </p>
          <p className="mt-4">
            I created and sold{" "}
            <a
              href="https://btfy.io"
              rel="noreferrer"
              className="text-blue-500"
              target="_blank"
            >
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
          <img src="me.jpg" className="w-64 md:w-96" alt="me" />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
