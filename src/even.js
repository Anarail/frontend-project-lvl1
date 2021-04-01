import readlineSync from 'readline-sync';

export const isEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let result = 0;
    
    for (let i = 0; i < 3; ) {
        const ques = Math.ceil(Math.random() * 100);
        console.log('Question: ' + ques);        
        const answ = readlineSync.question('Your answer: ');
        const lowerAnsw = answ.toLowerCase();

        if (ques % 2 !== 0 && lowerAnsw === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
            break;
        }
        if (ques % 2 === 0 && lowerAnsw === 'no' ) {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`);
            break;
        }
        if (lowerAnsw !== 'yes' && lowerAnsw !== 'no') {
            console.log(`${name}! Please use 'yes' or 'no'!`);
        }
        if (ques % 2 === 0 && lowerAnsw === 'yes') {
            console.log('Correct!');
            i += 1;
            result += 1;
        }
        if (ques % 2 !== 0 && lowerAnsw === 'no') {
            console.log('Correct!');
            i += 1;
            result += 1;
        }      
    }
    if (result !== 3) {
        console.log(`Let's try again, ${name}!`);
    } else { 
    console.log(`Congratulations, ${name}!`);
    }
};