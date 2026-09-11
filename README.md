# Midnight Counter Contract

> A privacy-preserving counter contract on the Midnight Network that increments public state using private inputs.

## Contract Address

| Network  | Address                                                          |
|----------|------------------------------------------------------------------|
| Preview  | e6a7dcd3e53301f85fab3d24cb349aeee99ad189ac2d6e6b3a7c473bc647127f                                     |
| Preprod  | e6a7dcd3e53301f85fab3d24cb349aeee99ad189ac2d6e6b3a7c473bc647127f                                     |

## What This Does

A counter contract deployed on the Midnight blockchain. Anyone can increment the counter, but the amount they increment by is kept private. Only the resulting counter value is publicly visible on-chain.

## Privacy Model

- **PUBLIC** (on-chain, visible to anyone): The current value of `counter` (a Uint<32>)
- **PRIVATE** (private witness, never on-chain): The `increment_by` value passed to the increment circuit
- **What the user PROVES without revealing**: That the counter was incremented by a valid Uint<32> amount, without revealing what that amount was

## Tech Stack

- Midnight Network
- Compact language (v0.31.0 compiler)
- Node.js v24
- Docker (proof server)

## Prerequisites

- Node.js >= 22
- Docker (running the Midnight proof server)
- WSL (on Windows)
- Compact compiler v0.31.0 (`compact update 0.31.0`)

## Setup

```bash
git clone <your-repo-url>
cd my-project
npm install
```

## Compile Contract

```bash
compact compile contracts/counter.compact managed/counter
```

## Run Tests

```bash
npx jest --config jest.config.cjs tests/counter.test.ts --no-coverage
```

## Initial Idea
I wanted to build a simple but meaningful example of privacy-preserving computation 
on the Midnight Network. The counter contract demonstrates the core concept of 
Midnight's privacy model: anyone can see that the counter changed (public state), 
but nobody can see by how much it was incremented (private witness). 

This makes it a great starting point for understanding how zero-knowledge proofs 
can separate "what happened" from "how it happened" — a fundamental building block 
for private DeFi, voting systems, and confidential business logic on-chain.

## Screenshots

### Compile Output
<img width="3375" height="897" alt="1000456554" src="https://github.com/user-attachments/assets/9dc538d0-9b00-4fdf-9402-b7785d581dc2" />


### Tests Passing
<img width="3118" height="598" alt="1000456553" src="https://github.com/user-attachments/assets/0ccd600d-aabc-48f8-a6ab-683290550a3c" />

### Contract Deployed
<img width="2580" height="378" alt="1000456555" src="https://github.com/user-attachments/assets/d0d05b6e-0e1a-401a-9504-866a18684ac6" />


