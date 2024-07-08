import { useState } from 'react'

export default function ExerciseCard(props) {

  const { exercise, i } = props;

  const [setsCompleted, setSetsCompleted ] = useState(0);

  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6)
  }

  console.log(exercise)

  return (
    <div className="flex flex-col gap-4 bg-slate-950 sm:flex-wrap rounded-md p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-4xl hidden sm:inline sm:text-4xl, md:text-5xl font-semibold text-slate-400">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Groups</h3>
        <p className="capitalize">{exercise.muscles.join(' & ')}</p>
      </div>

      <div className='flex flex-col gap-2'>
        {exercise.description.split("___").map((val) => {
          return (
            <div className='text-sm'>
              {val}
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {['reps', 'rest', 'tempo'].map((info) => {
          return (
            <div className='flex flex-col p-2 h-[60px] rounded border-[1.5px] border-solid border-slate-900 w-full' key={info}>
              <h3 className="capitalize text-slate-400 text-sm">{info === 'reps' ? `${exercise.unit}` : info}</h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          )
          })}
          <button onClick={handleSetIncrement} className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid
          border-blue-900 hover:border-blue-600 w-full h-[60px]">
            <h3 className="text-slate-400 text-sm capitalize">Sets completed</h3>
            <p className='font-medium'>{setsCompleted} / 5</p>
          </button>
      </div>
    </div>
  )
}
