import { test } from '@japa/runner';

test.group('[my-package] Maths.add', () => {
  test('add two numbers', ({ expect }) => {
    // Test logic goes here
    console.log('Testing from my-package');
    expect(1 + 1).toBe(2);
  });
});
