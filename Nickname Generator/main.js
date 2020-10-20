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