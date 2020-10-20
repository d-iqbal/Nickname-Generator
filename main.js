let indexNick = ["Crusher", "Jester", "Madman", "Hacker", "Destroyer", "Dark Lord"];


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
    
    // Get Inputs

    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    
    // Loop through nickname array to print all possible nicknames (First + _____ + Last)
    for (let i = 0; i < indexNick.length; i++) {
        console.log(firstName + " " + indexNick + " " + lastName);

        document.getElementById('output').innerHTML += firstName + " " +     indexNick           + " " + lastName; // use += to add to the HTML

    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Functions

function Nickname() {
    let selection = document.getElementById('menu').value;

    if (selection == 'randomName') {

        randomIndex = randomInt(0, Random.length);
        console.log(randomIndex);
        grades[randomIndex]= randoNick;
        




    } else if (selection == 'AllNickName') {

        for (let i = 0; i < grades.length; i++) {
            indexNick[indexNick.length - 1];
        }
 
    }
}









