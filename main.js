var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Question no: 2");
var personName = "Eric";
var message = "Hello Eric would you like to learn some python today?";
console.log(message);
console.log();
console.log("Question no: 3");
var name7 = 'Isabelle Dowson';
console.log('Lowercase:', name7.toLowerCase());
console.log('Uppercase:', name7.toUpperCase());
console.log('Titlecase:', toTitleCase(name7));
function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\w/g, function (match) { return match.toUpperCase(); });
}
console.log();
console.log("Question no: 4");
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
console.log();
console.log("Question no: 5");
var famous_person = "Albert Einstein";
var quote2 = "A person who never made a mistake never tried anything new.";
var message1 = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message1);
console.log();
console.log("Question no: 6");
var name1 = "\t\n   Derake peter  \t\n";
console.log("Name with whitespace:", name1);
var strippedName = name1.trim();
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
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log();
console.log("Question no: 9");
var favoriteNumber = 20;
var message9 = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message9);
console.log();
console.log("Question no: 11");
var names = ["Isabelle", "Dianna", "Charles"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
console.log();
console.log("Question no: 12");
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var name_2 = names_2[_a];
    console.log("Hello ".concat(name_2, ", welcome!"));
}
console.log();
console.log("Question no: 13");
var transportation = ["Bike", "Electric car", "Mercedes car"];
for (var _b = 0, transportation_1 = transportation; _b < transportation_1.length; _b++) {
    var item = transportation_1[_b];
    console.log("I would like to own a ".concat(item, "."));
}
console.log();
console.log("Question no: 14");
var people = ["Dr.Elsa", "Miss Rachel", "Sir Stoward"];
for (var _c = 0, people_1 = people; _c < people_1.length; _c++) {
    var guest = people_1[_c];
    console.log(" ".concat(guest, " I'm hosting a dinner and would be delighted if you could join me as my guest. Your presence would make the evening even more special."));
}
console.log();
console.log("Question no: 15");
console.log("We're sorry for the inconvenience, but Miss Rachel won't be able to make it to dinner.");
people[0] = "Mr. Farhan";
for (var _d = 0, people_2 = people; _d < people_2.length; _d++) {
    var guest = people_2[_d];
    console.log(" ".concat(guest, ", I'm hosting a dinner and would be delighted if you could join me as my guest. Your presence would make the evening even more special."));
}
console.log();
console.log("Question no: 16");
console.log("Exciting update! We've just discovered a larger dinner table");
people.unshift("Sir Steven");
var middleIndex = Math.floor(people.length / 2);
people.splice(middleIndex, 0, "Ms. Beverly");
people.push("Dr. Rayan");
for (var _e = 0, people_3 = people; _e < people_3.length; _e++) {
    var guest = people_3[_e];
    console.log("".concat(guest, ", Please accept my invitation to join me for a dinner event. It would be a joy to have you as my guest and share a delightful meal in good company."));
}
console.log();
console.log("Question no: 17");
console.log("We have encountered unexpected changes in our dinner arrangements, and as a result, we can only accommodate two guests for the evening. We apologize for any \ninconvenience caused.");
while (people.length > 2) {
    var removedGuest = people.pop();
    console.log("We sincerely apologize, but due to unexpected changes, we won't be able to have ".concat(removedGuest, ", join us for dinner."));
}
for (var _f = 0, people_4 = people; _f < people_4.length; _f++) {
    var guest = people_4[_f];
    console.log("We wanted to reassure ".concat(guest, ", that our invitation for dinner still stands. We are excited to see you and spend a wonderful evening together!"));
}
people.pop();
people.pop();
console.log(people);
console.log();
console.log("Question no: 18");
var places = ["Paris", "Istanbul", "Busan", "Newyork", "London"];
console.log("Original Order:", places);
var sortedPlaces = places.slice().sort();
console.log("Alphabetical Order:", sortedPlaces);
console.log("Original Order:", places);
var reverseSortedPlaces = places.slice().sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", reverseSortedPlaces);
console.log("Original Order:", places);
places.reverse();
console.log("Reversed Order:", places);
places.reverse();
console.log("Original Order:", places);
places.sort();
console.log("Alphabetical Order:", places);
var reverseSortedPlaces4 = places.slice().sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", reverseSortedPlaces);
console.log();
console.log("Question no: 19");
var numberOfGuests = people.length;
console.log("You are inviting ".concat(numberOfGuests, " people to dinner."));
console.log();
console.log("Question no: 20");
var mountains = ["Hindu Kush", "K2", "Himalaya", "Broad Peak", "Manaslu", "Lhotse", "karakorum"];
console.log("List of Mountains:");
for (var _g = 0, mountains_1 = mountains; _g < mountains_1.length; _g++) {
    var mountain = mountains_1[_g];
    console.log(mountain);
}
console.log();
console.log("Question no: 21");
var movies = [
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
for (var _h = 0, movies_1 = movies; _h < movies_1.length; _h++) {
    var movie = movies_1[_h];
    console.log("Movie: ".concat(movie.movieName));
    console.log("Year: ".concat(movie.year));
    console.log("Writer: ".concat(movie.writer));
    console.log("Synopsis: ".concat(movie.synopsis));
    console.log("------------------------");
}
console.log();
console.log("Question no: 22");
var cities = ["Portland", "Houston", "Columbus", "Orlando"];
// Intentional index error
console.log(cities[5]);
// Corrected program
console.log("List of Cities:");
for (var _j = 0, cities_1 = cities; _j < cities_1.length; _j++) {
    var city = cities_1[_j];
    console.log(city);
}
console.log();
console.log("Question no: 23");
var car = 'subaru';
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
console.log("Question no: 24");
var car1 = 'subaru';
var age = 13;
var fruits = ['avacado', 'banana', 'strawberry'];
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
console.log("Question no: 25");
var alein_color9 = 'green';
if (alein_color9 === 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
var alein_color2 = 'red';
if (alein_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
console.log();
console.log("Question no: 26");
var alein_color4 = 'green';
if (alein_color4 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations You just earned 10 points.");
}
var alein_color3 = 'red';
if (alein_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
console.log();
console.log("Question no: 27");
var alien_color6 = 'green';
if (alien_color6 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color6 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color6 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
var alien_color5 = 'yellow';
if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color5 === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
var alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
console.log();
console.log("Question no: 28");
var age1 = 18;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
console.log();
console.log("Question no: 29");
var favorite_fruits = ['pear', 'lychee', 'apricot'];
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
var usernames = ['admin', 'Noah', 'Dustin', 'Ell', 'Mike'];
for (var _k = 0, usernames_1 = usernames; _k < usernames_1.length; _k++) {
    var username = usernames_1[_k];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
console.log();
console.log("Question no: 31");
var usernames6 = ['admin', 'Noah', 'Dustin', 'Ell', 'Mike', 'Max'];
if (usernames6.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _l = 0, usernames6_1 = usernames6; _l < usernames6_1.length; _l++) {
        var username = usernames6_1[_l];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Empty the usernames array
usernames6 = [];
if (usernames6.length === 0) {
    console.log("We need to find some users!");
}
console.log();
console.log("Question no: 32");
var current_users = ['John', 'Elsa', 'Moiz', 'Ayesha', 'Addy'];
var new_users = ['Elsa', 'Addy', 'Moana', 'Lorine', 'Mona'];
for (var _m = 0, new_users_1 = new_users; _m < new_users_1.length; _m++) {
    var new_username = new_users_1[_m];
    var usernameTaken = false;
    for (var _o = 0, current_users_1 = current_users; _o < current_users_1.length; _o++) {
        var current_username = current_users_1[_o];
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log("Unfortunately, the username '".concat(new_username, "' is already in use. Please select another username."));
    }
    else {
        console.log("Great news! The username '".concat(new_username, "' you entered is available. You can proceed with using it."));
    }
}
console.log();
console.log("Question no: 33");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _p = 0, numbers_1 = numbers; _p < numbers_1.length; _p++) {
    var number = numbers_1[_p];
    var ordinal = '';
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(number).concat(ordinal));
}
console.log();
console.log("Question no: 34");
var favorite_pizzas = ['Buffalo', 'Meat', 'Margherita'];
for (var _q = 0, favorite_pizzas_1 = favorite_pizzas; _q < favorite_pizzas_1.length; _q++) {
    var pizza = favorite_pizzas_1[_q];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
console.log();
console.log("Question no: 35");
var animals = ['Cat', 'Dog', 'Rabbit'];
for (var _r = 0, animals_1 = animals; _r < animals_1.length; _r++) {
    var animal = animals_1[_r];
    console.log(animal);
}
console.log();
for (var _s = 0, animals_2 = animals; _s < animals_2.length; _s++) {
    var animal = animals_2[_s];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log();
console.log("Any of these animals would make a great pet!");
console.log();
console.log("Question no: 36");
function make_shirt(size, message) {
    console.log("The T-shirt size is ".concat(size, " and it will have the message \"").concat(message, "\" printed on it."));
}
make_shirt("Medium", "Be kind");
console.log();
console.log("Question no: 37");
function make_shirt8(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The T-shirt size is ".concat(size, " and it will have the message \"").concat(message, "\" printed on it."));
}
make_shirt8(); // Large shirt with default message
make_shirt8("medium"); // Medium shirt with default message 
make_shirt("small", "Stay positive!"); // Custom size and message
console.log();
console.log("Question no: 38");
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Canberra", "Australia"); // City in specified country
describe_city("Seoul"); // City with default country
describe_city("Rome", "Australia"); // City in specified country
console.log();
console.log("Question no: 39");
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Paris", "France"));
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Toronto", "Canada"));
console.log();
console.log("Question no: 40");
function make_album(artist, title, tracks) {
    var album = {
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
function show_magicians7(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["Derren Brown", "Dai Vernon", "Harry Houdini", "David Copperfield", "David Blane"];
show_magicians(magicians);
console.log();
console.log("Question no: 42");
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magicians5 = ["Shin Lim", "Juan Taramiz", "Penn and Teller"];
make_great(magicians);
show_magicians(magicians);
console.log();
console.log("Question no: 43");
function make_great0(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        greatMagicians.push("The Great ".concat(magician));
    }
    return greatMagicians;
}
function show_magicians2(magicians) {
    for (var _i = 0, magicians_4 = magicians; _i < magicians_4.length; _i++) {
        var magician = magicians_4[_i];
        console.log(magician);
    }
}
var magicians29 = ["Mike", "Sam", "Manha"];
var originalMagicians = __spreadArray([], magicians29, true);
var greatMagicians = make_great0(__spreadArray([], magicians29, true));
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
console.log();
console.log("Question no: 44");
function makeSandwich(items) {
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
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };
    return car;
}
var car6 = createCar('Toyota', 'Corolla', 'Color: Red', 'Feature: Navigation');
console.log(car6);
var car2 = createCar('Ford', 'Mustang', 'Color: Blue', 'Feature: Leather Seats');
console.log(car2);
