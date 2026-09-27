---
name: unfuck
description: cut an over-engineered plan back to the simplest version that keeps the user's request, decisions, and acceptance criteria. use when the user types /unfuck or asks to cut a plan down.
---

# unfuck

cut the current plan down to the simplest thing that could possibly work: the whole request, every user decision, every acceptance criterion, and nothing else. the cut plan only removes and shrinks.

text the user sent with the invocation either points at the plan or adds intent. it's their words, so it outranks the plan.

## 1. find the plan

use the plan the user pointed at. otherwise use the latest plan in this conversation, along with any plan file or todo list that tracks it. if there's no plan, say so and stop.

done when you can name the plan you're cutting and every place it lives.

## 2. pin the contract

build the contract from the user's own words: their messages in this conversation, anything they pointed at (a ticket, issue, or doc), and their standing instructions (AGENTS.md, CLAUDE.md). the plan's restatement of the request doesn't count, since that's usually where the inflation started.

- **request**: what they asked for, quoted.
- **intent**: the outcome they're after, who'll use it, and how long it has to last. the default is a quick sprint: the smallest thing that does the job for the use they described. enterprise-grade work (hardening, scale, multi-user support, operability, future-proofing) needs the user to have asked for it in words.
- **decisions**: choices the user stated or picked when asked, plus their standing instructions and the repo's existing conventions. approving a plan as a whole doesn't make its items user decisions, because invoking this skill is the user taking that approval back.
- **acceptance criteria**: what the user said done looks like. if they didn't say, the criterion is that the request works as described.

done when every entry cites the user's words. anything you can't cite isn't part of the contract.

## 3. cut

go through the plan item by item: every step, section, component, file, dependency, test, and doc. an item stays only if it's load-bearing: removing it would break a decision, miss a criterion, miss the intent, or leave the result broken or unsafe for the use the user described. judge against that use only. hypothetical users, scale, failures, and futures are YAGNI, and "best practice" on its own carries no weight.

bloat usually hides in these places:

- **speculative generality**: interfaces, base classes, plugin points, registries, and config for a single case.
- **new moving parts**: services, daemons, workers, queues, databases, caches, containers, orchestration layers, and CI changes.
- **harnesses and gates**: test or eval harnesses, mock servers, fixture frameworks, benchmark suites, review gates, and approval flows.
- **YAGNI hardening**: retries, backoff, locking, rate limits, feature flags, dry-run modes, migrations, rollback, recovery subsystems, metrics, tracing, dashboards, and audit logs.
- **gold-plating**: extra flags, formats, providers, platforms, compatibility shims, docs, ADRs, runbooks, and follow-up phases.

work the plan already built counts too. a cut item that already exists gets a removal step in the cut plan.

done when every item is marked cut or keep, and each keep names the contract entry, or the kept item, it's needed for. a keep needs a citation, not an argument.

## 4. shrink what's left

give each kept item the smallest mechanism that still does its job: reuse what the repo already has, inline instead of abstracting, a constant instead of a config option, one file instead of several, a manual step instead of automation nobody asked for, and the one check that proves each acceptance criterion instead of a test harness. tests the user or the repo requires stay.

done when you can't name a smaller mechanism for any kept item and the plan still meets every acceptance criterion.

## 5. flag what's locked

decisions and acceptance criteria stay exactly as the user set them. when one of them is itself forcing a lot of complexity, keep it in the cut plan and ask whether they want to change it. name the simpler path it would unlock, what they'd give up, and which way you'd go. skip the question when the saving is small.

if the plan misses one of the user's acceptance criteria, say so in one line instead of growing the plan here.

## 6. hand it back

replace the old plan everywhere it lives: overwrite the plan file, re-present it through plan mode, or post it in chat, and update any todo list that tracks it. keep the plan's original format.

your reply shows, in order:

- **read as**: the intent you cut against, in one line.
- the cut plan.
- **cut**: one line per removed or shrunk item, with the reason in a few words.
- **questions**: the locked items from step 5, if any.

then wait for the user's go-ahead. once they give it, the cut plan is the whole scope.
