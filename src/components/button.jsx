import React from 'react'

export default function Button(props) {

  const { text, func } = props;

  return (
    <button onClick={func} className="px-8 py-4 rounded-md border-[2px] bg-slate-950
    border-blue-400 border-solid blue-shadow duration-200 mx-auto">
     <p className="font-medium">
       {text}
     </p>
   </button>
  )
}
