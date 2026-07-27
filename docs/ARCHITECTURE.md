<!-- File: ARCHITECTURE.md -->

# KSchema Architecture

## Purpose

KSchema converts an Express.js application into a structured knowledge model.

It is **not** a code generator.

It is **not** a parser alone.

It is a **Knowledge Extraction Engine**.

---

# High Level Architecture

```
                 Express Application
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
             Endpoint File Objects
                         │
                         ▼
              kschema-pull-methods
                         │
                         ▼
                  buildStory()
                         │
                         ▼
                 Story Objects
                         │
                         ▼
              Knowledge Graph JSON
```

---

# Layer 1 — Discovery

Responsible Package

```
node-fs-recursive
```

### Responsibility

Find files.

### Input

```
Folder
Target Filename
```

### Output

```javascript
[
    "/api/v1/orders/end-points.js",
    "/api/v1/products/end-points.js"
]
```

No parsing.

No reading.

No business logic.

---

# Layer 2 — Read

Responsible Package

```
node-fs-read-content
```

### Responsibility

Read every discovered file.

### Output

```javascript
{
    basename,
    extension,
   fileFullPath,
   fileContent
}
```

Still no understanding.

Only data acquisition.

---

# Layer 3 — Discovery of Domain Files

Responsible Package

```
kschema-pull-endpoints
```

Responsibility

Locate

```
end-points.js
```

files.

Output

```
Array<FilePath>
```

---

# Layer 4 — Story Extraction

Responsible Package

```
kschema-pull-methods
```

Responsibilities

- Detect router.get()
- Detect router.post()
- Detect router.put()
- Detect router.delete()
- Detect router.patch()

Each match becomes one Story.

---

# Layer 5 — Story Builder

Current implementation

```
Pattern Collector

↓

Regex

↓

Regex Parts

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

# Future Generalization

Current

```
buildStory()

contains

Regex
Mapping
Story
```

Future

```
buildStory()

↓

Generic Engine

↓

Parser Configuration

↓

Story Configuration

↓

Output Mapping
```

Example

```javascript
{
    parser: endpointParser,
    regex: "...",
    parts: 3,
    mapping: {
        method: 1,
        endpoint: 2,
        function: 3
    }
}
```

---

# Knowledge Layers

The architecture intentionally separates concerns.

```
Folders

↓

Files

↓

Content

↓

Interesting Lines

↓

Parsed Components

↓

Stories

↓

Knowledge Graph
```

Every layer enriches the previous one.

---

# Design Rules

## Rule 1

Every package has one responsibility.

---

## Rule 2

Packages communicate only through structured objects.

Never through globals.

---

## Rule 3

Every package returns richer information than it received.

---

## Rule 4

Parsing happens after reading.

Never mix IO with parsing.

---

## Rule 5

Business knowledge belongs in Story Builders.

Infrastructure packages should never understand Express.

---

# Future Supported Files

```
app.js

↓

routes.js

↓

end-points.js
```

Eventually

```
controllers

services

repositories

middlewares

validators

models
```

can be plugged into the same engine.

---

# Final Goal

```
Application

↓

Knowledge Graph

↓

Multiple Outputs
```

Possible outputs

- Swagger
- HTML Documentation
- Dependency Visualization
- AI Context
- Reverse Engineering
- API Explorer
- Architecture Reports

The Knowledge Graph remains the single source of truth.