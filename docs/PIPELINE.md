<!-- File: PIPELINE.md -->

# KSchema Processing Pipeline

> The processing engine that converts source code into a Knowledge Graph.

---

# Core Philosophy

KSchema is a pipeline.

Every stage has exactly one responsibility.

Every stage enriches the previous stage.

No stage should know about the implementation of the next stage.

```
Input

↓

Stage

↓

Output
```

---

# Complete Pipeline

```
Express Project

        │
        ▼

Discover

        │
        ▼

Read

        │
        ▼

Extract

        │
        ▼

Parse

        │
        ▼

Build Story

        │
        ▼

Merge Stories

        │
        ▼

Knowledge Graph

        │
        ├────────► HTML
        ├────────► Swagger
        ├────────► Mermaid
        ├────────► Dependency Tree
        ├────────► AI
        └────────► Reports
```

---

# Stage 1 — Discover

## Responsibility

Locate interesting files.

## Current Package

```
node-fs-recursive
```

## Input

```javascript
{
    folderPath,
    fileNameToFilter
}
```

## Output

```javascript
[
    "/api/v1/customers/end-points.js",
    "/api/v1/products/end-points.js"
]
```

No parsing.

No reading.

Only discovery.

---

# Stage 2 — Read

## Responsibility

Read every discovered file.

## Current Package

```
node-fs-read-content
```

## Input

```
Array<FilePath>
```

## Output

```javascript
[
    {
        basename,
        extension,
        fileFullPath,
        fileContent
    }
]
```

No understanding.

Only acquisition.

---

# Stage 3 — Extract

## Responsibility

Find interesting lines.

Example

```
router.get(...)

router.post(...)

import ...

export ...
```

## Current Package

```
pattern-collector-anyjs
```

Output

```javascript
[
    {
        line,
        lineNumber
    }
]
```

---

# Stage 4 — Parse

## Responsibility

Understand each extracted line.

Example

```
router.get(
    "/",
    funcFromGet
)
```

becomes

```javascript
{
    method: "get",
    endpoint: "/",
    function: "funcFromGet"
}
```

Current parser

```
pattern-collector-base-regex-n-parts
```

---

# Stage 5 — Build Story

## Responsibility

Convert parsed data into domain knowledge.

Example

```javascript
{
    filePath,
    method,
    endpoint,
    function,
    lineNumber
}
```

Future

```
Import Story

Export Story

Route Story

Endpoint Story

Controller Story

Service Story
```

Every builder returns a Story.

---

# Stage 6 — Merge Stories

Responsibility

Combine every story into one model.

```
Folder Story

+

File Story

+

Import Story

+

Route Story

+

Endpoint Story

+

Function Story

↓

Knowledge Graph
```

No information should be duplicated.

Relationships should be linked.

---

# Stage 7 — Generate

The Knowledge Graph is now consumed.

Possible generators

```
Swagger Generator

HTML Generator

Dependency Generator

Mermaid Generator

Markdown Generator

AI Generator
```

No generator should parse source code.

Generators consume only the Knowledge Graph.

---

# Processing Rules

## Rule 1

Each stage has one responsibility.

---

## Rule 2

Stages never skip forward.

```
Read

↓

Extract

↓

Parse
```

Not

```
Read

↓

Build Story
```

---

## Rule 3

Stages never modify previous outputs.

Every stage creates a richer representation.

---

## Rule 4

Infrastructure packages never understand Express.

Infrastructure

```
Read

Discover
```

Domain

```
Routes

Endpoints

Controllers
```

---

## Rule 5

Business knowledge belongs only inside Story Builders.

Everything before Story Builders should remain generic.

---

# Canonical Data Flow

```text
Folder

↓

Files

↓

Contents

↓

Interesting Lines

↓

Regex Parts

↓

Structured Data

↓

Stories

↓

Knowledge Graph

↓

Generated Artifacts
```

---

# Future Extension Points

Every new capability should plug into an existing stage.

Examples

```
Discover Python Files

↓

Read

↓

Extract Decorators

↓

Parse

↓

Build Stories

↓

Merge

↓

Knowledge Graph
```

or

```
Discover Java Files

↓

Read

↓

Extract Annotations

↓

Parse

↓

Build Stories

↓

Merge
```

The pipeline remains unchanged.

Only the Story Builders change.

---

# Golden Principle

> **Parse once. Understand forever.**

Everything after the Knowledge Graph should be generated without touching the source code again.