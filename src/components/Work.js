import Heading from "./Heading";
import WorkHistory from "./WorkHistory"

function Work() {
  return (
    <>
      <div className="my-4 md:mt-16 md:mb-8">
        <Heading name="Where I've Worked" />
      </div>
      <WorkHistory />
    </>
  )
}

export default Work