# MongoDB Learning

A personal learning repo/notes for MongoDB — covering core concepts, commands, and practice exercises.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Core Concepts](#core-concepts)
- [Basic Commands](#basic-commands)
- [CRUD Operations](#crud-operations)
- [Aggregation Framework](#aggregation-framework)
- [Indexing](#indexing)
- [Schema Design](#schema-design)
- [Practice Exercises](#practice-exercises)
- [Resources](#resources)

## Introduction

MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents (BSON). This repo tracks my progress learning MongoDB fundamentals and beyond.

## Prerequisites

- Basic understanding of databases
- Familiarity with JSON
- Node.js / Python / any language of choice (optional, for driver practice)

## Installation

```bash
# macOS (Homebrew)
brew tap mongodb/brew
brew install mongodb-community

# Ubuntu/Debian
sudo apt-get install -y mongodb-org

# Or use MongoDB Atlas (cloud, no local install needed)
```

Start the server:

```bash
mongod
```

Connect via shell:

```bash
mongosh
```

## Core Concepts

- **Database** — container for collections
- **Collection** — group of documents (like a table)
- **Document** — a single record, stored as BSON (like a row)
- **Field** — key-value pair within a document
- **_id** — unique identifier automatically assigned to each document

## Basic Commands

```js
show dbs
use myDatabase
show collections
db.myCollection.drop()
db.dropDatabase()
```

## CRUD Operations

**Create**
```js
db.users.insertOne({ name: "Ali", age: 25 })
db.users.insertMany([{ name: "Sara" }, { name: "Zain" }])
```

**Read**
```js
db.users.find()
db.users.findOne({ name: "Ali" })
db.users.find({ age: { $gt: 20 } })
```

**Update**
```js
db.users.updateOne({ name: "Ali" }, { $set: { age: 26 } })
db.users.updateMany({}, { $inc: { age: 1 } })
```

**Delete**
```js
db.users.deleteOne({ name: "Ali" })
db.users.deleteMany({ age: { $lt: 18 } })
```

## Aggregation Framework

```js
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
])
```

Common stages: `$match`, `$group`, `$project`, `$sort`, `$limit`, `$lookup`, `$unwind`.

## Indexing

```js
db.users.createIndex({ name: 1 })
db.users.getIndexes()
db.users.dropIndex("name_1")
```

Indexes speed up queries but add overhead to writes — use them thoughtfully.

## Schema Design

- MongoDB is schema-less, but modeling still matters
- Choose between **embedding** (denormalized, nested docs) and **referencing** (normalized, using ObjectIds)
- Embed for one-to-few / tightly coupled data
- Reference for one-to-many / many-to-many relationships

## Practice Exercises

- [ ] Create a database and insert 10 sample documents
- [ ] Write queries using comparison operators (`$gt`, `$lt`, `$in`, etc.)
- [ ] Build a 3-stage aggregation pipeline
- [ ] Create and test an index on a large collection
- [ ] Design a schema for a blog (users, posts, comments)

## Resources

- [MongoDB Official Docs](https://www.mongodb.com/docs/)
- [MongoDB University](https://learn.mongodb.com/)
- [MongoDB Manual](https://www.mongodb.com/docs/manual/)