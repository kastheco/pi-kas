# pi-kas

Kas's Pi package for custom extensions, skills, prompts, and themes.

## use locally

```bash
pi install /home/kas/dev/pi-kas
```

Reload an existing Pi session with `/reload` after installing or changing the package.

## commands

### `/docs [scope]`

Loads `project-documentation-reconciliation` and starts a reconciliation turn. Optional text is passed to the skill as the task scope.

```text
/docs
/docs reconcile this repo's README and canonical Notion project hub
```

The underlying skill remains available as `/skill:project-documentation-reconciliation`.

## skills

### `unfuck`

cuts an over-engineered agent plan back to the simplest version that keeps your request, decisions, and acceptance criteria. it asks before changing a decision or criterion.

pi loads it from this package. for claude code, codex, and omp, link it from the repo root:

```bash
mkdir -p ~/.agents/skills ~/.claude/skills
ln -s "$PWD/skills/unfuck" ~/.agents/skills/unfuck   # codex, omp
ln -s "$PWD/skills/unfuck" ~/.claude/skills/unfuck   # claude code
```

link it instead of copying. pi reads `~/.agents/skills` too, and it only skips the duplicate when both paths resolve to the same file.

| harness | command |
|---|---|
| claude code | `/unfuck` |
| codex | `$unfuck` |
| pi, omp | `/unfuck` or `/skill:unfuck` |

## layout

- `extensions/` custom slash commands and runtime behavior
- `skills/` packaged agent skills
- `prompts/` prompt templates
- `themes/` Pi themes
