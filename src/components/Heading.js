function Heading(props) {
  return (
    <div className="text-2xl font-bold flex items-center text-blue-400 heading">
      <span className="flex-shrink-0">{props.name}</span>
      <div className="bg-blue-400 w-full ml-4" style={{ height: "1px" }}></div>
    </div>
  );
}

export default Heading;
