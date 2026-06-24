# Plan: PeaceMak Artisan Locator Interface

Build a simple, intuitive interface called "PeaceMak" that helps users find artisans (plumbers, electricians, etc.) based on their location, with a guided follow-up question flow to refine the search.

## Scope Summary
- **App Name:** PeaceMak
- **Core Feature:** Location-based artisan search.
- **Workflow:**
    1.  Landing/Location input (browser geolocation or manual entry).
    2.  Artisan category selection.
    3.  Follow-up questions (e.g., "What specific plumbing issue do you have?").
    4.  Results display (mocked list of artisans).
- **Non-Goals:** Real backend integration, actual live location tracking of artisans, payment processing, user authentication.

## Assumptions & Open Questions
- **Data Persistence:** All data will be mock data stored in local constants. No Supabase/Database.
- **Location:** We will use the browser's Geolocation API for "Near Me" and a simple text input for manual location.
- **Follow-up logic:** Hardcoded logic based on the selected artisan category.

## Affected Areas
- **Frontend:**
    - `src/App.tsx`: Main entry and state management for the search flow.
    - `src/components/`: New components for Location search, Category selection, Question flow, and Results.
    - `src/data/mockData.ts`: Static data for artisan categories, follow-up questions, and fake artisan listings.

## Ordered Phases

### Phase 1: Foundation & Data Setup
- Define the data structure for categories, questions, and mock artisans.
- Create `src/data/mockArtisans.ts`.

### Phase 2: Location & Category Selection
- Build the initial landing state.
- Implement geolocation request and manual location input.
- Create the category grid (e.g., Carpenter, Electrician, Plumber).

### Phase 3: Interactive Follow-up Flow
- Build the "Follow-up Question" component that appears after selecting a category.
- Logic to transition from question to results.

### Phase 4: Results Display
- Design and implement the artisan list cards.
- Show results filtered (mock-filtered) by category and "proximity".

### Phase 5: Final Polishing
- Ensure responsive design.
- Add "PeaceMak" branding and UI refinements using Shadcn components.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire interface and mock data logic.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1-5
- **Scope:** 
    - Create `src/data/mockArtisans.ts` with categories and dummy artisan data.
    - Build a multi-step search UI in `src/App.tsx` or dedicated components.
    - Use `src/components/ui/` components for buttons, inputs, and cards.
    - Implement a "PeaceMak" header/branding.
    - Steps: 
        1. Ask for location.
        2. Select category.
        3. Ask 1-2 follow-up questions (e.g. "Is it an emergency?", "Residential or Commercial?").
        4. Show filtered list of artisans.
- **Files:** 
    - `src/App.tsx`
    - `src/data/mockArtisans.ts` (new)
    - `src/components/ArtisanSearch.tsx` (new)
    - `src/components/ArtisanResults.tsx` (new)
- **Depends on:** none
- **Acceptance criteria:**
    - User can enter a location or click "Use my location".
    - User can select an artisan category.
    - User sees at least one follow-up question.
    - User sees a list of mock artisans at the end.
    - App is titled "PeaceMak".
