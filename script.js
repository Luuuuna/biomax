/* Первые два вопроса */
let money = +prompt('Ваш бюджет на месяц?', ''); //ставим + перед promt для того, чтобы введенные данные имели тип number
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

/* Создаем объект */
let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}





/* задаем пользовалю вопросы по 2 раза */
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ( (typeof(a) ) === 'string' && (typeof(a)) != null && (typeof(b)) != null  && a != ' ' && b != " "
    && a.length < 50)  {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--;
    }
   
};


// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }


// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

appData.moneyPerDay = appData.moneyData / 30;

// Выводим на экран пользователя бюджет за 1 день из расчета, что у нас месяц = 30 дней
alert('Ваш бюджет на 1 день '  + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
}  else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}