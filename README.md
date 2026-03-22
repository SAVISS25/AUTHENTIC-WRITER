# Authentic Writing Coach

An AI-powered writing coach and co-authoring assistant built with Next.js, TypeScript, and OpenAI GPT-4o. Guides writers through a structured 5-phase workflow to produce authentic, well-sourced writing.

## Features

- **Phase 0 — Intake**: Gathers assignment context, specs, sources, and voice preferences
- **Phase 1 — Plan**: Proposes thesis options, builds argument maps, creates outlines
- **Phase 2 — Draft**: Writes one section at a time with feedback loops
- **Phase 3 — Quality**: Checks specificity, evidence binding, transitions, structure, and rhythm
- **Phase 4 — Integrity**: Enforces no fabrication, tags missing sources as [NEEDS SOURCE]
- **Session Summary**: Drafting log, provenance map, and next questions

## Setup

### Prerequisites
- Node.js 18+
- An OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- OpenAI API (gpt-4o)
- react-markdown
