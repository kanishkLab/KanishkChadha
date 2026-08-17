---
title: "Five spreadsheets to one source of truth"
role: "Analytics / BI"
year: 2023
duration: "3 months"
outcomeSummary: "A live dashboard on synthetic data — CAC, LTV, ROAS, MER, contribution margin, anomaly detection. 40% less reporting time."
overview: "Consolidated five disconnected reporting spreadsheets into a single live BI dashboard covering the metrics that matter — CAC, LTV, ROAS, MER, contribution margin — with anomaly detection built in."
problem: "Marketing reporting lived in five separate spreadsheets maintained by different people, with inconsistent definitions, manual data entry, and no alerting when numbers moved unexpectedly."
constraints:
  - "Must consolidate data from multiple ad platforms, CRM, and finance systems"
  - "Dashboard must be self-serve for non-technical stakeholders"
  - "Reporting cadence must support both weekly reviews and ad-hoc deep dives"
approach: "Designed a unified data model with consistent metric definitions, built automated data pipelines from source systems, and created a live dashboard with anomaly detection that flags unexpected changes before they become problems."
keyDecisions:
  - decision: "Standardize metric definitions before building the dashboard"
    reasoning: "Five spreadsheets meant five definitions of CAC. Aligning on definitions first prevented the dashboard from inheriting the same inconsistencies it was meant to fix."
    alternatives:
      - "Build the dashboard first and reconcile definitions later"
      - "Keep separate dashboards with a summary roll-up"
  - decision: "Add anomaly detection to surface issues proactively"
    reasoning: "Stakeholders were discovering problems weeks late in manual reviews. Automated anomaly detection catches metric shifts in near-real-time."
techStack:
  - "Looker Studio"
  - "GA4"
  - "Google Ads"
  - "Meta Ads"
  - "SQL"
impact:
  metrics:
    - label: "Reporting time"
      value: "40% reduction"
  qualitative: "Stakeholders moved from spreadsheet archaeology to a single source of truth with real-time visibility. Anomaly detection catches issues days earlier than manual review cycles."
learnings:
  - "Metric definition alignment is the real project — the dashboard is just the output"
  - "Anomaly detection turns a reporting tool into an early warning system"
coverImage: "/cases/bi-dashboard-source-of-truth.jpg"
featured: true
status: completed
order: 3
---

Full case study in progress.
