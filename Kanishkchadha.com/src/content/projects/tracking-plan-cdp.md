---
title: "The tracking plan that governs a CDP"
role: "Measurement & Instrumentation"
year: 2024
duration: "Ongoing"
outcomeSummary: "Segment end-to-end: event design, identity resolution, server-side GTM, and the governance that keeps it clean."
overview: "Designed and implemented a comprehensive tracking plan and CDP architecture using Segment, covering event taxonomy, identity resolution, server-side Google Tag Manager, and ongoing governance."
problem: "Marketing data was fragmented across tools with no unified event schema, inconsistent user identity across touchpoints, and no governance process to prevent tracking drift over time."
constraints:
  - "Must unify data across web properties, ad platforms, and CRM"
  - "Consent management (Consent Mode v2) required for compliance"
  - "Tracking plan must be maintainable by non-technical marketing team members"
approach: "Built a Segment-centered CDP with a governed event taxonomy, identity resolution rules, server-side GTM for reliable data collection, and a documented tracking plan that serves as the single source of truth for all instrumentation decisions."
keyDecisions:
  - decision: "Server-side GTM over client-side-only tagging"
    reasoning: "Server-side collection provides more reliable data, better privacy compliance, and resilience against ad blockers and browser restrictions."
    alternatives:
      - "Client-side GTM only"
      - "Direct API integrations without a tag manager"
  - decision: "Governed tracking plan as a living document"
    reasoning: "A tracking plan that lives alongside the implementation prevents schema drift and gives the whole team a shared language for events and properties."
techStack:
  - "Segment"
  - "Google Tag Manager (server-side)"
  - "GA4"
  - "Consent Mode v2"
  - "Identity resolution"
impact:
  qualitative: "Clean, governed event data flowing through a unified CDP. Marketing and analytics teams share a single source of truth for tracking decisions, and new instrumentation follows a documented process."
learnings:
  - "A tracking plan is a governance document, not a spreadsheet — it needs ownership, review cycles, and versioning"
  - "Identity resolution is the hardest part of CDP work and deserves dedicated architecture time"
outcomeHighlight: "One event schema governing every downstream tool"
coverImage: "/cases/tracking-plan-cdp.png"
featured: true
status: ongoing
order: 2
---

Full case study in progress.
