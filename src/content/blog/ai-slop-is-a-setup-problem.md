---
title: 'AI Slop Is a Setup Problem'
description: "The difference between useful AI and generic mush isn't the model. It's everything you haven't told it."
pubDate: 2026-01-26
tags: ['ai', 'productivity', 'building']
---

When I ask Claude for help on a financial decision, it already knows my investment approach, my risk tolerance, my expenses and income. When I ask it to help me think through a work problem, it knows my role, my company, and the way I think about product management. When it drafts something for me, it knows never to use the words "synergy" or "circle back."

When most people ask Claude or ChatGPT the same questions, they get competent, generic answers that smell like AI.

Same model. Different experience.

---

The default assumption is that AI quality comes from the model. Better model, better answers. This is true but most people are using comparable models. What matters more is context — and most people provide almost none.

Here's what a typical interaction looks like:

> **User:** What should I do with my savings?
>
> **Claude:** Put your savings into a diversified portfolio of...

Here's what mine looks like:

> **User:** What should I do with my savings?
>
> **Claude:** [Knows my financial position, my goals, and that I have a family trip in June] — Given your June trip and your emergency fund target, here's how I'd allocate...

The second Claude isn't smarter. It just has something to work with.

---

I've built what I'd call a "context layer" over the past year. It's not complicated, but it took some intention:

**User preferences.** A few hundred words describing how I like responses — direct, no jargon, critical thinking over agreement, label assumptions clearly. This persists across all conversations.

**Project-level context.** Each domain of my life gets its own Claude Project with relevant background. My personal assistant project has a document with my life history, my interests, my family situation. It has my list of five-star books — so Claude knows my intellectual influences. It even has a list of forbidden corporate phrases, so I never have to read "strategic stakeholder alignment" in something Claude writes for me.

Work context stays in its own project. My exercise/training in another. They don't bleed into each other.

**Tool integrations.** My todo app (Slate) exposes data via MCP, so Claude can see what I'm working on, what's blocked, what's scheduled. When I ask "what should I focus on today?", it has real data, not my vague recollection.

**Accumulated conversation history.** Memory features mean Claude builds up knowledge over time. Not perfect, but it compounds.

None of this is secret. It's all just... setup. But almost no one seems to do it.

---

Why not?

**Default Claude is still impressive.** If you've never experienced context-rich AI, you don't know what you're missing. The gap is invisible.

**Setup doesn't feel productive.** Writing user preferences, organising projects, connecting tools — none of this feels like Getting Shit Done. It feels like procrastination.

**People think of AI as a search box.** You type a question, you get an answer, you leave. The idea of AI as an ongoing relationship with accumulated context doesn't match the mental model.

**The benefits are diffuse.** It's not one amazing answer. It's hundreds of slightly better answers. Hard to notice, easy to undervalue.

---

I think this gap matters more than people realise.

When I research something — training protocols, supplements, some new piece of tech — Claude can situate the answer in my actual life. The generic answer to "are probiotics worth it in 2026?" is different from the answer to "are probiotics worth it _for me_, given what you know about my health history and my scepticism of supplement marketing?"

When I'm gameplanning a tricky work project, Claude knows the org context, the relationships, the history. It can pressure-test my approach against specifics, not hypotheticals.

When I'm building something, Claude can see my task graph and knows what I've already tried.

The compounding happens at this level — not at the level of "has access to GPT-5" versus "has access to GPT-4."

---

The hard part isn't the setup itself. It's noticing that setup is a variable you can change.

Most people optimise prompts. They learn tricks, magic phrases, workarounds. This is like perfecting your Google search queries while never bookmarking anything or using filters. Marginally better results, but you're missing the structural leverage.

I don't think this is a character flaw. It's just not obvious. When you open Claude for the first time, nothing says "hey, you should spend an hour writing down context about yourself before you ask anything." The interface nudges you toward individual queries, not systematic setup.

But once you see it, you can't unsee it. The actual skill isn't prompting. It's architecture.

---

I don't know how big this gap becomes over time. Maybe everyone figures it out and it's table stakes in two years. Maybe the models get good enough at inferring context that explicit setup becomes unnecessary. Maybe the AI labs figure out that context creates lock-in.

But right now, in January 2026, the difference between shallow AI integration and deep AI integration is enormous. And most people are still at the shallow end, wondering why their AI gives them slop.
