// Enable ES6 import syntax
require = require('esm')(module /*, options*/);

// Rest of your code
(async () => {
  const { createPromptModule } = await import('inquirer');

  const prompt = createPromptModule();

  const questions = [
    {
      type: 'input',
      name: 'firstName',
      message: 'Sisesta oma eesnimi:',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Sisesta oma perekonnanimi:',
    },
    {
      type: 'confirm',
      name: 'confirmed',
      message: 'Kas soovid jätkata?',
    },
    {
      type: 'list',
      name: 'favoriteColor',
      message: 'Vali oma lemmikvärv:',
      choices: ['Sinine', 'Punane', 'Roheline', 'Kollane'],
    },
    {
      type: 'checkbox',
      name: 'hobbies',
      message: 'Vali oma hobid:',
      choices: ['Sport', 'Lugemine', 'Reisimine', 'Muusika'],
    },
    {
      type: 'password',
      name: 'password',
      message: 'Sisesta parool:',
      mask: '*',
    },
    {
      type: 'number',
      name: 'age',
      message: 'Kui vana sa oled?',
    },
    {
      type: 'input',
      name: 'interestingFact',
      message: 'Jaga üks huvitav fakt enda kohta:',
    },
  ];

  const answers = await prompt(questions);
  console.log('Vastused:', answers);
})();
