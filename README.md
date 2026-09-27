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

## layout

- `extensions/` custom slash commands and runtime behavior
- `skills/` packaged agent skills
- `prompts/` prompt templates
- `themes/` Pi themes
