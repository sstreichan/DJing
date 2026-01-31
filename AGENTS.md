Project Agent Guide — AGENTS.md
=================================

Purpose
-------
This file orients autonomous agents (and humans) on how to build, run, test, and follow style and workflow conventions for this repository. Keep this file concise — follow linked context files for deep policies.

Quick notes
-----------
- Framework: Astro (see package.json & astro.config.mjs).
- Package managers: Bun is available (bun.lock present). npm and pnpm are supported. Recommend Bun-first when available for speed; otherwise npm/pnpm.
- Scripts and behavior should be confirmed in package.json before making changes.
- This repo currently does not enforce linter/test configs. When adding tools, place their configs at the repo root so other agents can discover them.

1) Build / dev / preview
-------------------------
- Install dependencies (choose one):
  - bun install  (preferred when Bun is available)
  - npm install
  - pnpm install
- Development server:
  - bun dev  or  npm run dev  or  pnpm dev  (runs `astro dev`)
- Build (production):
  - bun build  or  npm run build  or  pnpm build  (runs `astro build`)
- Preview a built site:
  - bun preview  or  npm run preview  or  pnpm preview  (runs `astro preview`)
- Use the Astro CLI directly when needed:
  - bun astro -- <args>  or  npm run astro -- <args>

2) Linting & formatting (recommended)
-------------------------------------
If you add linters/formatters, put configs at the repository root: `.eslintrc.cjs`, `.prettierrc`, etc.

Suggested toolset
- eslint, @typescript-eslint/parser, @typescript-eslint/eslint-plugin, prettier, eslint-config-prettier, eslint-plugin-import

Suggested package.json scripts
- "lint:eslint": "eslint \"src/**/*.{js,ts,astro}\" --max-warnings=0"
- "format": "prettier --write \"src/**/*.{js,ts,astro,md,json}\""

Prettier baseline
- 2 spaces
- singleQuote: true
- trailingComma: "es5"
- printWidth: 100

ESLint guidance (high level)
- Extend: plugin:@typescript-eslint/recommended
- Enforce import order (builtin / external / internal / relative)
- Disallow unused variables; allow leading _ for intentionally ignored args

3) Tests — runner & single-test commands
----------------------------------------
Recommended runner: Vitest for Astro/TS projects. If you prefer Jest, document that choice and add configs.

Install example
- bun add -d vitest @testing-library/jest-dom jsdom
- or npm i -D vitest @testing-library/jest-dom jsdom

Suggested scripts
- "test": "vitest run"
- "test:watch": "vitest"
- "test:coverage": "vitest run --coverage"

Run a single test (Vitest)
- By test title/pattern:  bun test -- -t "should render Button"
- By pattern via npm:  npm run test -- -t "should render Button"
- Direct: npx vitest -t "<pattern>"
- By file+pattern: npx vitest -f src/components/Button.test.ts -t "renders"

Jest example (if used)
- npm i -D jest ts-jest @types/jest
- npm test -- -t 'pattern'

4) TypeScript & typing
-----------------------
- Keep tsconfig.json strict (strict: true). Avoid relaxing without clear reasons.
- Explicit return types for exported functions and module-level helpers. Small internal helpers may use inference.
- Use unknown instead of any for external/untrusted input; narrow to concrete types before use.
- Prefer small, focused interfaces; use type for unions, interface for public object shapes.

5) Imports & module rules
-------------------------
- Prefer absolute imports when configured; otherwise import from src/.
- Import order: 1) builtin (node) 2) external 3) internal absolute 4) relative (./ ../). Separate groups with a blank line.
- Omit file extensions for TS imports. For .astro components import without extension when supported.
- Keep import lines <= 100 characters where possible; wrap long lists.

6) Naming conventions
---------------------
- variables/functions: camelCase
- components / React / .astro: PascalCase
- types / interfaces: PascalCase (no I- prefix by default)
- constants: UPPER_SNAKE_CASE for truly constant values; otherwise camelCase

7) Formatting & whitespace
--------------------------
- 2-space indentation
- End files with a single newline
- Aim for ~100 chars/line; avoid exceeding 120

8) Error handling
------------------
- Use try/catch at async/await boundaries. Keep try blocks small and add contextual info when rethrowing.
- Prefer typed Error subclasses or small helpers for shared error shapes.
- Do not swallow errors silently. If ignoring an error intentionally, document why and consider logging.

9) Async patterns
------------------
- Prefer async/await; avoid mixing .then/.catch chains in new code.
- For fire-and-forget: const p = doWork(); p.catch(console.error) and document intent.

10) Logging & secrets
----------------------
- Never commit secrets or .env files. Use environment management external to repo.
- For small projects: console.info / warn / error. For production-grade systems integrate a structured logger.

11) Files & project organization
-------------------------------
- Pages: src/pages
- Components: src/components
- Shared utilities: src/lib or src/utils
- Keep utilities small and feature-focused; prefer feature folders for large features

12) Generated files
-------------------
- Respect generated-file headers (e.g. // Code generated by ...). Do not edit generated files — change the generator/spec and re-generate.

13) Git, commits & PRs
----------------------
- Do not auto-commit changes; only commit when asked. When committing, use short present-tense messages: e.g., "feat: add X", "fix: correct Y".
- Include a one-line summary and a short body for non-trivial changes.
- When creating PRs include: summary, changed files/components, testing notes, and any migration steps.

14) Cursor & Copilot rules
--------------------------
- I checked the repository for .cursor/rules/ and .cursorrules and for .github/copilot-instructions.md — none were present.
- If you add Cursor or Copilot rules to the repo, list them here and follow their instructions. Agents should surface those files in the AGENTS.md update.

15) Context Manager (agent-critical)
-----------------------------------
- This repository integrates with the global Context System used by agentic tools. Agents MUST read required context files before performing harvest/organize/extract operations.
- Context location: /home/sebastian/.config/opencode/context/core/context-system/
- Typical files to consult: operations/harvest.md, operations/extract.md, standards/mvi.md, guides/workflows.md
- New/updated context files should follow MVI: 1–3 sentence core, 3–5 key points, minimal example, reference link; keep files under ~200 lines.

Quick checklist for agent edits
------------------------------
1) Run ContextScout or otherwise load the documentation/context standards referenced above before making changes.
2) Install deps (bun/npm/pnpm) and run build locally.
3) Add or run linters/formatters and fix issues.
4) Add/update tests and run a single test using the patterns above.
5) Respect generated-file headers; do not edit generated artifacts.

Want me to add configs?
------------------------
If you prefer, I can add initial ESLint, Prettier, and Vitest configs and update package.json scripts. Default suggestion: Bun-first toolchain with Vitest. Reply with which toolchain you prefer and I will create the configs and example scripts.

References
----------
- README.md — project quick start and high-level docs
- /home/sebastian/.config/opencode/context/core/standards/documentation.md — documentation standards (MVI, examples)

(End)
