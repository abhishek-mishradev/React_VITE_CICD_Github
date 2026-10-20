import React, { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div>
          <h2>Confirm</h2>
          <p>Are you sure?</p>

          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Modal;
