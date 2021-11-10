const {
  factorial
} = require('../src/AlgotitmFactorial');

const {
  countdownScript
} = require('../src/AlgotitmFactorial');

describe('GetNumber' , () => {


let arr; 
    beforeEach(() => {
      arr = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];
    });
    it("test to check first array and result array (length)", () => {
      let length = arr.length;
      const changedArr = countdownScript(arr);
      expect(changedArr.length).toBe(length);
    });
});


it("test to check first number and result number", () => {
     
      const getNumber = factorial(5);
      expect(120).toBe(getNumber);
    });
