export const tmpTasks = [
  {
    id: 0,
    name: "Change Oil",
    parts: [0, 2]
  },
  {
    id: 1,
    name: "Change Oil",
    parts: [1, 2]
  },
  {
    id: 2,
    name: "Change Air filter",
    description: "Change air filter",
    parts: [15],
  },
  {
    id: 3,
    name: "Wash",
    description: "make it shine",
    parts: [16],
  },
  {
    id: 4,
    name: "clean brake calipers",
    description: "change out calipers"
  },
  {
    id: 5,
    name: "vacuum out the interor",
    description: "get the dirt out",
  }
]
export const tmpParts = [
  {
    id: 0,
    name: "Oil: Mobil 1 5-20w",
    description: "pretty good oil",
  },
  {
    id: 1,
    name: "Oil: Mobil 1 10-30w",
    description: "none",
  },
  {
    id: 2,
    name: "Oil Filter: Fram PH3600",
    description: "Oil Filter",
  },
  {
    id: 13,
    name: "K&H Oil Filter",
    description: " MC oil filter.",
  },
  {
    id: 14,
    name: "Hyundai Filter",
    description: "Hyundai Oil Filter",
  },
  {
    id: 15,
    name: "Motorcraft Air filter",
    description: "This is an air filter",
  },
  {
    id: 16,
    name: "Turtlewax clean and wax",
    description: "pretty good detergent",
  }


]
export const tmpProjects = [
  {
    id: 0,
    name: "Ford Ranger",
    class: "Vehicle",
    description: "Very cool litle truck!",
    tasks: [0, 2],
  },
  {
    id: 1,
    name: "Elantra",
    class: "Vehicle",
    description: "Very sporty fun car"
  },
  {
    id: 2,
    name: "Tiller",
    description: "Oldish tiller"
  }
]

export const tmpUsers = [
  {
    id: 0,
    name: "",
    pwd: ""
  }
]
export const getUser = () => {
  return tmpUsers[0].name;
}

export const setUser = ({id,name,pwd}) => {
  tmpUsers[0].id = id;
  tmpUsers[0].name = name;
  tmpUsers[0].pwd = pwd;
}