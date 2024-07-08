import React from 'react'

export default function Sectionwrapper(props) {

  const { children, header, title, id } = props;

  return (
    <section id={id} className='min-h-screen flex flex-col gap-[60px]'>
      <div className="bg-slate-950 py-10 flex flex-col justify-center
      items-center gap-4">
        <p className='uppercase font-medium'>{header}</p> {/* For fun, we brought in an array as a prop called title that we bring into the h2 tag. We did this actually because we wanted to style ONE of the words in the sentence,*/}
        <h2 className='font-semibold text-3xl sm:text-4xl 
        md:text-5xl lg:text-6xl'>{title[0]} <span className='uppercase text-blue-400'>{title[1]}</span> {title[2]}</h2> {/* so the way to do this was to pass the sentence in an array, then wrap the special word into a span. */}
      </div>
      {children}
    </section>

  )
}
