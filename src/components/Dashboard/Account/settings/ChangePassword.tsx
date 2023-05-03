import React, { useState } from "react";



const ChangePassword = (props: { onSubmit:  (oldPassword: string, newPassword: string) => void } ) => {
  const {onSubmit}=props
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    
    onSubmit(oldPassword, newPassword);
    setConfirmPassword("")
    setNewPassword("")
    setOldPassword("")
   
  };
  return (
    <>
      <div className="p-4 w-96">
        <div className="flex justify-between pt-2 pb-3">
          <div>Contact details</div>
          <div className="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.88354 12.6083L7.54187 15.2083C7.80854 15.475 7.70854 15.9333 7.34187 16.05L3.16687 17.4C3.16687 17.4 3.0752 17.425 3.03354 17.425C2.9252 17.425 2.81687 17.3833 2.73354 17.3C2.6252 17.1833 2.59187 17.0167 2.64187 16.8667L4.05854 12.8083C4.18354 12.4583 4.6252 12.3583 4.88354 12.6167V12.6083Z"
                fill="#233544"
              />
              <path
                d="M17.5 5.66667C17.5083 6.20833 17.3 6.725 16.9167 7.10833L9.175 14.95C8.98333 15.15 8.66667 15.15 8.46667 14.95L5.15 11.7C4.95 11.5083 4.95 11.1833 5.15 10.9833L12.8917 3.14167C13.275 2.75833 13.7833 2.54167 14.325 2.53333H14.3417C14.8833 2.53333 15.3833 2.74167 15.7667 3.125L16.9 4.23333C17.2833 4.61667 17.5 5.125 17.5 5.66667Z"
                fill="#233544"
              />
            </svg>
          </div>
        </div>
        <hr className="border border-gray-300 mb-7" />
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="CurrentPassword"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Current password
            </label>
            <input
              type="password"
              id="CurrentPassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="name@flowbite.com"
              value={oldPassword}
              onChange={(event) => setOldPassword(event.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              New password
            </label>
            <input
              type="password"
              id="NewPassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={(event) => setNewPassword(event.target.value)}
              value={newPassword}
              
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="enter your mobile number"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
              
            />
          </div>

          <div className="flex justify-between">
            <div className="pl-44">
              <button
                type="reset"
                className="text-black border bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};


export default ChangePassword;
