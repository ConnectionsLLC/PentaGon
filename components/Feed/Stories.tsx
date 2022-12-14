import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms/modalAtom copy';
import { StoryModalAtomState } from '../../atoms/StoryModalAtom';
import { SelectedStoryAtom } from '../../atoms/SelectedStoryAtom';
import {db} from '../../firebase'

function Stories() {

const [users, setUsers] = useState([])
  const [Open, setOpen] = useRecoilState(StoryModalAtomState)
  const [selectedStory, setSelectedStory] = useRecoilState(SelectedStoryAtom)

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'stories')),
        snapshot => {
          setUsers(snapshot.docs)
        }
      ),
    [db]
  );

  return (
    <div className='mr-4 ml-4 lg:mr-2 lg:ml-2 p-2 rounded-2xl  mb-6 scrollbar-hide overflow-x-scroll  bg-white' >
      <h1 className='font-bold text-lg mb-4'># Stories</h1>
      <div className="flex   ">
       
           <div className='flex space-x-6 '>
                  {users.map(user => {
                    return(
                      <div key={user.id} onClick={() => {
                        setOpen(true)
                        setSelectedStory(user.data().uid)
                      }} className="items-center cursor-pointer hover:scale-110 transition-all duration-150 ease-out">
                        <img src={user.data().profileImg} alt="" className="h-14 w-14 rounded-full p-[1.5px] border-gray-400 border-2" />
                        <p className="text- w-16 truncate text-center">{user.data().username}</p>
                      </div>
                    )
                  })}
           </div>
       </div>
    </div>
  )
}

export default Stories