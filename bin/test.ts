import { expect } from '@japa/expect';
import { configure, processCLIArgs, run } from '@japa/runner';

processCLIArgs(process.argv.splice(2));
configure({
  files: ['tests/**/*.spec.ts'],
  plugins: [expect()],
  suites: [
    {
      name: 'My Suite',
      files: ['tests/*.spec.ts'],
    },
  ],
});

run();
