const PersonalDetails = ({ fieldsData, onFieldChange }) => {
  const { name, summary, email, phone, web1, web2, location } = fieldsData;

  const handleInputChange = (field) => (event) => {
    onFieldChange("personalDetails", field, event.target.value);
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleInputChange("name")} />
      <br />
      <label>Summary: </label>
      <input
        type="text"
        value={summary}
        onChange={handleInputChange("summary")}
      />
      <br />
      <label>Email: </label>
      <input type="email" value={email} onChange={handleInputChange("email")} />
      <br />
      <label>Phone: </label>
      <input type="text" value={phone} onChange={handleInputChange("phone")} />
      <br />
      <label>Website 1: </label>
      <input type="text" value={web1} onChange={handleInputChange("web1")} />
      <br />
      <label>Website 2: </label>
      <input type="text" value={web2} onChange={handleInputChange("web2")} />
      <br />
      <label>Location: </label>
      <input
        type="text"
        value={location}
        onChange={handleInputChange("location")}
      />
      <br />
    </div>
  );
};

export default PersonalDetails;
