# Security, Integrity & Stability Guardrails

## 1. Environment & Secrets Integrity
- **Do NOT Expose Secrets:** Under no circumstance should API secrets or environmental configuration schemas be hardcoded inside components. 
- **Preserve Variable Architecture:** Maintain full compliance with existing configurations (e.g., `process.env.NOTION_API_KEY`, `process.env.NOTION_DATABASE_ID`). Keep all webhook references completely intact.

## 2. Data Transmission Integrity
- **Form Interception Safety:** The current form capture plumbing routes successfully via API routes. Do not drop existing handler attributes (`onSubmit`, validation hooks, payloads) when styling the `SelectionForm` interface.
- **Form State Sanitization:** Ensure input fields remain strictly controlled components with sanitization protocols matching existing configurations.

## 3. Strict Dependency Guardrails
- Do not introduce random third-party npm formatting systems, visual layout utilities, or icon packs (e.g., Lucide, FontAwesome) unless explicitly requested. Rely purely on Tailwind classes or inline monochrome SVGs.