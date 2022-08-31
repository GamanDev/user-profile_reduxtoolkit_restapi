import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/apiCalls";
// import { update } from "../redux/UserSlice";

const input = "border-2 font-light p-1";
const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleUpdate(e) {
    e.preventDefault();
    if (name || email) {
      updateUser({ name, email }, dispatch);
      setName("");
      setEmail("");
    }
  }

  return (
    <div className="mr-auto w-full">
      <div className="border-b-2">
        <div className="m-2">
          <h2 className="text-2xl text-blue-600 ">Update Your Account</h2>
          <div className="bg-amber-100 rounded-2xl p-2 my-2 w-2/3 text-center">
            Deleting account cannot be undone <b>{userInfo.name}</b>! You should
            confirm your password to delete your account.
          </div>
          <button className="bg-pink-500 rounded-full p-2 text-xs text-yellow-50">
            Delet Account
          </button>
        </div>
      </div>
      <div className="m-4 font-semibold w-2/6">
        <h3>Profile Picture</h3>
        <div className="flex items-center">
          <img
            src="https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf"
            alt=""
            className="w-16 h-16"
          />
          <div className="text-xs text-cyan-600">Change</div>
        </div>
        <form className="flex flex-col" onSubmit={handleUpdate}>
          <label>Username</label>
          <input
            type="text"
            className={input}
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            className={input}
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input type="text" className={input} />
          <button
            className={
              !pending
                ? `p-2 text-xs bg-cyan-400 w-1/3 text-yellow-50 m-2 mx-auto`
                : ` p-2 text-xs bg-cyan-200 w-1/3 text-gray-500 m-2 mx-auto cursor-not-allowed`
            }
            disabled={pending}
          >
            Update
          </button>
          {error && (
            <span className="text-rose-600 text-center">
              Something went wrong!
            </span>
          )}
          {pending === false && (
            <span className="text-green-500 text-center">
              Account has been updated!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Main;
