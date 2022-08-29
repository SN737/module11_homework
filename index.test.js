import {getPercents} from  "./index.js";
import {getMonth} from "./index.js";


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
    it('returns march cause it 3rd month of the year', ()=> {
        expect(getMonth(3)).toBe('Март')
    });
    it(' returns feb cause it 2rd month of the year', ()=> {
        expect(getMonth(2)).toBe('Февраль')
    });
    it(' returns jan cause it 1st month of the year', ()=> {
        expect(getMonth(1)).toBe('Январь')
    });
    it(' negative way: returns "error" cause number out of range 1-12' , ()=> {
        expect(getMonth(0)).toBe('Ошибка, нет такого месяца')
    });
})


