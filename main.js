document.getElementById('randomName').addEventListener('click', Random)

function Random() {
    let firstName = document.getElementById('first').nodeValue;
    let lastName = document.getElementById('last').nodeValue;
    let Nickname = document.getElementById('Nick').nodeValue;

    let ChooseNick = firstName + Nickname + lastName

    document.getElementById('output').innerHTML = ChooseNick;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function randomName() {
    let randNum = Math.random();

    if (randNum < 0.66) {
        console.log('Nickcrusher')
        
        document.getElementById('Nickcrusher').innerHTML;
        document.getElementById('output').innerHTML;
    
    } else if (randNum < 0.33) {
        console.log('Nickcoder')
        
        document.getElementById('Nickcoder').innerHTML;
        document.getElementById('output').innerHTML;
    
    } else {
        console.log('Nickninja')
    
        document.getElementById('Nickninja').innerHTML;
        document.getElementById('output').innerHTML;
    }
}


//////////////////////////////////////////////////////////////////////////////////////////

function randomName () {
    

}
