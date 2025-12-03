# Code Review Guidelines

> **Note to Copilot:** When generating review comments, please use **actual line breaks** in the Markdown text instead of printing the literal `\n` characters. Ensure the output is properly formatted multi-line Markdown.

## Must
When finding issues related to the following points, please include the badge ![must](https://img.shields.io/badge/review-must-red.svg) in your review comment.

1. **Avoid `any` type**: Do not use `any`. Use `unknown` or specific types to ensure type safety.
2. **Explicit Return Types**: All functions must have explicit return types.
3. **No Non-null Assertions**: Avoid using the non-null assertion operator (`!`). Use optional chaining or type narrowing instead.
