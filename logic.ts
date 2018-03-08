import { $enum } from 'ts-enum-util';
import {random, sample} from 'lodash';

enum Sign {
  ADD,
  SUBSTRACT,
  MULTIPLY,
  DEV,
}

function operation(num1: number, num2: number, key: Sign): number {
  switch (key) {
    case Sign.ADD:
      return num1 + num2; 
    case Sign.SUBSTRACT:
      return num1 - num2;           
    case Sign.MULTIPLY:
      return num1 * num2;     
    case Sign.DEV: 
      return Math.round(num1 / num2 * 10) / 10;     
    }
}
 
function generate(max: number, min: number): number {
  const res = random(min, max - 1);
  return res ? res : max;
}

interface SignsPerformance {
  [key : number]: string;
}

const signsConvert: SignsPerformance = {
  [Sign.ADD]: '+',
  [Sign.SUBSTRACT]: '-',
  [Sign.MULTIPLY]: '*',
  [Sign.DEV]: '/',
};

export class Sample {   
  readonly text: string;
  readonly result: number;

    constructor() {
      const min = -10;
      const max = 10;
      const key: Sign = <Sign> sample($enum(Sign).getValues());
      const numberFirst = generate(min, max);
      const numberSecond = generate(min, max);

      this.result = operation(numberFirst, numberSecond, key);
      this.text = `${numberFirst} ${signsConvert[key]} ${numberSecond} = `;
    }
}
