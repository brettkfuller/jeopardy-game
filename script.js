const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
  {
    genre: 'WHO',
    questions: [
      {
        question: 'Who sang Purple Rain?',
        answers: ['Prince', 'Michael Jackson', 'Stevie Wonder'],
        correct: 'Prince',
        level: 'easy',
      },
      {
        question: 'Who was born on Krypton',
        answers: ['Batman', 'Superman'],
        correct: 'Superman',
        level: 'medium',
      },
      {
        question: 'Who designed the first car?',
        answers: ['Karl Benz', 'Henry Ford'],
        correct: 'Karl Benz',
        level: 'hard',
      },
    ],
  },
  {
    genre: 'WHERE',
    questions: [
      {
        question: 'Where is Buckingham Palace?',
        answers: ['Richmond', 'London'],
        correct: 'London',
        level: 'easy',
      },
      {
        question: 'Where is the Pantheon',
        answers: ['Rome', 'Milan'],
        correct: 'Rome',
        level: 'medium',
      },
      {
        question: 'Where is Mount Kilamanjaro',
        answers: ['Zimbabwe', 'Tanzania'],
        correct: 'Tanzania',
        level: 'hard',
      },
    ],
  },
  {
    genre: 'WHEN',
    questions: [
      {
        question: 'When is Christmas?',
        answers: ['30th Dec', '25th Dec'],
        correct: '25th Dec',
        level: 'easy',
      },
      {
        question: 'When was JFK Shot?',
        answers: ['1963', '1961'],
        correct: '1963',
        level: 'hard',
      },
      {
        question: 'When did the United States enter into WW2?',
        answers: ['1932', '1941'],
        correct: '1941',
        level: 'medium',
      },
    ],
  },
  {
    genre: 'WHAT',
    questions: [
      {
        question: 'What is the capital of Saudi Arabia?',
        answers: ['Jeddah', 'Riyadh'],
        correct: 'Riyadh',
        level: 'hard',
      },
      {
        question: 'What do Koalas eat?',
        answers: ['Straw', 'Eucalyptus'],
        correct: 'Eucalyptus',
        level: 'medium',
      },
      {
        question: 'What is a cm short for',
        answers: ['centiliter', 'centimeter'],
        correct: 'Centimeter',
        level: 'easy',
      },
    ],
  },
  {
    genre: 'HOW MANY',
    questions: [
      {
        question: 'How many players on a basketball team?',
        answers: ['15', '6'],
        correct: '6',
        level: 'easy',
      },
      {
        question: 'How many seconds in an hour?',
        answers: ['36000', '3600'],
        correct: '3600',
        level: 'medium',
      },
      {
        question: 'How many people in China?',
        answers: ['1.1 bil', '1.4 bil'],
        correct: '1.4 bil',
        level: 'hard',
      },
    ],
  },
]
