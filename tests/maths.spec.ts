import { test } from '@japa/runner';

test.group('[root] Maths.add', () => {
  test('add two numbers', ({ expect }) => {
    // Test logic goes here
    console.log('Testing from root');
    expect(1 + 1).toBe(2);
  });
});
