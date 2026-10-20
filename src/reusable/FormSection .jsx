import React, { useState } from "react";

const FormSection = ({ fields }) => {
  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map((field) => [field.id, field.value])),
  );

  const handleChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const renderField = (field) => {
    // Special condition based on id and type
    if (field.id === "customerName" && field.type === "text") {
      return (
        <input
          type="text"
          value={formData[field.id]}
          onChange={(e) => handleChange(field.id, e.target.value)}
        />
      );
    }

    // Dropdown
    if (field.type === "select") {
      return (
        <select
          value={formData[field.id]}
          onChange={(e) => handleChange(field.id, e.target.value)}
        >
          <option value="">Select Option</option>

          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    // Checkbox
    if (field.type === "checkbox") {
      return (
        <input
          type="checkbox"
          checked={formData[field.id]}
          onChange={(e) => handleChange(field.id, e.target.checked)}
        />
      );
    }

    // Generic text/email input
    if (field.type === "text" || field.type === "email") {
      return (
        <input
          type={field.type}
          value={formData[field.id]}
          onChange={(e) => handleChange(field.id, e.target.value)}
        />
      );
    }

    return null;
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.id}>
          <label>{field.name}</label>
          {renderField(field)}
        </div>
      ))}
    </div>
  );
};

export default FormSection;
