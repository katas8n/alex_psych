const quizBtn = document.querySelector('.btn');

quiz();

function quiz() {
    const userName = prompt('Как вас зовут?');
    
    if (userName === 'Maks') {
        alert('Салам, красавчик');
    } else if (userName === 'Kir') {
        alert('ОООО, доброго времени суток');
    } else {
        alert(`Здравствуйте, ${userName}`);
    }

    const userSurname = prompt('Какая у вас фамилия?');
    const userAge = prompt('Сколько вам лет?');

    if (userAge.includes('23')) {
        alert('Welcome to the club, body');
    }
}

