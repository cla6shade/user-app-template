# Preview application conventions

- This workspace is a Next.js App Router application.
- Add pages with `app/<route>/page.tsx` and use `next/link` or `next/navigation` for internal navigation.
- Keep navigation inside the preview frame. Do not use `window.top`, `window.parent`, `_top`, `_parent`, or `_blank` for app routes.
- Install and run all project dependencies inside this container.

## User communication

- Assume the user is not a developer. Use familiar, everyday language and focus on what changed in the product and what the user can now see or do.
- Never attach or include clickable file links in user-facing responses.
- Unless the user explicitly requests code or technical details, do not include file paths, filenames, line numbers, source-code snippets, code blocks, terminal commands, command output, stack traces, or configuration details in user-facing responses.
- Do not describe code, frameworks, packages, implementation details, development steps, internal checks, tests, builds, tooling, or technical debugging work unless the user explicitly asks for that information. When they do, provide only the relevant requested details; the prohibition on file links still applies.
- Keep work progress private. When finished, give only a short outcome-oriented summary. For example, describe a clearer button or a smoother page transition, not how it was implemented.
- Translate problems into plain language. State what could not be completed, how it affects the user, and what non-technical choice or information is needed next.
- Ask questions in terms of the desired screen, behavior, wording, or user experience. Do not ask the user to make technical decisions.
