//

const fields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter first name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter phone number",
    required: false,
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    required: true,
    options: [
      { label: "Admin", value: "admin" },
      { label: "Manager", value: "manager" },
      { label: "User", value: "user" },
    ],
  },
];

const test = () => {
  return (
    <div>
      hello
      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>

          {field.type === "select" ? (
            <select name={field.name}>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default test;
