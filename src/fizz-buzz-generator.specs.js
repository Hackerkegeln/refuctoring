import chai from 'chai';
import {generateFizzBuzz} from './fizz-buzz-generator';

chai.should();

describe('Fizz-Buzz Generator', () => {
    describe('normal numbers are replicated', () => {
        [1, 2, 4].forEach(number => {
            it(`should replicate ${number}.`, () =>
                generateFizzBuzz(number).should.be.equal(number.toString())
            );
        });
    });

    describe('numbers divisible by 3 should be replaced by Fizz', () => {
        [3, 6, 9].forEach(number => {
            it(`number ${number} is converted to Fizz`, () => {
                generateFizzBuzz(number).should.be.equal('Fizz');
            });
        });
    });

    describe('numbers divisible by 5 should be replaced by Buzz', () => {
        [5, 10, 20].forEach(number => {
            it(`number ${number} is converted to Buzz`, () => {
                generateFizzBuzz(number).should.be.equal('Buzz');
            });
        });
    });

    describe('numbers divisible by both 3 and 5 should be replaced by Fizz-Buzz', () => {
        [15, 30, 45].forEach(number => {
            it(`number ${number} is converted to Fizz-Buzz`, () => {
                generateFizzBuzz(number).should.be.equal('Fizz-Buzz');
            });
        });
    });
});
