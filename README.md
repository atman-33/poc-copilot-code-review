# PoC Copilot Code Review

This repository is a PoC (Proof of Concept) to test and verify the code review capabilities of GitHub Copilot.

## Purpose

To confirm whether Copilot's code review on Pull Requests is performed appropriately according to project-specific guidelines.

## Code Review Guidelines

In this project, code reviews are conducted based on the rules defined in the following document:

- [docs/code-review-guidelines.md](./docs/code-review-guidelines.md)

### Key Rules

1. **Avoid `any` type**: Avoid using `any` to ensure type safety.
2. **Explicit Return Types**: All functions must have explicit return types.
3. **No Non-null Assertions**: Avoid using the `!` operator; use optional chaining or type narrowing instead.

## Testing Method

1. Create a branch containing code that intentionally violates the guidelines, such as `src/violation-test.ts`.
2. Create a Pull Request against the `main` branch.
3. Verify if Copilot detects the guideline violations and provides appropriate review comments (including badges).

## File Structure

- `docs/code-review-guidelines.md`: Definition of code review rules
- `src/violation-test.ts`: File containing violation code for testing
