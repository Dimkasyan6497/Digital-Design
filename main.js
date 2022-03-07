// Задача 1. Верстка страницы

const menuListEl = document.body.querySelector('.menu-list');

document.body.querySelector('.menu').addEventListener('click', (evt) => {
  menuListEl.classList.toggle('visually-hidden');
});

document.body.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('link')) { return };
  menuListEl.classList.add('visually-hidden');
});

// Задача 2. Вывод информации о дате

function getDayInfo(str)  {
  const strDate = `${str.slice(-4)}-${str.slice(3, 5)}-${str.slice(0, 2)}`,
        daysNameArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
          'Четверг', 'Пятница', 'Суббота'
        ],
        monthNameArr = ['Января', 'Февраля', 'Марта', 'Апреля',
          'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
        ];

  const date = new Date(strDate),
        dayName = daysNameArr[date.getDay()],
        weekNumber = Math.ceil(date.getDate()/7),
        monthName = monthNameArr[date.getMonth()];

  return (
    `${dayName}, ${weekNumber} неделя ${monthName} ${date.getFullYear()} года`
  );
}

console.log(getDayInfo("09.03.2022"));
