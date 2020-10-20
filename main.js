let indexNick = ["Crusher", "Jester", "Madman", "Hacker", "Destroyer", "Dark Lord", "Lack"];


document.getElementById('randomName').addEventListener('click', Random);
document.getElementById('allNickName').addEventListener('click', Allname);

function Random() {
    console.log('Random Nickname');
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;

    let randomIndex = Math.randomInt(0, indexNick.length);
    let randoNick = firstName  + " " + indexNick[randomIndex] + " " + lastName;
 
    document.getElementById('output').innerHTML = randoNick;

}

function Allname() {
    console.log("All Nicknames");

    // Clear output element
    document.getElementById("output").innerHTML = "";

    // Get Inputs
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;

    // Loop through nickname array to print all possible nicknames (First + _____ + Last)
    for (let i = 0; i < indexNick.length; i++) {
        document.getElementById('output').innerHTML += firstName + " " + indexNick[i] + " " + lastName + "<br>"; // use += to add to the HTML
    }
}







