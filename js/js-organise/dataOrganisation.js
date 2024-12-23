const people = [
  {
    name: "Rahul",
    age: 30,
    employment: { isEmployed: true, designation: "software engineer" },
    place: "Pune",
    hobbies: ["playing chess", "gardening"],
    "book reading": { reads: false, interests: "" },
    vehicle: { ownsVehicle: true, type: "car" },
    degrees: ["computer science"],
    pets: [
      {
        type: "Golden retriever",
        name: "Max",
        age: 4,
        fullyVaccinated: true,
        about: [],
        "favorite activities": ["loves playing fetch in the park"],
      },
    ],
  },
  {
    name: "Ananya",
    age: 30,
    employment: { isEmployed: false, designation: "" },
    place: "Bangalore",
    hobbies: ["cooking"],
    "book reading": { reads: false, interests: "" },
    vehicle: { ownsVehicle: false, type: "public transport" },
    degrees: ["computer science", "graphic design"],
    pets: [
      {
        type: "Parrot",
        name: "Kiwi",
        age: 5,
        fullyVaccinated: true,
        about: ["knows over 20 phrases", "mimics Ananya's voice"],
        "favorite activities": [],
      },
    ],
  },
  {
    name: "Ramesh",
    age: 45,
    employment: { isEmployed: true, designation: "business owner" },
    place: "Jaipur",
    hobbies: ["gardening", "reading"],
    "book reading": { reads: true, interests: "historical fiction" },
    vehicle: { ownsVehicle: false, type: "" },
    degrees: [],
    pets: [
      {
        type: "Persian cat",
        name: "Bella",
        age: 3,
        fullyVaccinated: true,
        about: [],
        "favorite activities": ["love lounging in the sun"],
      },
      {
        type: "Persian cat",
        name: "Leo",
        age: 3,
        fullyVaccinated: true,
        about: [],
        "favorite activities": ["love lounging in the sun"],
      },
    ],
  },
  {
    name: "Kavya",
    age: 28,
    employment: { isEmployed: false, designation: "professional dancer" },
    place: "Chennai",
    hobbies: ["reading", "binge-watching sci-fi shows"],
    "book reading": { reads: true, interests: "fantasy novels" },
    vehicle: { ownsVehicle: false, type: "" },
    degrees: [],
    pets: [
      {
        type: "Rescue rabbit",
        name: "Snowy",
        age: 2,
        fullyVaccinated: true,
        about: [],
        "favorite activities": [
          "enjoys hopping around her backyard",
          "nibbling on carrots",
        ],
      },
    ],
  },
];

const employedPeople = (people) => {
  return people.filter((person) => person.employment.isEmployed).length;
};
console.log("Total employed people:", employedPeople(people));

const carOwners = (people) => {
  return people.filter((person) => person.vehicle.type === "car").length;
};
console.log("Total car owners:", carOwners(people));

const getPets = (people) => {
  return people.flatMap((person) => person.pets);
};

const fullyVaccinatedPets = (pets) => {
  return pets.filter((pet) => pet.fullyVaccinated).length;
};
console.log("Total vaccinated pets:", fullyVaccinatedPets(getPets(people)));

const petNamesAndTypes = (pets) => {
  return pets.map((pet) => {
    return { name: pet.name, type: pet.type };
  });
};
console.table(petNamesAndTypes(getPets(people)));

const cities = (people) => {
  return people.map((person) => person.place);
};
console.log("cities:", cities(people));

const petsOfUnemployed = (people) => {
  const unemployed = people.filter((person) => !person.employment.isEmployed);
  return getPets(unemployed).length;
};
console.log("Pets of unemployed:", petsOfUnemployed(people));

const averageAge = (people) => {
  const ages = people.map((person) => person.age);
  return ages.reduce((sum, age) => sum + age, 0) / ages.length;
};
console.log("Average age:", averageAge(people));

const csGraduatesAndPets = (people) => {
  const csGraduates = people.filter((person) =>
    person.degrees.includes("computer science")
  );

  const csAndPets = csGraduates.filter((graduate) => graduate.pets.length > 0);

  return {
    "CS graduates count": csGraduates.length,
    "pets of CS graduates": csAndPets.length,
  };
};
console.table(csGraduatesAndPets(people));

const multiPets = (people) => {
  return people.filter((person) => person.pets.length > 1).length;
};
console.log("Individuals with more than one pet:", multiPets(people));

const petsWithFavoriteActivities = (pets) => {
  return pets
    .filter((pet) => pet["favorite activities"].length > 0)
    .map((pet) => pet.name);
};
console.log(
  "Pets with favorite activities:",
  petsWithFavoriteActivities(getPets(people))
);

const petsOfBangaloreAndChennai = (people) => {
  const peopleOfBenAndChen = people.filter((person) =>
    ["Bangalore", "Chennai"].includes(person.place)
  );

  return getPets(peopleOfBenAndChen).map((pet) => pet.name);
};
console.log("Bangalore and chennai pets:", petsOfBangaloreAndChennai(people));

const vaccinatedPetsOfCarLess = (people) => {
  const carLessPeople = people.filter(
    (person) => person.vehicle.type !== "car"
  );

  return getPets(carLessPeople).filter((pet) => pet.fullyVaccinated).length;
};
console.log(
  "Vaccinated pets of car less people:",
  vaccinatedPetsOfCarLess(people)
);

const getFrequency = (frequency, type) => {
  const olderFrequency = frequency[type] || 0;
  frequency[type] = olderFrequency + 1;
  return frequency;
};

const mostCommonPetType = (pets) => {
  const petTypes = pets.map((pet) => pet.type);
  const petFrequency = petTypes.reduce(getFrequency, {});

  const keys = Object.keys(petFrequency);
  return keys.reduce((commonType, type) =>
    petFrequency[type] > petFrequency[commonType] ? type : commonType
  );
};
console.log("Most common pet type:", mostCommonPetType(getPets(people)));

const individualsLivingInBCities = (people) => {
  return people.filter((person) => person.place[0].toUpperCase() === "B")
    .length;
};
console.log(
  "People living in cities starting with B:",
  individualsLivingInBCities(people)
);

const individualsWithoutPets = (people) => {
  return people.filter((person) => person.pets.length === 0).length;
};
console.log("Individuals without pets:", individualsWithoutPets(people));

const sharedHobbies = (people) => {
  const hobbies = people.flatMap((person) => person.hobbies);
  const frequencyOfHobbies = hobbies.reduce(getFrequency, {});
  const hobbyKeys = Object.keys(frequencyOfHobbies);
  return hobbyKeys.filter((hobby) => frequencyOfHobbies[hobby] > 1);
};
console.log("Shared hobbies:", sharedHobbies(people));

const moreThanTwoHobbies = (people) => {
  return people.filter((person) => person.hobbies.length > 2).length;
};
console.log("More than two hobbies:", moreThanTwoHobbies(people));

const hobbySharersWithRamesh = (people) => {
  const rameshHobbies = people
    .filter((person) => person.name === "Ramesh")
    .flatMap((person) => person.hobbies);

  const otherPeople = people.filter((person) => person.name !== "Ramesh");
  return otherPeople.filter((person) => {
    return person.hobbies.some((hobby) => rameshHobbies.includes(hobby));
  }).length;
};
console.log("Hobby sharers with Ramesh:", hobbySharersWithRamesh(people));

const youngestPet = (pets) => {
  return pets.reduce((youngestPet, pet) => {
    return pet.age < youngestPet.age ? pet : youngestPet;
  }).name;
};
console.log("Youngest pet:", youngestPet(getPets(people)));

const bookReadersAndInterests = (people) => {
  const bookReaders = people.filter((person) => person["book reading"].reads);

  return bookReaders.map((reader) => {
    return { interest: reader["book reading"].interests, reader: reader.name };
  });
};
console.table(bookReadersAndInterests(people));