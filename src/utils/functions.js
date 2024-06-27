import { EXERCISES, SCHEMES, TEMPOS, WORKOUTS } from "./workouts.js"

const exercises = exercisesFlattener(EXERCISES)

export function generateWorkout(args) {
    const { poison, muscles, goals } = args;

    let exer = Object.keys(exercises);
    exer = exer.filter((key) => exercises[key].meta.environment !== "home");

    let listOfMuscles;

    if (poison === "individual") {
        listOfMuscles = muscles;
    } else {
        listOfMuscles = WORKOUTS[poison][muscles[0]];
    }

    listOfMuscles = new Set(shuffleArray(listOfMuscles));
    let arrOfMuscles = Array.from(listOfMuscles);
    let scheme = goals
    let sets = SCHEMES[scheme].ratio
        .reduce((acc, curr, index) => {
            //make this compound and exercise muscle -> array of objects and destructure in loop
            return [
                ...acc,
                ...[...Array(parseInt(curr)).keys()].map((val) =>
                    index === 0 ? "compound" : "accessory"
                ),
            ];
        }, [])
        .reduce((acc, curr, index) => {
            const muscleGroupToUse =
                index < arrOfMuscles.length
                    ? arrOfMuscles[index]
                    : arrOfMuscles[index % arrOfMuscles.length];
            return [
                ...acc,
                {
                    setType: curr,
                    muscleGroup: muscleGroupToUse,
                },
            ];
        }, []);

    const { compound: compoundExercises, accessory: accessoryExercises } =
    exer.reduce(
        (acc, curr) => {
          console.log(acc)
            let exerciseHasRequiredMuscle = false;
            for (const musc of exercises[curr].muscles) {
                if (listOfMuscles.has(musc)) {
                    exerciseHasRequiredMuscle = true;
                }
            }
            return exerciseHasRequiredMuscle
                ? {
                    ...acc,
                    [exercises[curr].type]: {
                        ...acc[exercises[curr].type],
                        [curr]: exercises[curr],
                    },
                }
                : acc;
        }, { compound: {}, accessory: {} }
    );
    
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
  }
  return array
}

function exercisesFlattener(exercisesObj) {
  const flattenedObj = {}

  for (const [key, val] of Object.entries(exercisesObj)) {
      if (!("variants" in val)) {
          flattenedObj[key] = val
      } else {
          for (const variant in val.variants) {
              let variantName = variant + "_" + key
              let variantSubstitutes = Object.keys(val.variants).map((element) => {
                  return element + ' ' + key
              }).filter(element => element.replaceAll(' ', '_') !== variantName)

              flattenedObj[variantName] = {
                  ...val,
                  description: val.description + '___' + val.variants[variant],
                  substitutes: [
                      ...val.substitutes, variantSubstitutes
                  ].slice(0, 5)
              }
          }
      }
  }
  return flattenedObj
}