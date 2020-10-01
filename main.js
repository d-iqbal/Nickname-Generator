let indexNick = ["Crusher", "Jester", "Madman", "Hacker", "Destroyer"];


document.getElementById('randomName').addEventListener('click', Random);
document.getElementById('allNickName').addEventListener('click', Allname);

function Random() {
    console.log('Random Nickname');
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;


    let randoNick = firstName  + " " + indexNick[3] + " " + lastName;
 
    document.getElementById('output').innerHTML = randoNick;

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Functions

function Allname() {
    console.log("All Nicknames");
    
}

function randoNick(first, last) {

    if (event.code == Random) {
        for (let i = first; last < MimeTypeArray.length; i++) {
            myArray[i] += Math.random(indexNick);
        }
    } else if (event.code == Allname) {
        indexNick == 0, 1, 2, 3, 4 
    }
}