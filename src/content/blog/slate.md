---
title: 'What happens when you build a todo app for you and your AI assistant'
description: 'I built Slate knowing Claude would be using it too. Six days of data shows two interfaces, two jobs.'
pubDate: 2026-01-18
tags: ['building', 'ai', 'productivity']
---

I built a todo app over three weeks during the December holidays. Electron, TypeScript, local-first. Keyboard shortcuts for everything. The usual.

The unusual part: I built it knowing Claude would be using it too.

I've abandoned a lot of todo apps. Todoist, Workflowy, Trello, Notion. The pattern is always the same. I use it enthusiastically for a few weeks. Tasks accumulate. Some get done, most don't. The overdue count grows. I stop opening the app because opening it feels bad. Eventually I declare todo-app bankruptcy and start fresh with something new.

The problem isn't the apps. The problem is that todo apps are designed to remember everything, and my brain sometimes needs permission to forget.

A few years ago I started using a Bullet Journal. It's an opinionated way to use a physical notebook. And it worked better than any app, even though I missed things every now and again.

Actually, that undersells it. I've used a bullet journal for close to eight years now. Some gaps, but mostly continuous.

The key mechanic: nothing rolls over automatically. Each morning you look at yesterday's incomplete tasks and manually decide - do it today, schedule it later, or let it go. The friction is the point. If something isn't worth taking the time and effort of rewriting, it wasn't worth doing.

But paper has limits. It's not searchable. It's not backed up. And, since it's 2026 now, it's a big limit that your AI assistant can't see it.

So I built Slate. The core ideas:

**Daily reset.** Nothing carries forward automatically. Each morning is a fresh decision about what matters today.

**Graph structure.** Tasks can link to other tasks. "Write blog post" connects to "pull usage stats" connects to "review MCP logs." As many links as you want and totally custom. I'm not rebuilding Jira.

**Two front doors.** A fast desktop UI for when I know what I'm doing. An MCP integration for when I want Claude to see my work and help me think.

The graph structure matters more than it sounds. When Claude looks at a flat task list, it sees strings. When Claude looks at a graph, it better groks the connections and interdependencies, allowing it to be a smarter assistant.

Here's what a real task graph looks like - these are tasks from writing this post:

```text
┌──────────────┐      ┌──────────────┐
│ Update       │◄─────┤ Draft        │
│ homepage     │      │ intro        │
└──────┬───────┘      └───────┬──────┘
       │                      │
       │   ┌──────────────┐   │
       └──►│ Write Slate  │◄──┘
           │ blog post    │
           └──────┬───────┘
              ┌───┴───┐
              │       │
              ▼       ▼
     ┌────────────┐ ┌────────────┐
     │ Pull usage │ │ Review MCP │
     │ stats      │─┤ logs       │
     └─────┬──────┘ └─────┬──────┘
           │              │
           └──────┬───────┘
                  ▼
           ┌────────────┐
           │ Analyze    │
           │ patterns   │
           └────────────┘
```

Not a hierarchy - a web. "Draft intro" feeds into both the blog post and the homepage update. "Pull usage stats" and "Review MCP logs" are related to each other and both feed into analysis. A flat list would show six disconnected items. The graph shows how they actually relate.

I've been using it for real since January 13th. Six days of data, which is enough to see patterns.

The split surprised me:

|                 | Desktop | Claude (MCP) |
| --------------- | ------- | ------------ |
| Tasks created   | 24      | 65           |
| Tasks completed | 46      | 23           |
| Edges created   | 16      | 39           |
| Priorities set  | 20      | 2            |

Claude creates almost three times as many tasks. I manually complete twice as many. Claude creates most of the links between tasks. I set almost all the priorities.

Two interfaces, two jobs. Claude is the capture net - when I'm in conversation and things come up, they get logged and structured without breaking flow. The desktop app is where I decide what actually matters and check things off.

The hourly pattern is even clearer. Early morning, 5-7am, it's almost all desktop. That's my daily review, picking priorities. Evening, 7-9pm, it's mostly MCP. That's when I'm working on Slate itself or other projects with Claude Code (or drafting blogs).

Three moments that made me think this is actually working:

**Standup prep.** I asked Claude to help me prepare for work standups this week. It pulled yesterday's completed tasks, today's priorities, and - because it could see the edges - explained _why_ certain things mattered. "This is blocking the Q1 launch" isn't something a flat list can tell you.

**Project breakdown.** I was talking through a project that felt simple. Mid-conversation I realised it was bigger than I thought. "Can you break this down?" Claude created six subtasks, linked them properly, scheduled the first one for today. The work of structuring it happened inside the conversation, not as a separate chore.

**Claude Code picking tasks.** I have a `#slate` tag for bugs and features. I told Claude Code to look at the quick wins and tackle some. It read the task list, picked three small bugs, fixed them, and marked them complete. The AI didn't just see my tasks - it acted on them.

I don't know exactly where this goes, but I have a guess. The desktop UI becomes less important over time. Not because it's bad - it's fast and I like using it - but because our AI assistants will probably become the "UI" of the future. And even before that happens, the AI gets better at reasoning about what matters and voice is really becoming easier than typing. The human stays in the loop for the actual decisions, but the administrative overhead of task management keeps shrinking.

That's my thinking, anyway. Only time will tell if Slate will stay valuable deeper into 2026 and beyond.

But something definitely feels different with Slate. The daily reset means I don't dread opening it. The graph means Claude can actually help me think, not just store text. And building it myself means it fits my brain instead of asking my brain to fit it.

The app forgets what I didn't do, so I can focus on what's next. That's the whole thing, really.

---

The bullet journal method that inspired the daily reset: [bulletjournal.com](https://bulletjournal.com)

For now, I am not planning on making Slate available to others, but one day I might open source it. Why? That's another post entirely.
