console.log("Question no: 2");
let personName: string="Eric";
let message: string="Hello Eric would you like to learn some python today?";
console.log(message);

console.log();

console.log("Question no: 3");
const name7='Isabelle Dowson';
console.log('Lowercase:', name7.toLowerCase());
console.log('Uppercase:', name7.toUpperCase());
console.log('Titlecase:', toTitleCase(name7));
function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

console.log();

console.log("Question no: 4");
let quote: string= "A person who never made a mistake never tried anything new.";
let author: string= "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

console.log();

console.log("Question no: 5");
let famous_person: string= "Albert Einstein";
let quote2: string= "A person who never made a mistake never tried anything new.";
let message1: string=`${famous_person} once said, "${quote}"`;
console.log(message1);

console.log();

console.log("Question no: 6")
let name1: string="\t\n   Derake peter  \t\n";
console.log("Name with whitespace:", name1);
let strippedName: string=name1.trim();
console.log("Stripped name:", strippedName);

console.log();

// Seriol no: 1st assignment
// Name: Munazza
// Date: 6-7-2023
console.log("Question no: 7");
// This program tells that which number we use to get 8 in answer in addition, subtraction, multiplication and division.
console.log("Addition:", 5 + 3);
console.log("subtraction:", 12 - 4);
console.log("multiplication", 1 * 8);
console.log("Division:", 16 / 2);

console.log();
// Seriol no: 1st assignment
// Name: Munazza
// Date: 6-7-2023
console.log("Question no: 8");
console.log( 5 + 3);
console.log( 5 + 3);
console.log( 5 + 3);
console.log( 5 + 3);

console.log();


console.log("Question no: 9");
let favoriteNumber: number=20;
let message9: string=`My favorite number is ${favoriteNumber}.`;
console.log(message9)

console.log();

console.log("Question no: 11");
let names: string[]=["Isabelle", "Dianna", "Charles"];
for(let name of names){
    console.log(name);
}

console.log();

console.log("Question no: 12");
for (let name of names) {
    console.log(`Hello ${name}, welcome!`);
}

console.log();

console.log("Question no: 13")
;let transportation: string[]=["Bike", "Electric car", "Mercedes car"];
for(let item of transportation) {
    console.log(`I would like to own a ${item}.`);
}

console.log();

console.log("Question no: 14")
let people: string[]=["Dr.Elsa", "Miss Rachel", "Sir Stoward"]
for(let guest of people){
    console.log(` ${guest} I'm hosting a dinner and would be delighted if you could join me as my guest. Your presence would make the evening even more special.`)
}

console.log();

console.log("Question no: 15")
console.log("We're sorry for the inconvenience, but Miss Rachel won't be able to make it to dinner.")
  people[0]="Mr. Farhan";
for(let guest of people){
    console.log(` ${guest}, I'm hosting a dinner and would be delighted if you could join me as my guest. Your presence would make the evening even more special.`)
}

console.log();

console.log("Question no: 16")
console.log("Exciting update! We've just discovered a larger dinner table");
people.unshift("Sir Steven");
const middleIndex=Math.floor(people.length / 2);
people.splice(middleIndex, 0, "Ms. Beverly");
people.push("Dr. Rayan");
for (let guest of people){
    console.log(`${guest}, Please accept my invitation to join me for a dinner event. It would be a joy to have you as my guest and share a delightful meal in good company.`)
}

console.log();

console.log("Question no: 17")
console.log("We have encountered unexpected changes in our dinner arrangements, and as a result, we can only accommodate two guests for the evening. We apologize for any \ninconvenience caused.");
while(people.length > 2){
    const removedGuest= people.pop();
    console.log(`We sincerely apologize, but due to unexpected changes, we won't be able to have ${removedGuest}, join us for dinner.`)
}
 for (let guest of people){
    console.log(`We wanted to reassure ${guest}, that our invitation for dinner still stands. We are excited to see you and spend a wonderful evening together!`)
 }
 people.pop();
 people.pop();
 console.log(people);

 console.log();

 console.log("Question no: 18");
 let places: string[]=["Paris", "Istanbul", "Busan", "Newyork", "London"];
 console.log("Original Order:", places);
 let sortedPlaces: string[]=places.slice().sort();
 console.log("Alphabetical Order:", sortedPlaces);
 console.log("Original Order:", places);
 let reverseSortedPlaces: string[]=places.slice().sort((a, b) => b.localeCompare(a));
 console.log("Reverse Alphabetical Order:", reverseSortedPlaces);
 console.log("Original Order:", places);
 places.reverse();
 console.log("Reversed Order:", places);
 places.reverse();
 console.log("Original Order:", places);
 places.sort();
 console.log("Alphabetical Order:", places);
 let reverseSortedPlaces4: string[]=places.slice().sort((a, b) => b.localeCompare(a));
 console.log("Reverse Alphabetical Order:", reverseSortedPlaces);

 console.log();

 console.log("Question no: 19");
 const numberOfGuests=people.length;
 console.log(`You are inviting ${numberOfGuests} people to dinner.`);

 console.log();

 console.log("Question no: 20");
 let mountains: string[]=["Hindu Kush", "K2", "Himalaya", "Broad Peak", "Manaslu", "Lhotse", "karakorum"];
 console.log("List of Mountains:");
 for(let mountain of mountains){
    console.log(mountain);
 }

 console.log();

  console.log("Question no: 21");
  interface Movie{
    movieName: string;
    year: number;
    writer: string;
    synopsis: string;
  }

  let movies: Movie[]=[
  {
    movieName: "The Pursuit of Happyness",
    year: 2006,
    writer: "Steve Conrad",
    synopsis: "Based on a true story, the film follows Chris Gardner, a struggling salesman, and single father, as he faces homelessness and financial hardship. Through perseverance and determination, he overcomes his obstacles and eventually becomes a successful stockbroker.",
  },
  {
    movieName: "The Shawshank Redemption",
    year: 1994,
    writer: "Frank Darabont",
    synopsis: "Set in Shawshank State Penitentiary, the movie tells the story of Andy Dufresne, a banker wrongly convicted of murder. In prison, he forms an unlikely \nfriendship with a fellow inmate, Red, and together they find hope, redemption, and the strength to endure.",
  },
  ];

  console.log("Information about Movies:");
  for (let movie of movies){
    console.log(`Movie: ${movie.movieName}`);
    console.log(`Year: ${movie.year}`);
    console.log(`Writer: ${movie.writer}`);
    console.log(`Synopsis: ${movie.synopsis}`);
    console.log("------------------------");
  }

   console.log();

  console.log("Question no: 22");
  let cities: string[]=["Portland", "Houston", "Columbus", "Orlando"];

  // Intentional index error
  console.log(cities[5]);

  // Corrected program
  console.log("List of Cities:");
  for(let city of cities){
    console.log(city);
  }

  console.log();

  console.log("Question no: 23")
  let car: string='subaru';

console.log("Is car == 'subaru'? I predict false.");
console.log(car == 'subaru');

console.log("Is car == 'Rolls-Royce'? I predict false.");
console.log(car == 'honda');

console.log("Is car != 'Lamborghini'? I predict true.");
console.log(car != 'toyota');

console.log("Is car != 'subaru'? I predict true.");
console.log(car != 'subaru');

console.log("Is car.length > 5? I predict true.");
console.log(car.length > 5);

console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');

console.log("Is car !== 'honda'? I predict true.");
console.log(car !== 'honda');

console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');

console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');


console.log();

console.log("Question no: 24")
let car1: string ='subaru';
let age: number =13;
let fruits: string[] =['avacado', 'banana', 'strawberry'];

console.log("Tests for equality and inequality with strings:");
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

console.log("Is car != 'Toyota'? I predict true.");
console.log(car != 'Tesla');

console.log("Is car == 'honda'? I predict false.");
console.log(car == 'Tesla');

console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');

console.log("Tests using the lowercase function:");
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() == 'SUBARU'? I predict false.");
console.log(car.toLowerCase() == 'SUBARU');

console.log("Numerical tests:");
console.log("Is age == 9? I predict true.");
console.log(age == 9);

console.log("Is age != 13? I predict true.");
console.log(age != 13);

console.log("Is age > 4? I predict true.");
console.log(age > 4);

console.log("Is age < 10? I predict true.");
console.log(age < 10);

console.log("Is age >= 22? I predict true.");
console.log(age >= 22);

console.log("Is age <= 8? I predict false.");
console.log(age <= 8);

console.log("Tests using 'and' and 'or' operators:");
console.log("Is car == 'subaru' and age == 6? I predict true.");
console.log(car == 'subaru' && age == 9);

console.log("Is car == 'subaru' or age == 1? I predict true.");
console.log(car == 'subaru' || age == 4);

console.log();

console.log("Question no: 25")
let alein_color9: string='green';
if (alein_color9 === 'green'){
    console.log("Congratulations! You just earned 5 points!");
}
let alein_color2: string='red';
if (alein_color2 === 'green'){
    console.log("Congratulations! You just earned 5 points!");
}

console.log();


console.log("Question no: 26")
let alein_color4: string='green';
if (alein_color4 === 'green'){
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else{
    console.log("Congratulations You just earned 10 points.")
}
let alein_color3: string='red';
if (alein_color3 === 'green'){
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else{
    console.log("Congratulations! You just earned 10 points.")
}

console.log();


console.log("Question no: 27")
let alien_color6: string='green';
if (alien_color6 === 'green') {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color6 === 'yellow') {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color6 === 'red') {
  console.log("Congratulations! You just earned 15 points.");
}
 
let alien_color5: string='yellow';
  if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
  } else if (alien_color5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
  } else if (alien_color5 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
  }
  
  let alien_color: string='red';
  if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
  } else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
  } else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
  }
  
  console.log();

  console.log("Question no: 28")
  let age1: number=18;
  if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

console.log();

console.log("Question no: 29")
let favorite_fruits: string[]=['pear', 'lychee', 'apricot'];
if (favorite_fruits[0] === 'pear') {
  console.log("You really like pears!");
}
if (favorite_fruits[1] === 'lychee') {
  console.log("You really like lychees!");
}
if (favorite_fruits[2] === 'apricot') {
  console.log("You really like apricots!");
}
if (favorite_fruits.indexOf('banana') !== -1) {
  console.log("You really like bananas!");
}
if (favorite_fruits.indexOf('cherry') !== -1) {
  console.log("You really like cherries!");
}

console.log();

console.log("Question no: 30");
let usernames: string[]=['admin', 'Noah', 'Dustin', 'Ell', 'Mike'];
for (let username of usernames){
  if (username === 'admin'){
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

console.log();

console.log("Question no: 31")
let usernames6: string[]=['admin', 'Noah', 'Dustin', 'Ell', 'Mike', 'Max'];
if (usernames6.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames6) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
// Empty the usernames array
usernames6=[];
if (usernames6.length === 0) {
  console.log("We need to find some users!");
}

console.log();

console.log("Question no: 32")
let current_users: string[]=['John', 'Elsa', 'Moiz', 'Ayesha', 'Addy'];
let new_users: string[]=['Elsa', 'Addy', 'Moana', 'Lorine', 'Mona'];
for (let new_username of new_users){
  let usernameTaken = false;
   for (let current_username of current_users){
    if (new_username.toLowerCase() === current_username.toLowerCase()){
      usernameTaken = true;
      break;
    }
  }
  if (usernameTaken){
    console.log(`Unfortunately, the username '${new_username}' is already in use. Please select another username.`);
  } else {
    console.log(`Great news! The username '${new_username}' you entered is available. You can proceed with using it.`);
  }
}

console.log();

console.log("Question no: 33")
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
  let ordinal = '';
  if (number === 1) {
    ordinal = 'st';
  } else if (number === 2) {
    ordinal = 'nd';
  } else if (number === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }
  console.log(`${number}${ordinal}`);
}

console.log();

console.log("Question no: 34");
let favorite_pizzas: string[]=['Buffalo','Meat','Margherita'];
for (let pizza of favorite_pizzas){
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

console.log();

console.log("Question no: 35");
let animals: string[] = ['Cat','Dog','Rabbit'];
for (let animal of animals) {
  console.log(animal);
}
console.log();
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}
console.log();
console.log("Any of these animals would make a great pet!");

console.log();

console.log("Question no: 36");
function make_shirt(size: string, message: string) {
    console.log(`The T-shirt size is ${size} and it will have the message "${message}" printed on it.`);
  }
  
  make_shirt("Medium", "Be kind")
  
console.log();

console.log("Question no: 37");
function make_shirt8(size: string = "large", message: string = "I love TypeScript") {
    console.log(`The T-shirt size is ${size} and it will have the message "${message}" printed on it.`);
  } 
  make_shirt8(); // Large shirt with default message
  make_shirt8("medium"); // Medium shirt with default message 
  make_shirt("small", "Stay positive!"); // Custom size and message

  console.log();

  console.log("Question no: 38");
  function describe_city(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
  }
  describe_city("Canberra", "Australia"); // City in specified country
  describe_city("Seoul"); // City with default country
  describe_city("Rome", "Australia"); // City in specified country

  console.log();
  
  console.log("Question no: 39");
  function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  console.log(city_country("Paris", "France"));
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Toronto", "Canada"));
  
  console.log();

  console.log("Question no: 40");
  function make_album(artist: string, title: string, tracks?: number): any {
    const album = {
      artist: artist,
      title: title
    };
    if (tracks !== undefined) {
      album["tracks"] = tracks;
    }
    return album;
  }
  console.log(make_album("Artist X", "Album X", 10));
   console.log();

   console.log("Question no: 41");
   function show_magicians7(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  const magicians: string[] = ["Derren Brown", "Dai Vernon", "Harry Houdini", "David Copperfield", "David Blane"];
  show_magicians(magicians);

   console.log();

   console.log("Question no: 42");
   function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  } 
  function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  } 
  const magicians5: string[] = ["Shin Lim", "Juan Taramiz", "Penn and Teller"];
  make_great(magicians);
  show_magicians(magicians);
  
console.log();

console.log("Question no: 43");
function make_great0(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) {
      greatMagicians.push(`The Great ${magician}`);
    }
  
    return greatMagicians;
  }
  
  function show_magicians2(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians29: string[] = ["Mike", "Sam", "Manha"];
  const originalMagicians: string[] = [...magicians29];
  const greatMagicians: string[] = make_great0([...magicians29]);
  
  console.log("Original Magicians:");
  show_magicians(originalMagicians);
  
  console.log("Great Magicians:");
  show_magicians(greatMagicians);

  console.log();

console.log("Question no: 44");
function makeSandwich(items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Items: " + items.join(", "));
    console.log("---------------------------");
  }
  
  // Call the function with different numbers of arguments
  makeSandwich(["Bread", "Spread", "Butter"]);
  makeSandwich(["Bread", "Fried chicken", "Lettuce", "Tomato", "Onion"]);
  makeSandwich(["Bread", "Fried Egg", "Ketchup"]);

  console.log();

  console.log("Question no: 45");
  function createCar(manufacturer: string, model: string, ...options: string[]): object {
    const car = {
      manufacturer: manufacturer,
      model: model,
      options: options
    };
  return car;
  }
  const car6 = createCar('Toyota', 'Corolla', 'Color: Red', 'Feature: Navigation');
  console.log(car6);
  const car2 = createCar('Ford', 'Mustang', 'Color: Blue', 'Feature: Leather Seats');
  console.log(car2);
  
  
  
  
  

  

  
  

  

  











      
  


  

  