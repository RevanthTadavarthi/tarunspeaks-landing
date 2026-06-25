# Zero-Breakage Core Developer Instructions

## 1. Read-Before-Write Strict Policy
- Before modifying any file (especially layout elements or API-connected sections), you MUST completely read and trace its dependency tree. Do not assume component shapes or function parameters.
- Verify existing TypeScript types and interfaces before modifying props.

## 2. Type-Safe Compilation Mandate
- **No Implicit Any:** All newly declared objects, params, and properties must be strongly typed.
- **Zero Build Silences:** Do not inject short-hand override bypass comments (e.g., `// @ts-ignore` or `// @ts-nocheck`) to skip error loops during Netlify production builds. Fix underlying structural interfaces explicitly.

## 3. Class Refactoring Best Practices
- Keep structural layout separations separate from visual colors. Always map styles to established root custom color tokens: `--canvas-black`, `--surface-dark`, `--text-pure`, `--text-muted`, `--brand-interactive`, `--brand-outcome`, and `--border-stark`.
- Ensure all borders use clean, sharp corners (`rounded-none`).