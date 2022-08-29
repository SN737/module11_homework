import {getPercents} from  "./index.js";
import {getMonth} from "./index";


describe ('tests function that returns amount of % from number', ()=> {
    it(' returns amount of 60% from number 200', ()=> {
        expect(getPercents(30, 200)).toBe(60)
    });
    it(' returns amount of 60% from number 200', ()=> {
        expect(getPercents(25, 100)).toBe(25)
    });
    it(' returns amount of 60% from number 200', ()=> {
        expect(getPercents(0, 325)).toBe(0)
    });
});

describe ('tests function that returns name of month', ()=> {
    it(' returns march cause it 3rd month of the year', ()=> {
        expect(getMonth(3)).toBe('Март')
    });
    it(' returns amount of 60% from number 200', ()=> {
        expect(getMonth(2)).toBe('Февраль')
    });
    it(' returns amount of 60% from number 200', ()=> {
        expect(getMonth(1)).toBe('Январь')
    });
})


