/**
 * PORTFOLIO CONTENT
 * -------------------------------------------------------
 * Edit this file to add, remove, or update your work.
 * Each entry is one object in the ITEMS array below.
 *
 * Fields:
 *   type        "youtube" | "podcast" | "writing"
 *   title       Display title
 *   url         Link to the content (YouTube video, podcast
 *               episode, or article on your company site)
 *   description Short 1-2 sentence summary
 *   tags        Array of lowercase tags used for search & filtering
 *   date        "YYYY-MM-DD" -- used for sorting (newest first)
 *
 * To add a new item, copy one of the objects below, paste it
 * into the ITEMS array, and edit the fields.
 * -------------------------------------------------------
 */


// Update these with your real profile / channel links.
// Used by both the header links and the side menu.
const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@desiofalltrades",
  podcast: "https://www.forensicfocus.com/podcast/",
  linkedin: "https://www.linkedin.com/in/alexdesmond/",
  newsletter: "https://desi-5.kit.com/profile"
};

const ITEMS = [
  {
    type: "youtube",
    title: "How Claude Chat Share Links Really Work",
    url: "https://www.youtube.com/watch?v=fZXzevteu9g",
    description: "A look at how Claude chat share links actually work.",
    tags: ["claude", "ai", "security"],
    date: "2026-07-29"
  },
  {
    type: "youtube",
    title: "BTLO Replay: BOT | Incident Response Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=rC84V_7-mRU",
    description: "Walkthrough of the BOT incident response lab on Blue Team Labs Online.",
    tags: ["incident-response", "walkthrough", "btlo"],
    date: "2023-08-26"
  },
  {
    type: "youtube",
    title: "BTLO Replay: PANDEMIC | Reverse Engineering Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=YuHXf9Cm2uI",
    description: "Walkthrough of the PANDEMIC reverse engineering lab on Blue Team Labs Online.",
    tags: ["reverse-engineering", "walkthrough", "btlo"],
    date: "2023-09-02"
  },
  {
    type: "youtube",
    title: "BTLO Replay: STICKY SITUATION | Digital Forensics Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=OF245zLUxjo",
    description: "Walkthrough of the STICKY SITUATION digital forensics lab on Blue Team Labs Online.",
    tags: ["digital-forensics", "walkthrough", "btlo"],
    date: "2023-09-30"
  },
  {
    type: "youtube",
    title: "BTLO Replay: HOOKED | Incident Response Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=HLBf4f3b8aU",
    description: "Walkthrough of the HOOKED incident response lab on Blue Team Labs Online.",
    tags: ["incident-response", "walkthrough", "btlo"],
    date: "2023-10-21"
  },
  {
    type: "youtube",
    title: "BTLO Trick or Threat Announcement - 27 October 2023 Release!",
    url: "https://www.youtube.com/watch?v=nBVVZJlTtYo",
    description: "Announcement for Blue Team Labs Online's Trick or Threat Halloween release.",
    tags: ["announcement", "halloween", "btlo"],
    date: "2023-10-21"
  },
  {
    type: "youtube",
    title: "BTLO Replay: EXCELTIUM | Reverse Engineering Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=NRvp_5ABSMA",
    description: "Walkthrough of the EXCELTIUM reverse engineering lab on Blue Team Labs Online.",
    tags: ["reverse-engineering", "walkthrough", "btlo"],
    date: "2023-11-04"
  },
  {
    type: "youtube",
    title: "BTLO REPLAY presents GOTHAM | Retired Blue Team Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=jYKgKkieNng",
    description: "Walkthrough of the retired GOTHAM lab on Blue Team Labs Online.",
    tags: ["retired-lab", "walkthrough", "btlo"],
    date: "2023-11-11"
  },
  {
    type: "youtube",
    title: "BTLO REPLAY presents GHOSTED | Retired Blue Team Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=drRkyMbcxa8",
    description: "Walkthrough of the retired GHOSTED lab on Blue Team Labs Online.",
    tags: ["retired-lab", "walkthrough", "btlo"],
    date: "2023-11-18"
  },
  {
    type: "youtube",
    title: "BTLO REPLAY presents YUREI | Retired HALLOWEEN Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=29Jc0Y2bPs8",
    description: "Walkthrough of the retired YUREI Halloween-event lab on Blue Team Labs Online.",
    tags: ["retired-lab", "halloween", "walkthrough", "btlo"],
    date: "2023-11-25"
  },
  {
    type: "youtube",
    title: "BTLO REPLAY presents CURSED TOMB | Retired HALLOWEEN Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=O1S7RZcJe_Y",
    description: "Walkthrough of the retired CURSED TOMB Halloween-event lab on Blue Team Labs Online.",
    tags: ["retired-lab", "halloween", "walkthrough", "btlo"],
    date: "2023-11-25"
  },
  {
    type: "youtube",
    title: "BTLO REPLAY presents NIMBUS | Retired HALLOWEEN Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=kCgf9yUStMU",
    description: "Walkthrough of the retired NIMBUS Halloween-event lab on Blue Team Labs Online.",
    tags: ["retired-lab", "halloween", "walkthrough", "btlo"],
    date: "2023-11-25"
  },
  {
    type: "youtube",
    title: "BTLO REPLAY presents INVOICE | Retired Blue Team Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=7n_z6BksYj0",
    description: "Walkthrough of the retired INVOICE lab on Blue Team Labs Online.",
    tags: ["retired-lab", "walkthrough", "btlo"],
    date: "2023-12-02"
  },
  {
    type: "youtube",
    title: "BTLO REPLAY presents LINTRO | Retired Blue Team Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=cfAoiTumqIY",
    description: "Walkthrough of the retired LINTRO lab on Blue Team Labs Online.",
    tags: ["retired-lab", "walkthrough", "btlo"],
    date: "2023-12-16"
  },
  {
    type: "youtube",
    title: "BTLO REPLAY presents OBFUSCATED | Retired Blue Team Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=V1Jc3j5j7MU",
    description: "Walkthrough of the retired OBFUSCATED lab on Blue Team Labs Online.",
    tags: ["retired-lab", "walkthrough", "btlo"],
    date: "2023-12-23"
  },
  {
    type: "youtube",
    title: "Replay DERAILED (Frostbyte event) | Retired Blue Team Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=ItjpLIj4ysg",
    description: "Walkthrough of the retired DERAILED lab from BTLO's Frostbyte event.",
    tags: ["retired-lab", "frostbyte", "walkthrough", "btlo"],
    date: "2024-01-06"
  },
  {
    type: "youtube",
    title: "Replay WINTER STEW (Frostbyte event) | Retired Blue Team Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=IYnb12cD6qE",
    description: "Walkthrough of the retired WINTER STEW lab from BTLO's Frostbyte event.",
    tags: ["retired-lab", "frostbyte", "walkthrough", "btlo"],
    date: "2024-01-06"
  },
  {
    type: "youtube",
    title: "Replay SNOWFLAKE (Frostbyte event) | Retired Blue Team Lab Walkthrough",
    url: "https://www.youtube.com/watch?v=ULpNo7MnKnA",
    description: "Walkthrough of the retired SNOWFLAKE lab from BTLO's Frostbyte event.",
    tags: ["retired-lab", "frostbyte", "walkthrough", "btlo"],
    date: "2024-01-06"
  },
  {
    type: "writing",
    title: "AI Distillation: China's Latest Insider Attack Angle",
    url: "https://www.dtex.ai/blog/ai-distillation-chinas-latest-insider-attack-angle/",
    description: "A DTEX blog examining industrial-scale AI model distillation by China-based AI companies as the latest angle on insider-enabled technology transfer, and what it means for insider risk programs. Contributing researcher.",
    tags: ["writing", "ai", "china", "nation-state", "insider-threat"],
    date: "2026-09-18"
  },
  {
    type: "writing",
    title: "China's Insider Advantage, Part 2: The Evolution of China's Thousand Talents Program",
    url: "https://www.dtex.ai/resources/china-insider-risk-report-part-1-2-2/",
    description: "Part two of the DTEX China's Insider Advantage report series, tracing the Thousand Talents Program from its 2008 launch and why a state talent program belongs in an insider risk report. Co-author.",
    tags: ["writing", "report", "china", "nation-state", "espionage"],
    date: "2026-08-12"
  },
  {
    type: "writing",
    title: "China's Insider Advantage, Part 1: Inside China's Talent Acquisition Ecosystem",
    url: "https://www.dtex.ai/resources/china-insider-risk-report-part-1-2/",
    description: "Part one of the DTEX China's Insider Advantage report series, examining China's talent acquisition ecosystem as a national priority and how it turns trusted access into long-term technology transfer. Contributing researcher.",
    tags: ["writing", "report", "china", "nation-state", "espionage"],
    date: "2026-06-23"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: AI Agent Access Control Without Entitlement",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-ai-agent-access-control/",
    description: "Examines how AI agent permissions drift beyond user entitlements — ambient authority, compounding cross-agent delegation — and the scoping, allowlisting, and JIT entitlement controls that contain it.",
    tags: ["writing", "ai", "agentic-ai", "access-control", "insider-threat"],
    date: "2026-09-08"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Hermes AI Agent Detection",
    url: "https://www.dtex.ai/resources/i%C2%B3-threat-advisory-hermes-ai-agent-detection/",
    description: "A look at the Hermes AI agent, Claude's latest rival, with actionable detections to catch it before data exfiltration occurs.",
    tags: ["writing", "ai", "agentic-ai", "insider-threat"],
    date: "2026-07-16"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Detecting Claude Cowork Insider Threat Activity",
    url: "https://www.dtex.ai/resources/i%C2%B3-threat-advisory-detecting-claude-cowork-insider-threat-activity/",
    description: "Understand the Claude Cowork insider threat and discover essential strategies for mitigating risks associated with AI agents.",
    tags: ["writing", "ai", "agentic-ai", "insider-threat"],
    date: "2026-06-04"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Detecting Agentic AI Before Data Exfiltration",
    url: "https://www.dtex.ai/resources/i%C2%B3-threat-advisory-detecting-agentic-ai-on-endpoints-before-data-exfiltration/",
    description: "Explore the risks of agentic AI data exfiltration and discover essential measures for endpoint security and monitoring.",
    tags: ["writing", "ai", "agentic-ai", "data-exfiltration"],
    date: "2026-04-23"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Protecting Servers from Supply Chain Insider Risk",
    url: "https://www.dtex.ai/resources/i%C2%B3-threat-advisory-protecting-servers-from-supply-chain-insider-risk/",
    description: "Understand supply chain insider risk and how user behavior monitoring can identify threats in privileged server access.",
    tags: ["writing", "supply-chain", "servers", "insider-threat"],
    date: "2026-03-12"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: How Agentic AI Browsers Elevate Insider Risk",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-agentic-browsers-elevate-insider-risk/",
    description: "Agentic AI browsers are reshaping insider risk. This advisory examines real-world misuse scenarios and outlines controls to mitigate AI-driven data loss.",
    tags: ["writing", "ai", "agentic-ai", "browsers"],
    date: "2026-02-04"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: AI-enabled Insider Executes Full Insider Threat Kill Chain",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-ai-insider-executes-full-kill-chain/",
    description: "DTEX i3 investigates a network specialist who leveraged access and AI to complete all stages of the Insider Threat Kill Chain.",
    tags: ["writing", "ai", "insider-threat", "kill-chain"],
    date: "2025-12-10"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Exfiltration by Design: Insider Access and Server Vulnerabilities in Action",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-insider-access-server-vulnerabilities/",
    description: "Servers are the top target in 75% of breaches. Learn how insider threats, espionage, and AI attacks are reshaping server security defenses.",
    tags: ["writing", "servers", "insider-threat", "espionage"],
    date: "2025-10-22"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Detecting and Preventing AI Agent Prompt Injection Risks",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-ai-agent-prompt-injection-risks/",
    description: "Discover how AI agent prompt injection exposes credentials and insider risks, and what steps you can take now to secure enterprise systems.",
    tags: ["writing", "ai", "prompt-injection", "agentic-ai"],
    date: "2025-09-10"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Uncovering the Top Risks of AI Agents and How to Mitigate Them",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-mitigating-ai-agent-risks/",
    description: "An overview of AI agent risk including task attribution, data exposure, and prompt injection, with mitigation strategies for security teams.",
    tags: ["writing", "ai", "agentic-ai", "risk-management"],
    date: "2025-07-30"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Insider Sabotage: Logic Bomb Detection and Post-Termination Monitoring",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-when-trusted-hires-turn-rogue/",
    description: "Mitigate insider threats with AI. Learn how generative AI monitoring and enforcement exposed a rogue engineer's sabotage attempt.",
    tags: ["writing", "insider-threat", "sabotage", "ai"],
    date: "2025-06-17"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: AI Note-Taking Tools for Data Exfiltration",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-ai-note-taking-tools/",
    description: "Understand the risks of AI note-taking tools and discover methods for detecting data exfiltration to protect your data.",
    tags: ["writing", "ai", "data-exfiltration", "note-taking"],
    date: "2025-03-24"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: People's Republic of China - Volt Typhoon",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-peoples-republic-of-china-volt-typhoon/",
    description: "Detection queries and behavioral indicators for surfacing Volt Typhoon living-off-the-land activity, following the CISA joint advisory on the PRC state-sponsored actor.",
    tags: ["writing", "china", "nation-state", "insider-threat"],
    date: "2024-08-20"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: How to Detect Nation State Insider Threats",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-detecting-cyber-espionage/",
    description: "Learn insider risk detection strategies for nation-state cyber espionage. Secure your telecom network with proactive monitoring and employee training.",
    tags: ["writing", "espionage", "nation-state", "telecom"],
    date: "2025-02-11"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Defending Against a Persistent Exfiltration Vector – Unauthorized Printing",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-defending-against-unauthorized-printing/",
    description: "Defend your organization against data loss originating from the persistent threat of unauthorized printing.",
    tags: ["writing", "data-exfiltration", "physical-security"],
    date: "2024-11-26"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Detecting and Preventing Credential Misuse and Compromise",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-detecting-preventing-credential-misuse-and-compromise/",
    description: "This Insider Threat Advisory provides important detections and mitigations for detecting and preventing credential misuse.",
    tags: ["writing", "credentials", "insider-threat"],
    date: "2024-08-29"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Disrupting Foreign Interference",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-indicators-for-detecting-deterring-and-disrupting-foreign-interference/",
    description: "This DTEX Insider Threat Advisory provides indicators for detecting, deterring, and disrupting foreign interference.",
    tags: ["writing", "foreign-interference", "espionage"],
    date: "2024-08-24"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Mitigating Living off the Land Attacks Using Insider Risk Monitoring",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-mitigating-living-off-the-land-attacks-using-insider-risk-monitoring/",
    description: "DTEX i3 recommends organizations take the following steps and leverage insider risk monitoring to help prevent living-off-the-land attacks.",
    tags: ["writing", "living-off-the-land", "cloud-security"],
    date: "2024-08-24"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Detecting the Use of Multiple Identities",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-detecting-the-use-of-multiple-identities/",
    description: "This Threat Advisory covers detecting the use of multiple identities linking personal accounts on corporate devices.",
    tags: ["writing", "identity", "insider-threat"],
    date: "2024-08-20"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Insecure Web Apps Creating High Risk for Insider Abuse",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-insecure-web-apps-creating-high-risk-for-insider-abuse/",
    description: "DTEX i³ reveals insider risks in misconfigured web apps and shares steps to detect, mitigate, and prevent unauthorized access and data exposure.",
    tags: ["writing", "web-security", "vulnerabilities"],
    date: "2024-08-20"
  },
  {
    type: "writing",
    title: "i³ Threat Advisory: Identifying North Korean IT Workers: Key Threat Indicators",
    url: "https://www.dtex.ai/resources/i3-threat-advisory-inside-the-dprk/",
    description: "Uncover the key insider threat indicators for identifying North Korean IT workers in this DTEX Threat Advisory.",
    tags: ["writing", "dprk", "nation-state", "it-workers"],
    date: "2025-05-14"
  },
  {
    type: "youtube",
    title: "Insider Threat Awareness Course presented by Alex Desmond",
    url: "https://www.youtube.com/watch?v=WACS73iRlSo",
    description: "Introduction to the free Insider Threat Awareness Training course.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Course Introduction & Learning Objectives - Module 1",
    url: "https://www.youtube.com/watch?v=sKMyeuY6kPM",
    description: "Course introduction and learning objectives for Insider Threat Awareness Training.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Defining Insiders & Insider Threats - Module 2",
    url: "https://www.youtube.com/watch?v=aCSuxzqeNj8",
    description: "Defines what insiders and insider threats actually are.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Types of Insider Threats - Module 3",
    url: "https://www.youtube.com/watch?v=gNpnT4TUWcE",
    description: "Overview of the different types of insider threats.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Case Studies - Module 4",
    url: "https://www.youtube.com/watch?v=QelFSWzawWg",
    description: "Real-world case studies of documented insider threat incidents.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Motivations Behind Insider Incidents - Module 5",
    url: "https://www.youtube.com/watch?v=3Yyst0OrWnU",
    description: "What motivates insider incidents, including some surprising findings.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Unintentional Insider Threats - Module 6",
    url: "https://www.youtube.com/watch?v=_dT00mGeVHQ",
    description: "Covers negligent and unintentional insider threats.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Impacts & Consequences - Module 7",
    url: "https://www.youtube.com/watch?v=dlyFzu86ki4",
    description: "The impacts and consequences of insider threat incidents.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Protecting & Reportin - Module 8",
    url: "https://www.youtube.com/watch?v=GApY18wDjqw",
    description: "How to protect your organisation and report suspicious behavior.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Scenario-Based Guidance - Module 9",
    url: "https://www.youtube.com/watch?v=JupXDlFTMjI",
    description: "Scenario-based guidance for spotting and responding to insider threats.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Summary, Final Thoughts & Thank You - Module 10",
    url: "https://www.youtube.com/watch?v=PO5WF4lrQ-4",
    description: "Course summary, final thoughts, and thank you.",
    tags: ["course", "insider-threat", "training"],
    date: "2026-06-21"
  },
  {
    type: "youtube",
    title: "Train with Me, Saturday 13 Sept",
    url: "https://www.youtube.com/watch?v=1osDZl31XPM",
    description: "Live training session, filmed for anyone who wants to train along.",
    tags: ["fitness", "training"],
    date: "2025-10-12"
  },
  {
    type: "youtube",
    title: "250912 - Train with me",
    url: "https://www.youtube.com/watch?v=uRcE29Yrdw4",
    description: "Training session log.",
    tags: ["fitness", "training"],
    date: "2025-10-12"
  },
  {
    type: "youtube",
    title: "The Complete Coach Strategy: Implement Yourself for Free",
    url: "https://www.youtube.com/watch?v=TEljRGVy_tw",
    description: "A free, self-implementable coaching strategy breakdown.",
    tags: ["fitness", "coaching"],
    date: "2025-08-12"
  },
  {
    type: "youtube",
    title: "Bulking Cycle - Chest Day - 250506",
    url: "https://www.youtube.com/watch?v=MmYLeBRT4HM",
    description: "Chest day session during a bulking cycle.",
    tags: ["fitness", "training"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "🚨 Security Pro? Desk-Bound & Feeling Tight? 🚨",
    url: "https://www.youtube.com/watch?v=GmWOqrbOen8",
    description: "Fitness tips aimed at desk-bound security professionals.",
    tags: ["fitness", "cybersecurity"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Client Testimonial: Mik James post 8-week challenge",
    url: "https://www.youtube.com/watch?v=xoBZDh3SmlQ",
    description: "Client testimonial after completing an 8-week challenge.",
    tags: ["fitness", "testimonial"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Taking your own measurements",
    url: "https://www.youtube.com/watch?v=WIkalsHFFFg",
    description: "How-to on taking your own body measurements.",
    tags: ["fitness", "how-to"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "4 days out - Last checkin before the shoot",
    url: "https://www.youtube.com/watch?v=kwr9XgTvvss",
    description: "Final check-in before a photoshoot, 4 days out.",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "16 Days Out",
    url: "https://www.youtube.com/watch?v=_2zr2Cf7FEM",
    description: "Physique prep log, 16 days out.",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "23 Days Out",
    url: "https://www.youtube.com/watch?v=ZWP6H5MFX9s",
    description: "Physique prep log, 23 days out.",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "29 Days Out",
    url: "https://www.youtube.com/watch?v=i0U_CVdfNs8",
    description: "Physique prep log, 29 days out.",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "38 Days Out",
    url: "https://www.youtube.com/watch?v=22qytINrp-U",
    description: "Physique prep log, 38 days out.",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "39 Days Out  - Weigh In Day",
    url: "https://www.youtube.com/watch?v=Zm48Dr0rvM8",
    description: "Weigh-in day, 39 days out from a shoot/competition.",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "48 Days Out - Upper",
    url: "https://www.youtube.com/watch?v=kJHtAv83xyg",
    description: "Upper body training session, 48 days out.",
    tags: ["fitness", "prep", "training"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "8 weeks out part 2",
    url: "https://www.youtube.com/watch?v=JPbvXAuG-rc",
    description: "Physique prep log, 8 weeks out (part 2).",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "8 weeks out part 1",
    url: "https://www.youtube.com/watch?v=lTh8hCNHCrU",
    description: "Physique prep log, 8 weeks out (part 1).",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "9 Weeks out part 1",
    url: "https://www.youtube.com/watch?v=fecw3aFHpNs",
    description: "Physique prep log, 9 weeks out (part 1).",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "9 Weeks out part 2",
    url: "https://www.youtube.com/watch?v=vbhluzqQGIQ",
    description: "Physique prep log, 9 weeks out (part 2).",
    tags: ["fitness", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "74 Days Out - Chest/bi/tris",
    url: "https://www.youtube.com/watch?v=koCkrBtW3CM",
    description: "Chest, biceps, and triceps session, 74 days out.",
    tags: ["fitness", "prep", "training"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Thunder Challenge - Rogue 2024",
    url: "https://www.youtube.com/watch?v=eCXLrLLhT7I",
    description: "Competing in the Thunder Challenge at Rogue, 2024.",
    tags: ["fitness", "competition"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "80 days out - targeted chest",
    url: "https://www.youtube.com/watch?v=sjDW3Cl-RS0",
    description: "Targeted chest session, 80 days out.",
    tags: ["fitness", "prep", "training"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "85 days out - legs and abs",
    url: "https://www.youtube.com/watch?v=b7zReP978E0",
    description: "Legs and abs session, 85 days out.",
    tags: ["fitness", "prep", "training"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "231229 - Everyday Grass & 2L Water Mix - 85 Days Out",
    url: "https://www.youtube.com/watch?v=fkFJ4451jP0",
    description: "Daily nutrition/diet log, 85 days out.",
    tags: ["fitness", "nutrition", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "231228 - Current Cals and Diet - 86 Days Out",
    url: "https://www.youtube.com/watch?v=cwDXsqb3d5o",
    description: "Current calories and diet breakdown, 86 days out.",
    tags: ["fitness", "nutrition", "prep"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "A Day in the Life of a Principal Detection Engineer",
    url: "https://www.youtube.com/watch?v=5d6GZBn8SBM",
    description: "A look at day-to-day work as a Principal Detection Engineer.",
    tags: ["cybersecurity", "career", "detection-engineering"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "The Art of Career Planning: Building Specializations for Success",
    url: "https://www.youtube.com/watch?v=arzFZCaw6uw",
    description: "How to plan a cybersecurity career and build specializations.",
    tags: ["cybersecurity", "career"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "The Challenges of Sanitizing Electronic Equipment in the Operating Room",
    url: "https://www.youtube.com/watch?v=iC3svWQIy1M",
    description: "The security and sanitization challenges of electronic equipment in operating rooms.",
    tags: ["cybersecurity", "healthcare"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Networking Tips for Introverts in the IT Industry",
    url: "https://www.youtube.com/watch?v=uCfc5qMQs6U",
    description: "Networking advice for introverts working in IT.",
    tags: ["cybersecurity", "career"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Networking Tips for Introverts in the IT Industry",
    url: "https://www.youtube.com/watch?v=-oO7pmHxRPI",
    description: "Networking advice for introverts working in IT.",
    tags: ["cybersecurity", "career"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Master's Degree in Cyber Security: My Experience and Insights",
    url: "https://www.youtube.com/watch?v=se9r-Ooe3Js",
    description: "Personal experience and insights from completing a Master's in Cyber Security.",
    tags: ["cybersecurity", "career", "education"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "From IT to Cybersecurity: My Journey and Tips for Success",
    url: "https://www.youtube.com/watch?v=3r00XY-15T8",
    description: "Personal journey moving from IT into cybersecurity, with tips for success.",
    tags: ["cybersecurity", "career"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Unlocking Business Success in the Middle East: Strategies and Cyber Threats",
    url: "https://www.youtube.com/watch?v=BJZG0YEClgE",
    description: "Business strategy and cyber threat landscape in the Middle East.",
    tags: ["cybersecurity", "threat-intel"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Are Certifications Still Required for Entry-Level Jobs?",
    url: "https://www.youtube.com/watch?v=glKhYZeWPl8",
    description: "Whether certifications are still necessary for entry-level cybersecurity jobs.",
    tags: ["cybersecurity", "career", "certifications"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "A Day in the Life of a Big 4 Director | Cybersecurity, Consulting, and Chaos",
    url: "https://www.youtube.com/watch?v=cxSlyJyiUKs",
    description: "A look at day-to-day work as a Big 4 cybersecurity consulting director.",
    tags: ["cybersecurity", "career", "consulting"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Unlocking Career Opportunities: Transferring Skills to a New Industry",
    url: "https://www.youtube.com/watch?v=CHAWDyc5h_U",
    description: "How to transfer existing skills into a cybersecurity career.",
    tags: ["cybersecurity", "career"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Unwind and Disconnect: Tips for Finding Personal Time and Relaxation",
    url: "https://www.youtube.com/watch?v=5DKV61FMme8",
    description: "Tips for finding personal time and avoiding burnout in a demanding career.",
    tags: ["cybersecurity", "wellbeing", "career"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "How to Build a Successful Mentoring Relationship",
    url: "https://www.youtube.com/watch?v=8TtTp6QtjOA",
    description: "How to build an effective mentoring relationship in cybersecurity.",
    tags: ["cybersecurity", "career", "mentoring"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Unlocking Career Success: Lessons and Mentorship for Cyber Professionals",
    url: "https://www.youtube.com/watch?v=7T6tvoSMUOs",
    description: "Lessons on mentorship and career success for cyber professionals.",
    tags: ["cybersecurity", "career", "mentoring"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "How Community Service and Networking Can Help Grow Your Business",
    url: "https://www.youtube.com/watch?v=lxIC7FyjRew",
    description: "How community service and networking can help grow a business or career.",
    tags: ["cybersecurity", "career", "networking"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Cracking the Code: JavaScript Accessibility for Web Developers",
    url: "https://www.youtube.com/watch?v=9ulk0bY5yh0",
    description: "JavaScript accessibility considerations for web developers.",
    tags: ["cybersecurity", "web-dev"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Demystifying IP Addresses: A Beginner's Guide to Understanding and Utilizing IP Addresses",
    url: "https://www.youtube.com/watch?v=BJrO9j8AxlI",
    description: "A beginner's guide to understanding and using IP addresses.",
    tags: ["cybersecurity", "networking", "fundamentals"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "How to Maximize Your Security Stack for Ultimate Protection",
    url: "https://www.youtube.com/watch?v=6kwopx1gc7o",
    description: "How to get the most protection out of your security stack.",
    tags: ["cybersecurity", "defense"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Unlocking Success in Consulting: Navigating Frameworks and Client Confusion",
    url: "https://www.youtube.com/watch?v=sSxNIe2sago",
    description: "Navigating security frameworks and client confusion in consulting.",
    tags: ["cybersecurity", "consulting"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Mastering Networking Fundamentals: The Ultimate Guide to Subnetting and More",
    url: "https://www.youtube.com/watch?v=kUVw5G5cXQI",
    description: "A guide to subnetting and other core networking fundamentals.",
    tags: ["cybersecurity", "networking", "fundamentals"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "The Power of Customer Gratitude: Impactful Incidents and Happy IT Admins",
    url: "https://www.youtube.com/watch?v=xVyFwd4E29s",
    description: "How customer gratitude shows up around impactful incident response work.",
    tags: ["cybersecurity", "incident-response"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "The Art of Balancing Internal and External Incident Response Teams",
    url: "https://www.youtube.com/watch?v=8yY1j52Mgw4",
    description: "Balancing internal and external incident response teams.",
    tags: ["cybersecurity", "incident-response"],
    date: "2025-07-12"
  },
  {
    type: "youtube",
    title: "Building Practical Skills: Learning Trade and DIY Tips on YouTube",
    url: "https://www.youtube.com/watch?v=f13AIno9cKE",
    description: "Using YouTube to learn practical trade and DIY skills.",
    tags: ["cybersecurity", "career"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "The Importance of Vendor Training and Certifications in the IT Industry",
    url: "https://www.youtube.com/watch?v=P45haEfGIdQ",
    description: "Why vendor training and certifications matter in the IT industry.",
    tags: ["cybersecurity", "career", "certifications"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "The Impact of Air Force Cyber Training Pipeline on Skill Development and Networking",
    url: "https://www.youtube.com/watch?v=gwtF1FLvyAo",
    description: "How the Air Force cyber training pipeline shapes skills and networking.",
    tags: ["cybersecurity", "career", "military"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Achieving Personal and Professional Goals: Finding Balance and Growth",
    url: "https://www.youtube.com/watch?v=f_NavDyFQH4",
    description: "Finding balance while growing personally and professionally in cyber.",
    tags: ["cybersecurity", "career", "wellbeing"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Creating Stunning Snapshot Report Cards with Grafana",
    url: "https://www.youtube.com/watch?v=wLBbc5Pvse4",
    description: "Building snapshot report cards using Grafana.",
    tags: ["cybersecurity", "reporting", "tools"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "A Day in the Life of a Threat Analyst: Managing Incidents and Building Teams",
    url: "https://www.youtube.com/watch?v=I781oeSwwaY",
    description: "A look at day-to-day work as a threat analyst.",
    tags: ["cybersecurity", "incident-response", "career"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "From Architecture to Technology: My Journey of Innovation and Data",
    url: "https://www.youtube.com/watch?v=73ZA2Y0ChyM",
    description: "Personal journey moving from architecture into technology and data.",
    tags: ["cybersecurity", "career"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Mastering Soft Skills: Your Path to Professional Success",
    url: "https://www.youtube.com/watch?v=uXhRpf_35Bw",
    description: "Soft skills that support professional success in cybersecurity.",
    tags: ["cybersecurity", "career"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Google Sheets C2 Cloud living off the land",
    url: "https://www.youtube.com/watch?v=MhQ9LJvto8w",
    description: "Using Google Sheets as a C2 channel — a living-off-the-land technique.",
    tags: ["cybersecurity", "living-off-the-land", "technical"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Hardly Adequate CTF Walkthrough by Desi and Leo",
    url: "https://www.youtube.com/watch?v=5wA0hUwEcZw",
    description: "CTF walkthrough recorded with a co-host.",
    tags: ["cybersecurity", "ctf"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Desi Presents at AdelaideSEC 2023 SANS Dragos ICS CTF",
    url: "https://www.youtube.com/watch?v=jDD-fx88lRE",
    description: "Conference talk presenting at the AdelaideSEC 2023 SANS Dragos ICS CTF.",
    tags: ["cybersecurity", "ics", "ctf", "conference"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Ransomware-as-a-Service and LockBit 3.0 Builder",
    url: "https://www.youtube.com/watch?v=lVM60PVFjt8",
    description: "Breakdown of ransomware-as-a-service and the LockBit 3.0 builder.",
    tags: ["cybersecurity", "ransomware"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "CTFd set up in AWS + nginx + CloudFlare pt. 4 CloudFlare Subdomain Config",
    url: "https://www.youtube.com/watch?v=r0HiJsk0hK4",
    description: "Part 4: configuring a CloudFlare subdomain for a self-hosted CTFd instance.",
    tags: ["cybersecurity", "ctf", "cloud", "tutorial"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "BSides Brisbane 2023: Tabletop Exercises Off the Table!",
    url: "https://www.youtube.com/watch?v=bAeDjM8PvrE",
    description: "Conference talk on tabletop exercises from BSides Brisbane 2023.",
    tags: ["cybersecurity", "conference", "incident-response"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "CTFd set up in AWS + nginx + CloudFlare pt. 3 CTFd GUI Walkthrough",
    url: "https://www.youtube.com/watch?v=E15H9hM276U",
    description: "Part 3: walking through the CTFd GUI setup.",
    tags: ["cybersecurity", "ctf", "cloud", "tutorial"],
    date: "2023-07-12"
  },
  {
    type: "youtube",
    title: "CTFd set up in AWS + nginx + CloudFlare pt. 2 CTFd Install (nginx)",
    url: "https://www.youtube.com/watch?v=yaG0ZzRCNlc",
    description: "Part 2: installing CTFd with nginx.",
    tags: ["cybersecurity", "ctf", "cloud", "tutorial"],
    date: "2023-07-12"
  },
  {
    type: "youtube",
    title: "CTFd set up in AWS + nginx + CloudFlare pt. 1 AWS EC2 Ubuntu Instance",
    url: "https://www.youtube.com/watch?v=rWKZW3R9RAI",
    description: "Part 1: setting up an AWS EC2 Ubuntu instance for CTFd.",
    tags: ["cybersecurity", "ctf", "cloud", "tutorial"],
    date: "2023-07-12"
  },
  {
    type: "youtube",
    title: "Cybersecurity for Critical Urban Infrastructure Review",
    url: "https://www.youtube.com/watch?v=oV8fFw5iV9o",
    description: "Review of cybersecurity considerations for critical urban infrastructure.",
    tags: ["cybersecurity", "ics"],
    date: "2023-07-12"
  },
  {
    type: "youtube",
    title: "SANS & GIAC in review with ICS515",
    url: "https://www.youtube.com/watch?v=CO9m__ZGEOE",
    description: "Review of the SANS ICS515 course and GIAC certification.",
    tags: ["cybersecurity", "ics", "certifications"],
    date: "2022-07-12"
  },
  {
    type: "youtube",
    title: "Diskcryptor cracking hashes tutorial",
    url: "https://www.youtube.com/watch?v=Vey-ll3LM3o",
    description: "Tutorial on cracking Diskcryptor hashes.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2021-07-12"
  },
  {
    type: "youtube",
    title: "Beginner Linux Forensics: We think we're owned...",
    url: "https://www.youtube.com/watch?v=aE3lBIn3MlQ",
    description: "Beginner-friendly walkthrough of Linux forensics on a suspected compromise.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2020-07-12"
  },
  {
    type: "youtube",
    title: "Step 5 - Compromising Windows 10",
    url: "https://www.youtube.com/watch?v=1oNCEVtlxMw",
    description: "Part of a forensics lab series: compromising a Windows 10 VM.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2020-07-12"
  },
  {
    type: "youtube",
    title: "Step 6 - Pulling and parsing the MFT to prove execution",
    url: "https://www.youtube.com/watch?v=rGIi0njggmI",
    description: "Part of a forensics lab series: parsing the MFT to prove execution.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2020-07-12"
  },
  {
    type: "youtube",
    title: "Step 4 - Network Connectivity",
    url: "https://www.youtube.com/watch?v=7IlXPTYVa7Q",
    description: "Part of a forensics lab series: setting up network connectivity.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2020-07-12"
  },
  {
    type: "youtube",
    title: "Step 3 - Installing Windows 10 VM",
    url: "https://www.youtube.com/watch?v=Eruj6GUdcPo",
    description: "Part of a forensics lab series: installing a Windows 10 VM.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2020-07-12"
  },
  {
    type: "youtube",
    title: "Step 2 - Installing Kail Linux",
    url: "https://www.youtube.com/watch?v=xWwOlDVZcQ4",
    description: "Part of a forensics lab series: installing Kali Linux.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2020-07-12"
  },
  {
    type: "youtube",
    title: "Step 1 - Installing VMWare Workstation Player",
    url: "https://www.youtube.com/watch?v=SN0I2Vk_pW8",
    description: "Part of a forensics lab series: installing VMware Workstation Player.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2020-07-12"
  },
  {
    type: "youtube",
    title: "Prove an employee viewed inappropriate content",
    url: "https://www.youtube.com/watch?v=0oLy34oPzw0",
    description: "Forensics walkthrough proving an employee viewed inappropriate content.",
    tags: ["cybersecurity", "forensics", "tutorial"],
    date: "2020-07-12"
  },
  {
    type: "podcast",
    title: "S02E36 - Chat with Chris",
    url: "https://www.youtube.com/watch?v=YuZDCmAw8ls",
    description: "Guest chat with Chris on the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "guest-interview"],
    date: "2025-07-12"
  },
  {
    type: "podcast",
    title: "S02E35 - Chat with Julian",
    url: "https://www.youtube.com/watch?v=Aprv82MOzBI",
    description: "Guest chat with Julian on the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "guest-interview"],
    date: "2025-07-12"
  },
  {
    type: "podcast",
    title: "S02E30 - Chat with Craig Morris",
    url: "https://www.youtube.com/watch?v=KSn1SvlWKLk",
    description: "Guest chat with Craig Morris on the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "guest-interview"],
    date: "2025-07-12"
  },
  {
    type: "podcast",
    title: "S02E28 - Hardly a Week 30",
    url: "https://www.youtube.com/watch?v=kqpK6TP1-0s",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2025-07-12"
  },
  {
    type: "podcast",
    title: "S02E27 - Hardly a Week 29",
    url: "https://www.youtube.com/watch?v=ld4yuzIEHaw",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2025-07-12"
  },
  {
    type: "podcast",
    title: "S02E26 - Hardly a Week 28",
    url: "https://www.youtube.com/watch?v=5hqCnyNsTls",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E25 - Hardly a Week 27",
    url: "https://www.youtube.com/watch?v=94YIs6av5o0",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E24 - Chat with Tom Marsden",
    url: "https://www.youtube.com/watch?v=a23O5_AR2so",
    description: "Guest chat with Tom Marsden on the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "guest-interview"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E23 - Hardly a Week 26",
    url: "https://www.youtube.com/watch?v=9ln0C4Mtu4w",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "Catching up with Andrew Jaeger",
    url: "https://www.youtube.com/watch?v=kf0dJBJe68w",
    description: "Guest chat catching up with Andrew Jaeger.",
    tags: ["hardly-adequate", "podcast", "guest-interview"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E21 - Bruce chats with Hardly Adequate",
    url: "https://www.youtube.com/watch?v=9Nw_3G6zcIA",
    description: "Guest chat with Bruce on the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "guest-interview"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E20 - Hardly a Week 17 April 29, 2024",
    url: "https://www.youtube.com/watch?v=d1UJpAbq7Dk",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E19 - Hardly a Week 16, 22 April 2024",
    url: "https://www.youtube.com/watch?v=VIqXgbh66ls",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E18 - Hardly a Week 15, April 15 2024",
    url: "https://www.youtube.com/watch?v=_A3DNsHhMrs",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E17 - Hardly a Week 14 April 8, 2024",
    url: "https://www.youtube.com/watch?v=7BYGV6ODQbM",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "Desi and Jacob Latonis talk 100 Days of Yara",
    url: "https://www.youtube.com/watch?v=dVDKwDA-bqQ",
    description: "Guest chat with Jacob Latonis about the 100 Days of Yara project.",
    tags: ["hardly-adequate", "podcast", "guest-interview"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "Hardly a Week 12 March 25, 2024",
    url: "https://www.youtube.com/watch?v=ml_ICMJxVw4",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E14 - Hardly a Week 11",
    url: "https://www.youtube.com/watch?v=Rf5rvqYApXQ",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E13 - Hardly a Week 10 March 11, 2024",
    url: "https://www.youtube.com/watch?v=JIvfuoMAa-U",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "Hardly a Week 9 March 4, 2024",
    url: "https://www.youtube.com/watch?v=73fdVoFQDkw",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E10 - Hardly a Week 8",
    url: "https://www.youtube.com/watch?v=NIeSWTjAUrI",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E09 - Hardly a Week 7",
    url: "https://www.youtube.com/watch?v=0QswtgRcmUk",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E08 - Hardly a Week 6",
    url: "https://www.youtube.com/watch?v=IYRCKOXUOTc",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "S02E07 - Hardly a Week 5",
    url: "https://www.youtube.com/watch?v=xKR5cRIDll0",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "podcast",
    title: "Hardly a Week 4 January 29, 2024",
    url: "https://www.youtube.com/watch?v=5KMS0XTFX9U",
    description: "Weekly update episode of the Hardly Adequate podcast.",
    tags: ["hardly-adequate", "podcast", "weekly-update"],
    date: "2024-07-12"
  },
  {
    type: "youtube",
    title: "Fitness Shorts (workout clip library)",
    url: "https://www.youtube.com/@desiofalltrades/shorts",
    description: "A library of short exercise-demo clips — browse the full collection on the channel's Shorts tab.",
    tags: ["fitness", "shorts"]
  },
  {
    type: "podcast",
    title: "AI-Powered License Plate Reading With Amped DeepPlate",
    url: "https://www.forensicfocus.com/podcast/ai-powered-license-plate-reading-with-amped-deepplate/",
    description: "Marco from Amped Software joins to talk about AI-powered license plate reading with DeepPlate.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2024-04-30"
  },
  {
    type: "podcast",
    title: "Cyber Scandals And When (Not) To Trust Computers",
    url: "https://www.forensicfocus.com/podcast/cyber-scandals-and-when-not-to-trust-computers/",
    description: "Si and Desi discuss cyber scandals and when (not) to trust computers.",
    tags: ["forensic-focus", "podcast"],
    date: "2024-04-25"
  },
  {
    type: "podcast",
    title: "Hacking Your Future: Education Choices For A Cybersecurity Career",
    url: "https://www.forensicfocus.com/podcast/hacking-your-future-education-choices-for-a-cybersecurity-career/",
    description: "Si and Desi talk to Gavin Prue and Selim Kang about non-traditional paths into cybersecurity careers.",
    tags: ["forensic-focus", "podcast", "guest-interview", "career"],
    date: "2023-11-29"
  },
  {
    type: "podcast",
    title: "Becoming An Amped FIVE Certified Examiner (AFCE)",
    url: "https://www.forensicfocus.com/podcast/the-amped-five-certified-examiner-afce/",
    description: "Si and Desi interview Emi Polito from Amped about the new Amped FIVE Certified Examiner (AFCE) certification.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-12-01"
  },
  {
    type: "podcast",
    title: "Protecting Victims From Stalkerware And Tech-Enabled Abuse",
    url: "https://www.forensicfocus.com/podcast/protecting-victims-from-stalkerware-and-tech-enabled-abuse/",
    description: "Si and Desi talk to Eva Galperin (EFF) and Emma Pickering (Refuge) about stalkerware and tech-enabled abuse.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-11-28"
  },
  {
    type: "podcast",
    title: "2023 E-Crime Symposium: Cutting Edge Topics In Digital Forensics",
    url: "https://www.forensicfocus.com/podcast/2023-e-crime-symposium-cutting-edge-topics-in-digital-forensics/",
    description: "A preview of the 2023 E-Crime Symposium, covering cutting-edge topics in digital forensics.",
    tags: ["forensic-focus", "podcast", "conference"],
    date: "2023-10-11"
  },
  {
    type: "podcast",
    title: "Programming Languages, Flipper And Gaming",
    url: "https://www.forensicfocus.com/podcast/programming-languages-flipper-and-gaming/",
    description: "Si and Desi have a casual catch-up covering programming languages, the Flipper Zero, and gaming.",
    tags: ["forensic-focus", "podcast"],
    date: "2023-05-25"
  },
  {
    type: "podcast",
    title: "Preventing Data Leaks With Git Guardian",
    url: "https://www.forensicfocus.com/podcast/preventing-data-leaks-with-git-guardian/",
    description: "Desi talks with Mackenzie Jackson from GitGuardian about preventing data leaks.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-05-03"
  },
  {
    type: "podcast",
    title: "Si and Desi Holiday Special 2022",
    url: "https://www.forensicfocus.com/podcast/si-and-desi-holiday-special-2022/",
    description: "Si and Desi's 2022 end-of-year holiday special.",
    tags: ["forensic-focus", "podcast", "holiday-special"],
    date: "2022-12-16"
  },
  {
    type: "podcast",
    title: "HTCIA, DFRWS-APAC, and the DFIR Events Industry: A Critique",
    url: "https://www.forensicfocus.com/podcast/htcia-dfrws-apac-and-the-dfir-events-industry-a-critique/",
    description: "A critique of the DFIR events industry, including HTCIA and DFRWS-APAC.",
    tags: ["forensic-focus", "podcast", "conference"],
    date: "2022-11-14"
  },
  {
    type: "podcast",
    title: "The Historic View of Financial Cybercrime",
    url: "https://www.forensicfocus.com/podcast/the-historic-view-of-financial-cybercrime/",
    description: "Desi and Si talk to Alex Tilley from Secureworks' counter threat unit about the history of financial cybercrime.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2022-10-31"
  },
  {
    type: "podcast",
    title: "In Which Si and Desi Are Left Unsupervised",
    url: "https://www.forensicfocus.com/podcast/in-which-si-and-desi-are-left-unsupervised/",
    description: "Si and Desi run the show unsupervised for an episode.",
    tags: ["forensic-focus", "podcast"],
    date: "2022-10-04"
  },
  {
    type: "podcast",
    title: "The Great Resignation in DFIR",
    url: "https://www.forensicfocus.com/podcast/the-great-resignation-in-dfir/",
    description: "Co-hosts Si and Alex Desmond join Christa Miller to discuss the Great Resignation in DFIR.",
    tags: ["forensic-focus", "podcast", "career"],
    date: "2022-09-19"
  },
  {
    type: "podcast",
    title: "How Cado Security Is Revolutionizing Forensics And Incident Response For The Cloud",
    url: "https://www.forensicfocus.com/podcast/how-cado-security-is-revolutionizing-forensics-and-incident-response-for-the-cloud/",
    description: "Alex Desmond talks with Chris Doman from Cado Security about cloud forensics and incident response.",
    tags: ["forensic-focus", "podcast", "guest-interview", "cloud"],
    date: "2024-03-11"
  },
  {
    type: "podcast",
    title: "Picture Perfect: Using Screenshots And Screen Recording In Mobile Device Investigations",
    url: "https://www.forensicfocus.com/podcast/picture-perfect-using-screenshots-and-screen-recording-in-mobile-device-investigations/",
    description: "Si and Desi interview Rich Frawley from ADF Solutions about screenshots and screen recording in mobile investigations.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-12-13"
  },
  {
    type: "podcast",
    title: "The Power Of Digital Forensics: How ADF Solutions Is Revolutionizing The Digital Forensics Industry",
    url: "https://www.forensicfocus.com/podcast/the-power-of-digital-forensics-how-adf-solutions-is-revolutionizing-the-digital-forensics-industry/",
    description: "Si and Desi talk to Brittany and Ailsa from ADF Solutions about challenges in digital forensics.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-11-30"
  },
  {
    type: "podcast",
    title: "Cell Phone Tracking And SS7 – Hacking Security Vulnerabilities To Save Lives",
    url: "https://www.forensicfocus.com/podcast/cell-phone-tracking-and-ss7-hacking-security-vulnerabilities-to-save-lives/",
    description: "Desi hosts a conversation on cell phone tracking and SS7 vulnerabilities used to save lives.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-09-25"
  },
  {
    type: "podcast",
    title: "18th International Conference On Cyber Warfare And Security (ICCWS 2023)",
    url: "https://www.forensicfocus.com/podcast/18th-international-conference-on-cyber-warfare-and-security-iccws-2023/",
    description: "Desi joins remotely from the other side of the world to cover ICCWS 2023.",
    tags: ["forensic-focus", "podcast", "conference"],
    date: "2023-04-19"
  },
  {
    type: "podcast",
    title: "AI In CSAM Investigations And The Role Of Digital Evidence In Criminal Cases",
    url: "https://www.forensicfocus.com/podcast/ai-in-csam-investigations-and-the-role-of-digital-evidence-in-criminal-cases/",
    description: "Si and Desi discuss AI in CSAM investigations and the role of digital evidence in criminal cases.",
    tags: ["forensic-focus", "podcast"],
    date: "2023-03-22"
  },
  {
    type: "podcast",
    title: "Deepfake Videos And Altered Images – A Challenge For Digital Forensics?",
    url: "https://www.forensicfocus.com/podcast/deepfake-videos-and-altered-images-a-challenge-for-digital-forensics/",
    description: "Si and Desi discuss deepfake videos and altered images as a challenge for digital forensics.",
    tags: ["forensic-focus", "podcast"],
    date: "2023-02-14"
  },
  {
    type: "podcast",
    title: "Magnet Forensics' Matt Suiche on the Rise of e-Crime and Info Stealers",
    url: "https://www.forensicfocus.com/podcast/magnet-forensics-matt-suiche-on-the-rise-of-e-crime-and-info-stealers/",
    description: "Desi and Si talk to Matt Suiche from Magnet Forensics about the rise of e-crime and info stealers.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-01-30"
  },
  {
    type: "podcast",
    title: "An In-Depth Conversation on Digital Forensics Training and Certification",
    url: "https://www.forensicfocus.com/podcast/an-in-depth-conversation-on-digital-forensics-training-and-certification/",
    description: "Si and Alex have a freeform conversation on digital forensics training and certification.",
    tags: ["forensic-focus", "podcast", "career"],
    date: "2022-10-17"
  },
  {
    type: "podcast",
    title: "University of Adelaide's Dr. Matthew Sorell on Evidentiary Health Data at DFRWS-APAC 2022",
    url: "https://www.forensicfocus.com/podcast/university-of-adelaides-dr-matthew-sorell-on-evidentiary-health-data-at-dfrws-apac-2022/",
    description: "Desi, Si, and Christa welcome Dr. Matthew Sorell to discuss evidentiary health data at DFRWS-APAC 2022.",
    tags: ["forensic-focus", "podcast", "guest-interview", "conference"],
    date: "2022-09-13"
  },
  {
    type: "podcast",
    title: "Introducing 2 Forensic Focus Podcast Co-Hosts: Simon Biles and Alex Desmond",
    url: "https://www.forensicfocus.com/podcast/introducing-2-forensic-focus-podcast-co-hosts-simon-biles-and-alex-desmond/",
    description: "The episode introducing Simon Biles and Alex Desmond as new co-hosts of the Forensic Focus Podcast.",
    tags: ["forensic-focus", "podcast", "announcement"],
    date: "2022-07-11"
  },
  {
    type: "podcast",
    title: "DFIR In 2025 – AI, Smart Devices And Investigator Well-Being",
    url: "https://www.forensicfocus.com/podcast/dfir-in-2025-ai-smart-devices-and-investigator-well-being/",
    description: "Si and Desi explore AI-driven threats, smart device risks, and investigator well-being.",
    tags: ["forensic-focus", "podcast", "year-in-review"],
    date: "2025-02-11"
  },
  {
    type: "podcast",
    title: "DFIR In 2026 – AI 'Button Pusher' Forensics, Writing Courtroom Reports, Audio Breakthroughs And The Leica Geosystems Conference",
    url: "https://www.forensicfocus.com/podcast/dfir-in-2026-ai-button-pusher-forensics-writing-courtroom-reports-audio-breakthroughs-and-the-leica-geosystems-conference/",
    description: "Si and Desi cover AI 'button pusher' forensics, writing courtroom reports, audio breakthroughs, and the Leica Geosystems conference.",
    tags: ["forensic-focus", "podcast", "year-in-review"],
    date: "2026-05-07"
  },
  {
    type: "podcast",
    title: "Si And Desi's Holiday Special 2025",
    url: "https://www.forensicfocus.com/podcast/si-and-desis-holiday-special-2025/",
    description: "Si and Desi close out 2025 with their annual holiday special and year-in-review.",
    tags: ["forensic-focus", "podcast", "holiday-special"],
    date: "2025-12-22"
  },
  {
    type: "podcast",
    title: "On-Scene Digital Forensics: Winning Investigations Before The Lab",
    url: "https://www.forensicfocus.com/podcast/on-scene-digital-forensics-winning-investigations-before-the-lab/",
    description: "Stuart Hutchinson, VP of Sales at ADF Solutions, discusses on-scene digital forensics and empowering first responders during the golden hour of an investigation.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2026-05-19"
  },
  {
    type: "podcast",
    title: "Rob Fried On New Challenges In Digital Forensics",
    url: "https://www.forensicfocus.com/podcast/rob-fried-on-new-challenges-in-digital-forensics/",
    description: "Rob Fried joins to discuss the evolving challenges of forensic practice, AI in investigations, and his latest book.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2026-03-19"
  },
  {
    type: "podcast",
    title: "The Idaho Murders: From Behavioural Clues To AI's Role In Digital Forensics",
    url: "https://www.forensicfocus.com/podcast/the-idaho-murders-from-behavioural-clues-to-ais-role-in-digital-forensics/",
    description: "Heather and Jared Barnhart join to discuss Cellebrite's C2C User Summit, CTFs, and the role of digital evidence in the Idaho murders.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2025-12-11"
  },
  {
    type: "podcast",
    title: "Inside FTK Imager Pro: Vendor-Neutral Forensics, Smarter AI, And Exterro's Forensic Vision",
    url: "https://www.forensicfocus.com/podcast/inside-ftk-imager-pro-vendor-neutral-forensics-smarter-ai-and-exterros-forensic-vision/",
    description: "Exterro's Justin Tolman discusses FTK Imager Pro, AI's impact on DFIR, cloud vs on-prem, and tackling growing case backlogs.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2025-11-24"
  },
  {
    type: "podcast",
    title: "Oxygen Forensics On Smarter, Faster Remote DFIR Collections",
    url: "https://www.forensicfocus.com/podcast/oxygen-forensics-on-smarter-faster-remote-dfir-collections/",
    description: "Keith Lockhart from Oxygen Forensics discusses how remote digital evidence collection is changing DFIR workflows.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2025-12-18"
  },
  {
    type: "podcast",
    title: "Inside F3: Building Community And Sharing Knowledge In Digital Forensics",
    url: "https://www.forensicfocus.com/podcast/inside-f3-building-community-and-sharing-knowledge-in-digital-forensics/",
    description: "Gareth Davies, Chairman of F3 (First Forensic Forum), discusses how a grassroots, vendor-neutral community has helped shape digital forensics.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2025-10-20"
  },
  {
    type: "podcast",
    title: "AI Unpacked: Magnet Forensics' New Series On AI In DFIR",
    url: "https://www.forensicfocus.com/podcast/ai-unpacked-magnet-forensics-new-series-on-ai-in-dfir/",
    description: "Brandon Epstein delves into Magnet Forensics' new 'AI Unpacked' webinar series on AI in digital forensics.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2025-04-14"
  },
  {
    type: "podcast",
    title: "The DFIR Investigative Mindset: Brett Shavers On Thinking Like A Detective",
    url: "https://www.forensicfocus.com/podcast/the-dfir-investigative-mindset-brett-shavers-on-thinking-like-a-detective/",
    description: "Brett Shavers discusses the critical investigative mindset needed for effective digital forensics.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2025-04-24"
  },
  {
    type: "podcast",
    title: "Rob Fried's Award-Winning Approach To Digital Forensics",
    url: "https://www.forensicfocus.com/podcast/robert-frieds-award-winning-approach-to-digital-forensics/",
    description: "Award-winning investigator Robert Fried discusses his book 'Forensic Data Collection 2.0' and the evolving landscape of digital forensics.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2025-03-19"
  },
  {
    type: "podcast",
    title: "The Impact Of AI On Video Forensics: Insights From Amped Software",
    url: "https://www.forensicfocus.com/podcast/the-impact-of-ai-on-video-forensics-insights-from-amped-software/",
    description: "Martino Jerian, CEO of Amped Software, discusses AI's impact on video forensics.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2024-09-26"
  },
  {
    type: "podcast",
    title: "Is There A Mental Health Crisis In Digital Forensics?",
    url: "https://www.forensicfocus.com/podcast/is-there-a-mental-health-crisis-in-digital-forensics/",
    description: "Professor Sarah Morris returns to discuss mental health and well-being in the digital forensics field.",
    tags: ["forensic-focus", "podcast", "guest-interview", "wellbeing"],
    date: "2024-08-15"
  },
  {
    type: "podcast",
    title: "Combating The Rise Of AI-Generated Child Exploitation Material With Heather Barnhart",
    url: "https://www.forensicfocus.com/podcast/combating-the-rise-of-ai-generated-child-exploitation-material-with-heather-barnhart/",
    description: "Heather Barnhart from Cellebrite discusses the rise of AI-generated child exploitation material.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2024-07-23"
  },
  {
    type: "podcast",
    title: "Unlocking The Power Of Digital Forensics Training And Certification With Magnet Forensics",
    url: "https://www.forensicfocus.com/podcast/unlocking-the-power-of-digital-forensics-training-and-certification-with-magnet-forensics/",
    description: "Chuck Cobb from Magnet Forensics discusses training and certification in digital forensics.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2024-07-16"
  },
  {
    type: "podcast",
    title: "Kickstarting Your Digital Forensics Cybersecurity Career",
    url: "https://www.forensicfocus.com/podcast/kickstarting-your-digital-forensics-cybersecurity-career/",
    description: "Sophie Powell returns to discuss kickstarting a cybersecurity career in digital forensics.",
    tags: ["forensic-focus", "podcast", "guest-interview", "career"],
    date: "2024-03-28"
  },
  {
    type: "podcast",
    title: "How MSAB Is Managing The Digital Forensics Challenges Of Frontline Policing",
    url: "https://www.forensicfocus.com/podcast/how-msab-is-managing-the-digital-forensics-challenges-of-frontline-policing/",
    description: "A discussion of how MSAB is addressing the digital forensics challenges of frontline policing.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2024-02-21"
  },
  {
    type: "podcast",
    title: "Solving Digital Evidence Challenges With Oxygen Forensics",
    url: "https://www.forensicfocus.com/podcast/solving-digital-evidence-challenges-with-oxygen-forensics/",
    description: "Lee Reiber from Oxygen Forensics discusses solving digital evidence challenges.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-11-06"
  },
  {
    type: "podcast",
    title: "Teaching Digital Forensics With Professor Sarah Morris",
    url: "https://www.forensicfocus.com/podcast/teaching-digital-forensics-with-professor-sarah-morris/",
    description: "Professor Sarah Morris discusses teaching digital forensics in academia.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-09-06"
  },
  {
    type: "podcast",
    title: "Cellebrite's Solutions To Current eDiscovery Challenges",
    url: "https://www.forensicfocus.com/podcast/cellebrites-solutions-to-current-ediscovery-challenges/",
    description: "Monica from Cellebrite discusses SaaS, workflows, and current eDiscovery challenges.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-06-07"
  },
  {
    type: "podcast",
    title: "Digital Evidence Admissibility – Exploring Best Practice And Compliance Frameworks",
    url: "https://www.forensicfocus.com/podcast/digital-evidence-admissibility-exploring-best-practice-and-compliance-frameworks/",
    description: "Ryan and Robert discuss digital evidence admissibility, best practice, and compliance frameworks.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-06-12"
  },
  {
    type: "podcast",
    title: "European Interdisciplinary Cybersecurity Conference (EICC) 2023",
    url: "https://www.forensicfocus.com/podcast/european-interdisciplinary-cybersecurity-conference-eicc-2023/",
    description: "A live outside broadcast covering the European Interdisciplinary Cybersecurity Conference (EICC) 2023.",
    tags: ["forensic-focus", "podcast", "conference"],
    date: "2023-07-04"
  },
  {
    type: "podcast",
    title: "Digital Image Authenticity And Integrity With Amped Authenticate",
    url: "https://www.forensicfocus.com/podcast/digital-image-authenticity-and-integrity-with-amped-authenticate/",
    description: "Marco from Amped Software discusses digital image authenticity and integrity with Amped Authenticate.",
    tags: ["forensic-focus", "podcast", "guest-interview"],
    date: "2023-04-18"
  },
  {
    type: "press",
    title: "Your AI agent could become your biggest insider threat",
    url: "https://cyberscoop.com/ai-agent-insider-threat-cybersecurity-dtex/",
    description: "CyberScoop covers DTEX research on agentic AI insider risk, quoting Alex Desmond on how Claude Cowork workflows can shrink the exfiltration kill chain to minutes.",
    tags: ["press", "ai", "insider-threat", "cyberscoop"],
    date: "2026-06-04"
  },
  {
    type: "press",
    title: "AI Agents Increase Insider Data-Exfiltration Risk",
    url: "https://letsdatascience.com/news/ai-agents-increase-insider-data-exfiltration-risk-438e0936",
    description: "Let's Data Science covers the DTEX Claude Cowork research, quoting Alex Desmond on the exfiltration kill chain compressing from hours to as little as 10 to 30 minutes.",
    tags: ["press", "ai", "agentic-ai", "insider-threat"],
    date: "2026-06-04"
  },
  {
    type: "newsletter",
    title: "China's Chip Grab - Issue #22",
    url: "https://desi-5.kit.com/posts/china-s-chip-grab-issue-22-insider-threat-weekly",
    description: "Chip secrets smuggled on a hidden camera, Australia's mortgage-fraud web, a border lane sold to a cartel, and an AI agent handed the delete key.",
    tags: ["newsletter", "china", "fraud", "ai", "insider-threat"],
    date: "2026-09-13"
  },
  {
    type: "newsletter",
    title: "The Investigator Who Became the Thief - Issue #21",
    url: "https://desi-5.kit.com/posts/the-investigator-who-became-the-thief-issue-21-insider-threat-weekly",
    description: "An FBI agent stole crypto from his own case, a ChatGPT expert report backfired in court, and cops misused the cameras. Who watches the watchers?",
    tags: ["newsletter", "fraud", "ai", "insider-threat"],
    date: "2026-09-06"
  },
  {
    type: "newsletter",
    title: "The Insider Threat Division's Own Insider - Issue #20",
    url: "https://desi-5.kit.com/posts/the-insider-threat-division-s-own-insider-issue-20-insider-threat-weekly",
    description: "Amid the AI panic, the human insider had a big week: a DIA spy on a thumb drive, hijacked coding agents, and a fiduciary who robbed his clients.",
    tags: ["newsletter", "espionage", "ai", "fraud", "insider-threat"],
    date: "2026-08-30"
  },
  {
    type: "newsletter",
    title: "Managed Completely Independently - Issue #19",
    url: "https://desi-5.kit.com/posts/managed-completely-independently-issue-19-insider-threat-weekly",
    description: "Insider trading on prediction markets, the cutout that hides it, plus AI agents as your newest insider and a spy caught by a fake Slack channel.",
    tags: ["newsletter", "insider-threat", "fraud", "ai"],
    date: "2026-08-23"
  },
  {
    type: "newsletter",
    title: "We are close to letting machines decide who lives and who dies",
    url: "https://desi-5.kit.com/posts/we-are-close-to-letting-machines-decide-who-lives-and-who-dies",
    description: "We are close to letting machines pick and kill human targets with no human deciding. The ethics, the accountability gap, and why no treaty exists.",
    tags: ["newsletter", "ai", "ethics"],
    date: "2026-08-19"
  },
  {
    type: "newsletter",
    title: "AI can learn to deceive. That is not the same as AI waking up.",
    url: "https://desi-5.kit.com/posts/ai-can-learn-to-deceive-that-is-not-the-same-as-ai-waking-up",
    description: "Advanced AI has learned to deceive in the lab. No, it is not waking up, but here is why that still matters for anyone deploying these systems.",
    tags: ["newsletter", "ai", "ethics"],
    date: "2026-08-18"
  },
  {
    type: "newsletter",
    title: "The chatbot that always agrees: why AI built to please can turn dangerous",
    url: "https://desi-5.kit.com/posts/the-chatbot-that-always-agrees-why-ai-built-to-please-can-turn-dangerous",
    description: "AI chatbots are trained to agree with us. For people in crisis, that design can turn dangerous. Inside the cases, the research, and the law.",
    tags: ["newsletter", "ai", "ethics"],
    date: "2026-08-17"
  },
  {
    type: "newsletter",
    title: "Insider Threat Weekly - Issue #18 - The Insider Is Already at Every Layer",
    url: "https://desi-5.kit.com/posts/insider-threat-weekly-issue-18-the-insider-is-already-at-every-layer",
    description: "AI agents are insider threats at every layer. Plus a DPRK worker inside a US agency, and a postal inspector who robbed the victims he protected.",
    tags: ["newsletter", "ai", "agentic-ai", "dprk", "insider-threat"],
    date: "2026-08-16"
  },
  {
    type: "newsletter",
    title: "Insider Threat Weekly - Issue #17",
    url: "https://desi-5.kit.com/posts/insider-threat-weekly-issue-17",
    description: "This week: an AI agent runs its own supply chain attack, LG's OLED secrets leak to China, KPMG's whistleblower fallout, and a White House bet gone wrong.",
    tags: ["newsletter", "ai", "espionage", "insider-threat"],
    date: "2026-08-09"
  },
  {
    type: "newsletter",
    title: "Insider Threat Weekly - Issue #16",
    url: "https://desi-5.kit.com/posts/insider-threat-weekly-issue-16",
    description: "Anthropic's cybersecurity evals through an insider threat lens, including the capture-the-flag exercise Claude actually won.",
    tags: ["newsletter", "ai", "agentic-ai"],
    date: "2026-08-02"
  },
  {
    type: "newsletter",
    title: "The Defender's Guide to Agentic AI",
    url: "https://desi-5.kit.com/posts/the-defender-s-guide-to-agentic-ai",
    description: "A defender's framework for agentic AI risk: the Lethal Trifecta, insider-threat kill chains, and endpoint detection indicators.",
    tags: ["newsletter", "ai", "agentic-ai", "insider-threat"],
    date: "2026-08-01"
  },
  {
    type: "newsletter",
    title: "Agentic AI Hacking for Dummies",
    url: "https://desi-5.kit.com/posts/agentic-ai-hacking-for-dummies",
    description: "Real-world case: a Hermes AI agent breached a government ministry. Why insider threat teams need to be paying attention now.",
    tags: ["newsletter", "ai", "agentic-ai"],
    date: "2026-07-27"
  },
  {
    type: "newsletter",
    title: "Insider Threat Weekly - Issue #15",
    url: "https://desi-5.kit.com/posts/insider-threat-weekly-issue-15-1",
    description: "This week: North Korea's IT worker money trail, a TSMC leak indictment, AI chatbots handing over accounts, and the line between whistleblower and threat.",
    tags: ["newsletter", "dprk", "espionage", "ai"],
    date: "2026-07-26"
  },
];
