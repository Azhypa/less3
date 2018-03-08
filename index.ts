import prompt from "@jace1995/readline";
import {Primer} from "./logic";

 async function main() {
    let score = 0;
    while (true) {
        const Current = new Primer();
        const answ = await prompt (Current.text);
        if (answ == "!exit") {
            console.log(`Содержание алкоголя ~${score / 10}00 промилле!`);
            break;
        }
        if (Number(answ) == Current.result) {
            console.log("Наливай еще!");
        } else {
            score++;
            console.log(`Хватит пить!\nВерный ответ: ${Current.result}`);
        }
     }
}
main();






