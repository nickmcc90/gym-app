import React from 'react'

export default function Button(props) {

  const {text} = props;

  return (
    <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950
    border-blue-400 border-solid blue-shadow duration-200 mx-auto">
     <p className="font-medium">
       {text}
     </p>
   </button>
  )
}
