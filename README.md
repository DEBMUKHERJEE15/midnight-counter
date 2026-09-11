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

[LEAVE PLACEHOLDER — I will fill this in manually]

## Screenshots

[LEAVE PLACEHOLDER — I will add compile output and contract address screenshots]
