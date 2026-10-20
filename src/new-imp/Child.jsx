const Child = ({ data, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Child;
