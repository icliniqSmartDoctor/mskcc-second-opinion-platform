import React, { useState } from "react";

const Settings = () => {
  return (
    <> 
      <div className="underline p-5 pl-4">
        <div className="pb-5">
          <a href="/account/settings/ChangePassword">Change Password</a>
        </div>
        <div className="pb-5">
          <a href="/account">Download data</a>
        </div>
        <div className="pb-5">
          <a href="/account/settings/DeleteAccount">Delete account</a>
        </div>
      </div>
    </>
  );
};

export default Settings;
