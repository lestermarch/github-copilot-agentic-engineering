# GitHub Copilot: From Coding Assistance to Agentic Engineering

A practical GitHub Copilot enablement deck that helps software professionals move from code completion and chat to well-grounded, customized, and governed agentic engineering.

## View the presentation

- **Web presentation:** [Open the interactive slides](https://lestermarch.github.io/github-copilot-agentic-engineering/)
- **PDF:** [View or download](assets/from-coding-assistance-to-agentic-engineering.pdf)
- **PowerPoint:** [Download the editable source](assets/from-coding-assistance-to-agentic-engineering.pptx)

Use the labelled **Previous** and **Next** buttons, arrow keys, or reveal.js controls to navigate the web presentation. Press <kbd>S</kbd> to open speaker view.
On a small screen, tap a slide to open the full-resolution image for zooming.

## What the asset does

The deck provides a structured introduction to the expanding GitHub Copilot capability model:

- distinguishes assistive coding, agentic execution, and agent customization;
- explains the roles of models, harnesses, tools, context, and controls;
- helps users choose the right Copilot surface for a task;
- demonstrates how stronger task definitions improve agent outcomes;
- introduces repository instructions, prompt files, skills, custom agents, MCP, and hooks;
- connects increasing autonomy with stronger testing, permissions, review, and governance;
- introduces specification-driven agentic engineering with Spec Kit.

It solves a common enablement problem: teams often encounter Copilot as a collection of disconnected features and struggle to understand when to use each capability safely and effectively. The deck supplies a coherent progression, shared terminology, and practical next actions.

## Purpose and value

The purpose of this asset is to help organizations turn GitHub Copilot adoption into an engineering capability rather than a feature rollout.

**Business value**

- accelerates time to productive and responsible Copilot usage;
- improves task quality and reduces avoidable agent rework;
- encourages teams to match autonomy to risk and delivery controls;
- creates a shared language for developers, engineering leaders, platform teams, and governance stakeholders;
- supports scalable adoption by connecting customization and agentic workflows to established software delivery practices.

**Intended audience**

- software developers and technical leads;
- engineering managers and architects;
- developer experience and platform engineering teams;
- security, governance, and responsible-AI stakeholders;
- enablement teams introducing GitHub Copilot across an organization.

The material supports mixed-experience audiences, from people new to Copilot through practitioners already using agents, the CLI, custom instructions, skills, MCP tools, or parallel sessions.

## Repository structure

```text
.
├── assets/
│   ├── slides/        # Web-optimized slide images
│   ├── *.pdf          # Portable presentation
│   └── *.pptx         # Editable PowerPoint source
├── index.html         # Semantic reveal.js slide structure
├── main.js            # reveal.js configuration
└── styles.css         # Presentation shell and responsive styling
```

The web version uses semantic HTML with reveal.js 6 because it provides stable deep links, keyboard navigation, speaker notes, responsive presentation controls, and direct accessibility metadata while preserving the PowerPoint visual design.

The visual treatment deliberately preserves the approved PowerPoint rather than recreating it as approximate HTML. Asset provenance, accessibility classification, layout choices, and motion behavior are documented in [ASSETS.md](ASSETS.md).

## Develop locally

Requires Node.js 22.12 or later.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```
