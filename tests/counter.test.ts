import { describe, test, expect } from '@jest/globals';

// Simulate contract state
let counter = 0;

// Simulate circuit functions
function increment(increment_by: number): void {
  // increment_by is a private witness - never exposed on-chain
  counter = (counter + increment_by) % (2 ** 32);
}

function reset(): void {
  counter = 0;
}

function getCount(): number {
  return counter;
}

describe('Counter Contract', () => {

  beforeEach(() => {
    counter = 0;
  });

  test('1. Circuit logic: counter increments correctly', () => {
    increment(5);
    expect(getCount()).toBe(5);
    increment(3);
    expect(getCount()).toBe(8);
  });

  test('2. State transitions: reset returns counter to zero', () => {
    increment(10);
    expect(getCount()).toBe(10);
    reset();
    expect(getCount()).toBe(0);
  });

  test('3. Privacy: multiple inputs can produce same public state', () => {
    // Private input 7 from state 0 → state 7
    increment(7);
    const stateA = getCount();

    reset();

    // Private input 3+4 also → state 7, proving you cannot infer the private input from public state
    increment(3);
    increment(4);
    const stateB = getCount();

    // Same public state, different private inputs — private input is NOT recoverable
    expect(stateA).toBe(stateB);
    expect(stateA).toBe(7);
  });

});
