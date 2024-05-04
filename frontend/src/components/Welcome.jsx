import React from "react";
import { useAuth } from "../Context/Authprovider";

function Welcome() {
    const [authUser, setAuthUser] =  useAuth();
  return (
    <>
      <div className="text-lg font-semibold mx-2 items-center align-center">
        {authUser && authUser.user && <h3 style={{ whiteSpace: 'nowrap' }}><span className="text-pink-500">Welcome</span>  {authUser.user.fullname}</h3>}
      </div>
    </>
  );
}

export default Welcome;
