const Boolean = ({ msg }) => {
  return (
    <div>
      <h1>Boolean Component</h1>
      <p>Message: {msg.toString()}</p>
      <h1>different way to represent boolean values : {String(msg)}</h1>
    </div>
  );
};

export default Boolean;
