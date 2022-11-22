// THE HELLO WORLD EXERCISE (if statement)
// Create a variable called "code", that will hold a string (for example: "es" or "de" or "en")
// Based on the value of the variable "code", output in the console: "Hello World" in the language that the code is written. If it's es, write Hello World in Spanish. If it's de, write it in German... etc.
// SEASONS (if statement)
// Check if the season is Autumn, Winter, Spring or Summer. If the user types (via prompt):
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// Output the results in the console
// MUSICIANS (switch statement)
// Create a variable called "band_members_num" and store a number from 1 to 10 in it.
// Based on the number, output in the console what kind of a music group it is: If the number is 3 the output is "This band is a trio" etc...


// THE HELLO WORLD EXERCISE (if statement)
var code = prompt("en")

if (code == "mkd") {
    console.log("Здраво Свету");
} 
else if (code =="de" ) {
    console.log("Hallo Welt");
}
else if (code == "jpn") {
    console.log("こんにちは世界");
} else {
    console.error("Language not found");
};

// SEASONS (if statement)

var season = prompt ("Enter month to check witch season is")
if (season ==="September" || season == "October" || season == "November" ){
    console.log("The season is Autmun");
}
else if (season === "December" || season === "January" || season === "February" ){
    console.log("The season is Winter");
}
else if
(season === "March" || season === "April" || season === "May" ){
    console.log("The season is Spring");
}
else if (season === "June" || season === "July" || season === "August"){
    console.log("The season is Summer");
}
else {
    console.error("Try again...");
};

// MUSICIANS (switch statement)

var band_members_num = 1;

switch(band_members_num) {
    case 1 :
        console.log("This band is a uno.")
    break;
    case 2 :
        console.log("This band is a duo.")
    break;
    case 3 :
        console.log("This band is a trio.")
    break;
    case 4 :
        console.log("This band is a quartet.")
    break;
    case 5 :
        console.log("This band is a quintet.")
    break;
    case 6 :
        console.log("This band is a sextet.")
    break;
    case 7 :
        console.log("This band is a septet.")
    break;
    case 8 :
        console.log("This band is an octet.")
    break;
    case 9 :
        console.log("This band is a nonet.")
    break;
    case 10 :
        console.log("This band is a decet.")
    break;
    default: console.error("error");
};