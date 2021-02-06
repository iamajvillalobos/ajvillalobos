function Heading(props) {
  return (
    <div className="text-2xl font-bold flex items-center text-blue-400 heading">
      <span>{props.name}</span>
      <div className="bg-blue-400 w-2/4 ml-4" style={{height: "1px"}}></div>
    </div>
  );
}

export default Heading;
