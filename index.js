import readlineSync from 'readline-sync';

function getComputerChoose() {
  const choices = ['Камень', 'Ножницы', 'Бумага'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function chooseWinner(userChoose, computerChoose) {
  if (userChoose === computerChoose) {
    return 'Ничья!';
  }
  if (
    (userChoose === 'Камень' && computerChoose === 'Ножницы')
        || (userChoose === 'Ножницы' && computerChoose === 'Бумага')
        || (userChoose === 'Бумага' && computerChoose === 'Камень')
  ) {
    return 'Вы победили!';
  }
  return 'Компьютер победил!';
}

function playGame() {
  let playAgain = 'yes';
  while (playAgain.toLowerCase() === 'yes') {
    console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');
    console.log('Выберите вашу фигуру:');
    console.log('1. Камень');
    console.log('2. Ножницы');
    console.log('3. Бумага');
    const choice = readlineSync.question('Введите номер выбранной фигуры: ');
    let userChoice;
    switch (choice) {
      case '1':
        userChoice = 'Камень';
        break;
      case '2':
        userChoice = 'Ножницы';
        break;
      case '3':
        userChoice = 'Бумага';
        break;
      default:
        console.log('Неверный выбор. Попробуйте еще раз.');
        playGame();
    }
    const computerChoice = getComputerChoose();
    console.log(`Вы выбрали: ${userChoice}`);
    console.log(`Компьютер выбрал: ${computerChoice}`);
    console.log(chooseWinner(userChoice, computerChoice));
    playAgain = readlineSync.question('Хотите сыграть еще раз? (yes/no): ').toLowerCase();
  }
  console.log('Спасибо за игру! До встречи!');
}

playGame();
