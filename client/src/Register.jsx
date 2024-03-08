import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-themeNeutral h-screen flex items-center">
      <form className="w-64 mx-auto mb-12">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          required
          className="w-full block rounded-sm p-2 m-2"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          required
          className="w-full block rounded-sm p-2 m-2"
        />
        <button className="bg-themePrimary text-white block w-full rounded-sm p2 m-2">
          Register
        </button>
      </form>

      {/* 
      
      
      <button type="submit" className='bg-themeAccent text-white blog w-full rounded-sm'>Register</button>
 */}
    </div>
  );
};

export default Register;
