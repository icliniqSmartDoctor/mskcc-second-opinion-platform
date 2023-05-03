import React from "react";
import ChangePassword from "./ChangePassword";

const SettingIndex = () => {
  const handleChangePassword = (oldPassword: string, newPassword: string) => {
    // Add your password change logic here
    console.log(`Changing password from ${oldPassword} to ${newPassword}`);
  };

  return (
    <div>
      <ChangePassword onSubmit={handleChangePassword} />
    </div>
  );
};

export default SettingIndex;
