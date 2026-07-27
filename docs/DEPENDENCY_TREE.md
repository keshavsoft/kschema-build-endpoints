<!-- File: DEPENDENCY_TREE.md -->

# [KSchema Documentation Hub](README.md) / KSchema Dependency Tree

## Complete Dependency Hierarchy

```
Application
│
└── kschema-build-endpoints
    │
    ├── kschema-pull-endpoints
    │   │
    │   ├── node-fs-recursive
    │   │
    │   └── kschema-fs-read-config
    │
    ├── node-fs-read-content
    │   │
    │   └── fs (Node.js)
    │
    └── kschema-pull-methods
        │
        ├── pattern-collector-anyjs
        │
        ├── pattern-collector-base-regex-n-parts
        │
        ├── node-fs-recursive
        │
        └── kschema-fs-read-config
```

---

# Execution Flow

```
Application
      │
      ▼
kschema-build-endpoints
      │
      ├──────────────► pull-endpoints
      │                    │
      │                    ▼
      │             node-fs-recursive
      │                    │
      │                    ▼
      │           Endpoint File Paths
      │
      ├──────────────► node-fs-read-content
      │                    │
      │                    ▼
      │             File Objects
      │
      └──────────────► pull-methods
                           │
                           ▼
                     Story Objects
                           │
                           ▼
                  Combined Endpoint Story
```

---

# Package Responsibilities

| Package | Responsibility | Input | Output |
|---------|----------------|-------|--------|
| node-fs-recursive | Discover files | Folder | File Paths |
| node-fs-read-content | Read files | File Paths | File Objects |
| kschema-pull-endpoints | Locate endpoint files | Project Path | Endpoint Paths |
| kschema-pull-methods | Parse endpoint methods | File Object | Story Objects |
| kschema-build-endpoints | Orchestrate everything | Project | Endpoint Knowledge |

---

# Package Contracts

## node-fs-recursive

Input

```javascript
{
    folderPath,
    fileNameToFilter
}
```

Output

```javascript
[
    "/api/v1/orders/end-points.js"
]
```

---

## node-fs-read-content

Input

```javascript
{
    inFilePaths
}
```

Output

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

---

## kschema-pull-endpoints

Input

```javascript
{
    toPath
}
```

Output

```javascript
[
    "/api/v1/orders/end-points.js",
    "/api/v1/products/end-points.js"
]
```

---

## kschema-pull-methods

Input

```javascript
{
    filePath,
    fileContent
}
```

Output

```javascript
[
    {
        method,
        endpoint,
        funcToRun,
        line,
        lineNumber
    }
]
```

---

## kschema-build-endpoints

Input

```javascript
{
    toPath
}
```

Output

```javascript
[
    {
        endPointContent,
        methodsContent
    }
]
```

---

# Dependency Principles

## Lowest Layer

Infrastructure

```
node-fs-recursive
node-fs-read-content
```

These packages know nothing about Express.

---

## Middle Layer

Framework Understanding

```
kschema-pull-endpoints
kschema-pull-methods
```

These understand Express conventions.

---

## Top Layer

Application Knowledge

```
kschema-build-endpoints
```

This combines everything into one unified model.

---

# Dependency Rule

Every package may only depend on packages below it.

```
Application

↓

Orchestrator

↓

Parser

↓

Infrastructure
```

Never the reverse.

---

# Future Packages

```
kschema-pull-routes

kschema-pull-app

kschema-pull-controllers

kschema-pull-services

kschema-pull-models

kschema-pull-middlewares

kschema-build-knowledge-graph

kschema-build-swagger

kschema-build-html
```

These can all plug into the same architecture without changing the lower layers.

---

# Architecture Summary

```
Discover

↓

Read

↓

Extract

↓

Parse

↓

Build Story

↓

Merge Stories

↓

Knowledge Graph

↓

Generate Outputs

---

## 🔗 Related Resources

- **[Documentation Hub](README.md)**: Explore all design manuals.
- **[Architecture](ARCHITECTURE.md)**: High-level architectural overview.
- **[Story Model](STORY_MODEL.md)**: Learn about treating Stories as primary data objects.
- **[Processing Pipeline](PIPELINE.md)**: Read how data flows stage by stage.
- **[Roadmap](ROADMAP.md)**: Explore planned development phases.
- **[ADR-001](ADR-001-KNOWLEDGE-GRAPH-AS-SOURCE-OF-TRUTH.md)**: Read the Architectural Decision Record.
```