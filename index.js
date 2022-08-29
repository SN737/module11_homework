

export function getPercents(percent, number){

    let result = (number * percent) / 100
    return result;

}

console.log(getPercents(0, 325))


export function getMonth(n) {

    switch(n){
        case 1:
            return 'Январь';
        case 2:
            return 'Февраль';
        case 3:
            return  'Март';
        case 4:
            return  'Апрель';
    }
}

console.log(getMonth(2))