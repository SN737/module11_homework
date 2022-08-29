
// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

export function getPercents(percent, number){

    let result = (number * percent) / 100
    return result;

}

console.log(getPercents(0, 325))


// Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'
// решил попробовать switch   вместо if/else

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