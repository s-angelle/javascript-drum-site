

// Detecting Button Press

const numberOfButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButtons; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function(){

        const buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    
    })
}


// Detecting keyboard presses

document.addEventListener("keydown", function(event){

    makeSound(event.key);

})


// Creating a function that will play a specific sound, depending on which key / button is pressed.

makeSound = (key) => {

    switch (key){

        case 'w':
            const crashSound = new Audio('sounds/crash.mp3');
            crashSound.play();
            break;

        case 'a':
           const kickBass  = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        case 's':
            const snareSound = new Audio('sounds/snare.mp3');
            snareSound.play();
            break;

        case 'd':
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'j':
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'k':
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'l':
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;  
            
        default:
            let defaultAudio = new Audio('sounds/tom-1.mp3');
            defaultAudio.play();
        }

}