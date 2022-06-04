const quizBtn = document.querySelector('.btn');

quizHandler();

function quizHandler() {
    checkUserName(askUserName);
    checkUserSurname(askUserSurname);
    checkUserAge(askUserAge);
}

// function quiz(userName) {
    // askUserName();
    // console.log(typeof(userName));
    // console.log(userName);

    // if (typeof(userName) == null || userName == '') {
    //     alert('Вы не ввели имя');
    //     askUserName();
    // }
    // if (userName === 'Maks') {
    //     alert('Салам, красавчик');
    // } else if (userName === 'Kir') {
    //     alert('ОООО, доброго времени суток');
    // } else {
    //     alert(`Здравствуйте, ${userName}`);
    // }
    
    // const userSurname = prompt('Какая у вас фамилия?');
    // const userAge = prompt('Сколько вам лет?');
    
    // if (userAge.includes('23')) {
    //     alert('Welcome to the club, body');
    // }
// }

function askUserName() {
    const userName = prompt('Как вас зовут?');
    return userName;
}

function checkUserName(askUserName) {
    let userName = askUserName();
    console.log(userName);
    console.log(typeof(userName));

    if (userName == '') {
        alert('Вы не ввели имя');
        checkUserName(askUserName);
    } else {
        if (userName === 'Maks') {
            alert('Салам, красавчик');
        } else if (userName === 'Kir') {
            alert('ОООО, доброго времени суток');
        } else {
            alert(`Здравствуйте, ${userName}`);
        }
    }
}

function askUserSurname() {
    const userSurname = prompt('Какая у вас фамилия?');
    console.log(userSurname);
    console.log(typeof(userSurname));
    return userSurname;
}

function checkUserSurname(askUserSurname) {
    let userSurname = askUserSurname();

    if (userSurname == '') {
        alert('Вы не ввели фамилию. Видимо, вы хотите остаться анонимным)');
        checkUserSurname(askUserSurname);
    } else {
        if (userSurname == 'Gates') {
            alert('I love u and ur money, Bill ! \u{1F60D}');
        } else if (userSurname == 'Mask') {
            alert('I wanna drive on ur big pESLA \u{1F60D}');
        }
    }
}

function askUserAge() {
    const userAge = prompt('Сколько вам лет?');

    console.log(userAge);
    console.log(typeof(userAge));
    console.log(parseInt(userAge));

    return userAge;
}

function checkUserAge(askUserAge) {
    let userAge = askUserAge();

    if (/[a-zа-яё]/i.test(userAge) || userAge == '') {
        alert('Вы ввели не число');
        checkUserAge(askUserAge);
    } else {
        if (userAge.includes('23')) {
            alert('Welcome to the club, body');
        }
    }

}

quizBtn.addEventListener('click', quizHandler);