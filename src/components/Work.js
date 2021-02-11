import Heading from "./Heading";
import WorkHistory from "./WorkHistory";

function Work() {
  return (
    <div className="my-4 md:mt-16 md:mb-8">
      <Heading name="Where I've Worked" />
      <div className="mt-4 md:mt-6">
        <WorkHistory />
      </div>
    </div>
  );
}

export default Work;
