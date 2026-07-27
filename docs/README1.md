<!-- File: STORY_MODEL.md -->

# Story Model (Recommended Architecture)

> This is the architecture I believe best matches your thought process.

Instead of treating **files** as the primary objects, treat **Stories** as the primary objects.

Everything your framework discovers becomes a Story.

---

# Philosophy

Instead of asking

> What file is this?

Ask

> What story does this file tell?

Every file contributes one or more stories.

---

# Story Types

```
Folder Story

File Story

Import Story

Export Story

Route Story

Endpoint Story

Function Story

Consumption Story

Dependency Story
```

Every one of these has exactly the same outer structure.

---

# Generic Story Object

```json
{
    "id": "",
    "storyType": "",
    "parentStory": "",
    "sourceFile": "",
    "lineNumber": 0,
    "metadata": {},
    "children": []
}
```

Nothing more.

Everything else lives inside `metadata`.

---

# Example

## Folder Story

```json
{
    "storyType": "Folder",

    "metadata": {
        "name": "customers",
        "path": "/api/v1/customers"
    }
}
```

---

## File Story

```json
{
    "storyType": "File",

    "metadata": {
        "fileName": "end-points.js",
        "type": "Endpoint"
    }
}
```

---

## Import Story

```json
{
    "storyType": "Import",

    "metadata": {
        "module": "./get.js",
        "alias": "funcFromGet",
        "kind": "relative"
    }
}
```

---

## Route Story

```json
{
    "storyType": "Route",

    "metadata": {
        "mount": "/customers",
        "target": "./customers/end-points.js"
    }
}
```

---

## Endpoint Story

```json
{
    "storyType": "Endpoint",

    "metadata": {
        "method": "GET",
        "path": "/",
        "function": "funcFromGet"
    }
}
```

---

## Function Story

```json
{
    "storyType": "Function",

    "metadata": {
        "name": "funcFromGet"
    }
}
```

---

## Consumption Story

```json
{
    "storyType": "Consumes",

    "metadata": {
        "caller": "router.get",
        "callee": "funcFromGet"
    }
}
```

---

## Export Story

```json
{
    "storyType": "Export",

    "metadata": {
        "name": "default"
    }
}
```

---

# Why This Fits KSchema

Your pipeline already behaves like this.

```
Read File

↓

Collect Interesting Lines

↓

Regex

↓

Extract Meaning

↓

Build Story
```

Notice the last stage.

It does **not** build an Endpoint.

It builds a Story.

That Story simply happens to describe an Endpoint.

---

# Future

Later you can add new story builders without changing the architecture.

```
AppStoryBuilder

↓

RouteStoryBuilder

↓

EndpointStoryBuilder

↓

ImportStoryBuilder

↓

ExportStoryBuilder

↓

FunctionStoryBuilder

↓

ControllerStoryBuilder

↓

ServiceStoryBuilder

↓

ModelStoryBuilder
```

All of them return the same object shape.

---

# Final Knowledge Graph

```
Project

└── Stories
    ├── Folder Story
    ├── File Story
    ├── Import Story
    ├── Export Story
    ├── Route Story
    ├── Endpoint Story
    ├── Function Story
    ├── Consumption Story
    └── Dependency Story
```

No special handling is required.

Every new capability is simply another Story producer.

---

# My Recommendation

After listening to your design process today, I think this is the biggest architectural improvement you can make.

Your current code is already **building stories**.

I would embrace that idea completely and make **Story** the only universal object in the framework.

Everything else becomes a specialization of a Story.