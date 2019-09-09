import * as inquirer from 'inquirer'
import HourlyCalculator from './index'

inquirer
  .prompt([
    {
      type: 'number',
      name: 'hourlyRate',
      message: 'What is your hourly wage? $',

    },
    {
      type: 'number',
      name: 'numHours',
      message: 'How many hours?'
    }
])
  .then(answers => {
    const result: number = new HourlyCalculator(answers.numHours, answers.hourlyRate).paycheck

    console.log(`Your paycheck is $${result}`)
  })