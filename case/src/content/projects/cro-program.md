---
title: "Owning a CRO program"
role: "Growth / CRO"
year: 2023
duration: "12 months"
outcomeSummary: "Hotjar → Optimizely testing loop across 10+ builds → 35% lift in inbound leads, with release QA and consent checks before anything ships."
overview: "Built and ran a structured CRO program across 10+ lead-generation web properties, using behavioral analytics to inform hypotheses and a disciplined testing loop to validate changes."
problem: "Web properties were being redesigned based on opinion rather than data. No systematic testing existed, and changes shipped without QA or consent compliance checks."
constraints:
  - "Must work across 10+ independently managed web properties"
  - "Changes must pass release QA and consent checks before shipping"
  - "Testing velocity must not compromise site stability or user experience"
approach: "Established a Hotjar-to-Optimizely pipeline: behavioral analytics surface opportunities, structured A/B tests validate hypotheses, and a release process ensures QA and consent compliance before anything goes live."
keyDecisions:
  - decision: "Gate every test behind release QA and consent checks"
    reasoning: "CRO velocity means nothing if a test breaks the site or violates consent requirements. The gate adds a day but prevents costly rollbacks and compliance issues."
    alternatives:
      - "Ship tests immediately with post-launch monitoring"
      - "QA only high-risk tests"
  - decision: "Centralize the testing loop across all properties"
    reasoning: "A single methodology and toolset across 10+ properties enables cross-property learning and prevents teams from running conflicting tests."
techStack:
  - "Hotjar"
  - "Optimizely"
  - "GA4"
  - "Google Tag Manager"
  - "Consent Mode v2"
impact:
  metrics:
    - label: "Inbound leads"
      value: "35% lift"
    - label: "Properties instrumented"
      value: "10+"
  qualitative: "Shifted web optimization from opinion-driven redesigns to a data-driven testing culture. Every change now has a measurable hypothesis and documented outcome."
learnings:
  - "The testing loop matters more than any single test — process discipline compounds"
  - "Consent checks belong in the release process, not as an afterthought"
featured: true
status: completed
order: 4
---

Full case study in progress.
