import Heading from "./Heading";

function Contact() {
  return (
    <div className="my-4 md:mt-16 md:mb-6">
      <Heading name="Get In Touch" />
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row">
        <p className="md:w-2/3 flex-shrink-0">
          I'm currently looking for remote work or contracting opportunities. If
          you have any questions or want to say hi, I'll try my best to get back
          to you.
        </p>
        <p className="w-full mt-4 md:mt-0 md:text-center">
          <a
            href="mailto:hello@ajvillalobos.com"
            className="flex-grow-0 inline-flex items-center px-4 py-2 border border-transparent text-base rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Say Hello
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
