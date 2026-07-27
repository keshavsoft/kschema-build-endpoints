<!-- File: README.md -->

# KSchema Build Endpoints

> Transform an Express.js project into a structured knowledge model.

---

# Vision

The objective of this project is **not** to generate Swagger directly.

The objective is to understand the application's architecture by converting its folder structure, files, routes, endpoints, imports, exports and relationships into a structured JSON knowledge graph.

Once the knowledge graph exists, multiple outputs become possible.

- Swagger / OpenAPI
- HTML Documentation
- Dependency Graphs
- AI Knowledge Base
- Reverse Engineering
- Architecture Reports
- Code Navigation
- Automatic Refactoring
- API Visualization

The JSON is the source of truth.

Everything else is generated from it.

---

# Overall Pipeline

```
Express Project
      │
      ▼
node-fs-recursive
      │
      ▼
Array<FilePath>
      │
      ▼
node-fs-read-content
      │
      ▼
Array<FileObject>
      │
      ▼
kschema-pull-endpoints
      │
      ▼
Endpoint Files
      │
      ▼
kschema-pull-methods
      │
      ▼
Story Builder
      │
      ▼
Knowledge JSON
      │
      ├────────► Swagger
      │
      ├────────► HTML Documentation
      │
      ├────────► Dependency Graph
      │
      └────────► AI Processing
```

---

# Package Responsibilities

## node-fs-recursive

### Responsibility

Discover files.

### Input

```
Folder Path
Target File Name
```

### Output

```
Array<String>

[
    "/api/v1/customers/end-points.js",
    "/api/v1/products/end-points.js"
]
```

---

## node-fs-read-content

### Responsibility

Read file contents.

### Input

```
Array<FilePath>
```

### Output

```javascript
[
    {
        nameWithOutExtension,
        extension,
        basename,
        fileFullPath,
        fileContent
    }
]
```

This package performs **no parsing**.

It only converts

```
File Path
```

↓

```
Structured File Object
```

---

## kschema-pull-endpoints

### Responsibility

Locate endpoint files.

Current target

```
end-points.js
```

Output

```
Array<FilePath>
```

---

## kschema-pull-methods

### Responsibility

Understand endpoint files.

Current responsibility

- Find router.get()
- Find router.post()
- Find router.put()
- Find router.delete()
- Find router.patch()

Convert every endpoint into a Story object.

---

## buildStory()

Current implementation

```
File Content

↓

Pattern Collector

↓

Regex Parser

↓

Story Object
```

Current Story

```javascript
{
    filePath,
    line,
    lineNumber,
    method,
    endPoint,
    funcToRun
}
```

---

# Current Architecture

```
Folder Discovery

↓

Read Files

↓

Extract Interesting Lines

↓

Apply Regex

↓

Split Regex Parts

↓

Build Story

↓

Return JSON
```

Each stage has exactly one responsibility.

---

# Design Principles

## Single Responsibility

Every package should solve only one problem.

---

## Immutable Pipeline

Each package receives data.

Each package returns richer data.

No package should modify previous stages.

---

## Memory First

Files are read once.

Parsing should happen in memory.

Avoid repeated File System access.

---

## Data Driven

Business logic should eventually move into configuration.

Example

Instead of

```javascript
parseRegex3
```

the parser should receive

```javascript
{
    regex,
    outputMapping,
    parserConfiguration
}
```

making the parser generic.

---

# Current Roadmap

## Phase 1

✔ Discover endpoint files

✔ Read contents

✔ Extract methods

✔ Build endpoint story

---

## Phase 2

Generalize

```
buildStory()
```

using external parser definitions.

---

## Phase 3

Support

- app.js
- routes.js
- end-points.js

using one common parsing engine.

---

## Phase 4

Merge all stories into one Knowledge Graph.

---

## Phase 5

Generate

- Swagger
- HTML Documentation
- Dependency Tree
- API Explorer
- AI Documentation

---

# Current Status

Completed

- File discovery
- File reading
- Endpoint discovery
- Method extraction
- Story generation

In Progress

- Generalization
- Knowledge Graph

Future

- Full Express Project Modeling
- Swagger Generation
- Visual Documentation
- AI-ready Architecture JSON

---

# Documentation

Comprehensive design manuals and specification details can be found under the [docs/](docs/README.html) directory:

- 📚 **[Documentation Hub](docs/README.html)**: Main landing page for all design files.
- 🏗️ **[KSchema Architecture](docs/ARCHITECTURE.html)**: High-level architectural design.
- 🧬 **[Story Model](docs/STORY_MODEL.html)**: Recommended story-centric architecture.
- 🌊 **[Processing Pipeline](docs/PIPELINE.html)**: Stage-by-stage pipeline processing manual.
- 🌳 **[Dependency Tree](docs/DEPENDENCY_TREE.html)**: Component relationships and execution flow.
- 🗺️ **[KSchema Roadmap](docs/ROADMAP.html)**: Detailed roadmap stages.
- 📝 **[ADR-001](docs/ADR-001-KNOWLEDGE-GRAPH-AS-SOURCE-OF-TRUTH.html)**: Decision record for the canonical Knowledge Graph.

---

# Philosophy

The project is not parsing JavaScript.

The project is understanding JavaScript.

The final objective is to transform an application's architecture into a structured knowledge model that can be consumed by both humans and machines.