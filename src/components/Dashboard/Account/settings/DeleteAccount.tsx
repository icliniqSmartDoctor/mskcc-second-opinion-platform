const DeleteAccount = () => {
  return (
    <div className="p-4 w-96">
      <div className="flex justify-between pt-2 pb-3">
        <div>Delete Account</div>
      </div>
      <hr className="border border-gray-300 mb-7" />
      <form action="">
        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter password
          </label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="enter your mobile number"
            required
          />
        </div>

        <div className="flex justify-between">
          <div className="pl-24">
            <button
              type="reset"
              className="text-gray-600 border bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteAccount;
