import prompt from '@jace1995/readline';
import {Sample} from './logic';

 async function main() {
        let score = 0;

        while (true) {
            const current = new Sample();
            const answ = await prompt (current.text);
            if (answ == "!exit") {
                console.log(`Содержание алкоголя ~${score / 10}00 промилле!`);
                break;
            }
            if (Number(answ) == current.result) {
                console.log('Наливай еще!');
            } else {
                score++;
                console.log(`Хватит пить!\nВерный ответ: ${current.result}`);
            }
        }
}
main();






