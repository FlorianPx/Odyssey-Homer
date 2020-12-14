import React, { useState } from "react";

function SignUp() {
  const [updateEmailFirld, setUpdateEmailField] = useState("");

  const handleChange = (event) => {
    setUpdateEmailField(event.target.value);
  };

  return (
    <div>
      <h1>
        {updateEmailFirld.length === 0
          ? "Entrez votre email"
          : updateEmailFirld}
      </h1>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={updateEmailFirld}
      />
    </div>
  );
}

export default SignUp;
