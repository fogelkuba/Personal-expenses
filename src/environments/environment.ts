// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyBG-JxUQrQpTGkytZhZ2EsPmMqNF1hCapw',
    authDomain: 'personal-expenses-8427d.firebaseapp.com',
    databaseURL: 'https://personal-expenses-8427d.firebaseio.com',
    projectId: 'personal-expenses-8427d',
    storageBucket: '',
    messagingSenderId: '844996669765'
  }
};
