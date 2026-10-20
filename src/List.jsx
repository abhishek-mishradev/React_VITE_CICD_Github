//

const List = () => {
  const names = ["John", "Jane", "Alice", "Bob"];
  return (
    <div>
      <h1>List Component</h1>

      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default List;
