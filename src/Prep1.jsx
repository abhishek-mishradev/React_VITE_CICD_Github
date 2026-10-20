import React from 'react'

const Prep1 = () => {
  const handleClick = (event) => {
    console.log(event.currentTarget.dataset.userId); // 101
    console.log(event.currentTarget.dataset.role); // admin
  };

  return (
    <button data-user-id="101" data-role="admin" onClick={handleClick}>
      Show User Details
    </button>
  );
};

export default Prep1;
