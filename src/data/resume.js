// Single source of truth for portfolio content, kept in sync with the PDF resume.

export const profile = {
  name: "Jhon Christian Bucio",
  title: "Tech Lead shipping AI agent products on AWS Serverless",
  tagline: "and running an AI-native engineering workflow with Claude Code",
  location: "Malaybalay, Bukidnon, Philippines",
  email: "jhonbucio2002@gmail.com",
  summary:
    "I build AI agents that small businesses actually use. As tech lead at Sagelyn AI, a multi-tenant AI marketing platform serving 80+ businesses, I lead five repositories (React/TypeScript and four Python services on AWS) and still ship code every week. The team runs on an AI-native workflow I built: Claude Code subagents that plan, implement, review and QA every feature.",
  links: {
    github: "https://github.com/Freaky376",
    linkedin: "https://www.linkedin.com/in/jhon-christian-bucio-199041295/",
    instagram: "https://www.instagram.com/janz_272",
  },
};

export const highlights = [
  { value: "80+", label: "businesses on the platform" },
  { value: "400+", label: "pull requests merged in 8 months" },
  { value: "270+", label: "security issues caught by my SOC 2 CI" },
  { value: "10+", label: "platform integrations" },
];

export const experience = [
  {
    company: "Sagelyn AI",
    url: "https://app.sagelyn.ai",
    period: "Mar 2026 – Present",
    about:
      "AI marketing platform: social publishing, content and video generation, CRM and AI agents.",
    roles: [
      {
        title: "Tech Lead",
        period: "Oct 2026 – Present",
        items: [
          {
            label: "AI-assisted engineering",
            text: "Built the team's Claude Code workflow: a ship-feature pipeline of planner, implementer, code-reviewer and QA subagents, custom skills that encode our AWS SAM, IAM, backend and Jira conventions, and a codebase knowledge graph connected through MCP to Jira, Slack, GitHub and the browser.",
          },
          {
            label: "Technical leadership",
            text: "Own architecture and delivery for the whole product: turn tickets into implementation plans with acceptance criteria, review pull requests across all five repositories, and run the weekly production release.",
          },
          {
            label: "SOC 2 compliance in CI",
            text: "Designed and rolled out a shared GitHub Actions compliance workflow to every repository (secret scanning, dependency audits, cfn-guard, Semgrep), surfacing 270+ vulnerable dependencies and 2 live API keys committed to git (both rotated) on its first run.",
          },
        ],
      },
      {
        title: "Full-Stack Developer",
        period: "Mar 2026 – Oct 2026",
        items: [
          {
            label: "AI Visibility Manager agent",
            text: "An AI employee that helps local businesses get recommended by ChatGPT, Perplexity and Google: visibility score with GoHighLevel lead capture, Google Business Profile fix cards, Reddit insights, and a hosted SEO blog.",
          },
          {
            label: "Frontend",
            text: "Primary developer on the React 18 / TypeScript app, consuming 16 services across five repositories.",
          },
          {
            label: "Platform integrations",
            text: "OAuth 2.0 connect and publish for Facebook, Instagram, LinkedIn, YouTube, Google Business Profile, WordPress and TikTok (single-use CSRF state, redirect allowlists), plus GoHighLevel CRM, Google Search Console, Google Drive, Reddit, and hosted blogs for Squarespace, Wix and GoDaddy sites.",
          },
          {
            label: "AI video and images",
            text: "Avatar video pipeline on HeyGen and Creatomate orchestrated by Step Functions, with auto-captions, background music and Reel / landscape / square framing; renders kept in our own S3/CloudFront; bulk AI images (gpt-image).",
          },
          {
            label: "Security",
            text: "Led hardening of the social service: tenant checks on every customer-scoped route (IDOR), SSRF-safe fetching, CORS allowlists, KMS-encrypted token storage and log hygiene. Shipped TOTP multi-factor sign-in and expiring review links.",
          },
          {
            label: "AI agents and CRM",
            text: "Long-term agent memory (brand preferences recalled across chats) and GoHighLevel tools: contact import with LLM column mapping, calendar booking, call history and lead alerts.",
          },
          {
            label: "Scheduling and analytics",
            text: "Timezone-aware scheduling across three Lambda services (160+ new tests) and an analytics rebuild.",
          },
        ],
      },
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Python",
      "AWS Lambda",
      "Step Functions",
      "DynamoDB",
      "Amazon Bedrock",
      "OAuth 2.0",
      "GitHub Actions",
    ],
  },
  {
    company: "CyTech International",
    period: "Nov 2025 – Feb 2026",
    about:
      "Cagayan de Oro R&D office: AQUILA cybersecurity platform (Wetware, Touchstone, C4I) for security leaders.",
    roles: [
      {
        title: "Frontend & QA Engineer",
        items: [
          {
            label: "Frontend",
            text: "Built and maintained 20+ AQUILA dashboard screens (workforce risk, process maps, C4I hub) in React / TypeScript.",
          },
          {
            label: "QA",
            text: "Wrote and ran manual and automated test cases across releases, and filed and verified defects before release.",
          },
          {
            label: "Release quality",
            text: "Added regression checks before each release; tested permissions, data exposure and audit trails.",
          },
        ],
      },
    ],
    stack: ["React", "TypeScript", "Playwright", "Manual & automated QA"],
  },
  {
    company: "Provincial ICT Division, Province of Bukidnon",
    period: "Jan – May 2025",
    about: "490 hours · Certificate of Achievement",
    roles: [
      {
        title: "IT Intern",
        items: [
          {
            label: "Infrastructure",
            text: "Helped deliver the ₱33.3M data center, fiber backbone, CCTV and IP-PBX projects: installed hyperconverged infrastructure in two data centers, built a 3-tier redundant network (VLANs, DHCP, Cisco and Ruijie switches) and campus Wi-Fi.",
          },
          {
            label: "Servers and security",
            text: "Migrated servers across both data centers and an AWS-hosted app behind an Nginx reverse proxy, added Let's Encrypt SSL to 7 government web apps, and configured a Sangfor NGAF firewall with web filtering and a captive portal.",
          },
          {
            label: "Software",
            text: "Built an HR (HRMIS) dashboard, migrated the provincial website, built an interactive tourism map for Kaamulan 2025, and contributed to fuel inventory and ARTA client-satisfaction systems; documented Zabbix monitoring.",
          },
        ],
      },
    ],
    stack: ["Networking", "Nginx", "AWS", "Firewalls", "Zabbix"],
    certificates: true,
  },
  {
    company: "Freelance & Contract Developer",
    period: "2022 – 2025",
    about: "Independent client work.",
    roles: [
      {
        title: "Full-Stack Developer",
        items: [
          {
            text: "Laravel / PHP multi-tenant SaaS, four client projects, MERN apps and Google Apps Script automations.",
          },
        ],
      },
    ],
    stack: ["Laravel", "PHP", "MongoDB", "Express", "React", "Node.js"],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React 18", "TypeScript", "Next.js (App Router)", "Tailwind CSS", "MUI", "Redux", "Zustand"],
  },
  {
    group: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Laravel", "PHP", "Docker"],
  },
  {
    group: "Data",
    items: ["DynamoDB", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    group: "Cloud & network",
    items: ["AWS Lambda", "API Gateway", "S3", "CloudFront", "SQS", "EventBridge", "Cognito", "KMS", "SAM", "Nginx", "VLANs", "Firewalls"],
  },
  {
    group: "AI",
    items: ["Amazon Bedrock (Claude)", "OpenAI (gpt-image)", "Gemini", "Perplexity", "HeyGen", "Creatomate", "Firecrawl", "RAG"],
  },
  {
    group: "AI dev tools",
    items: ["Claude Code", "Subagents", "Custom skills", "Hooks", "MCP servers"],
  },
  {
    group: "Testing",
    items: ["Jest", "Playwright", "pytest"],
  },
];

export const languages = "Cebuano (native), Filipino, English (professional working proficiency)";

export const education = {
  degree: "BS Information Technology",
  school: "Bukidnon State University",
  period: "2021 – 2025",
  note: "Capstone: GPS IoT visitor monitor, chosen for patent filing",
};
