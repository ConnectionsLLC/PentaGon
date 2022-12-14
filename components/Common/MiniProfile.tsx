import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function MiniProfile() {


  const [user] = useAuthState(auth);
  return (
  
      <div className="flex w-60 bg-white p-2 rounded-xl items-center justify-between  mr-4 ">
        <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full border p-[2px]" />
        <div className="flex-1 ml-2">
          <h2 className="font-bold text-xs ">{user.displayName}</h2>
          <h3 className=" text-gray-400 text-xs mr-2">Welcome to HexaGon</h3>
          <button className="text-blue-400  font-semibold text-xs" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>

   
    
  )
}

export default MiniProfile