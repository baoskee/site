---
title: SQL Index
permalink: /concepts/sql-index.html
category: Computer Science
date: 2018-06-03
---

## Context

A correctly configured index can make the SQL query fast. An index is a data structure in the database that created by `CREATE INDEX` statement. 

The theory is that finding from an ordered dataset is faster than from unordered. SQI index is some ordered rows.

![Ordered](/static/images/sql-index-ordered-is-fast.jpg)

The data structures for an index are Doubly LinkedList plus B-Tree. 

Using Doubly LinkedList rather than ArrayList mainly because it's inefficient to make rooms sequential when you `INSERT` data. In Doubly LinkedList, every node has two links referring to preceding and the following node.  Each leaf node is in a database block, which is in the same size.

An index B-Tree data structure can find a leaf node quickly by traversing from the root as less block as possible. A nice feature of B-Tree is that even with huge nodes the tree depth grows slowly.

![Ordered](/static/images/sql-index-data-structure.jpg)

## Advantage

Run the WHERE clause faster if you do it right.

Queries with unique field detected like `WHERE id = 123345` can be faster If you set a PRIMARY KEY for it. 

Queries with concatenated unique fields detected like `WHERE category_id=1 and sub_category_id=2` can be faster if you set a concatenated Index. 

```
> CREATE UNIQUE INDEX category_pk ON products (category_id, sub_category_id);
> SELECT name FROM product where category_id=1 and sub_category_id=2;
```

Although we've created an index with two more fields, the index itself is still a B-tree index, only storing multiple field values in one leaf node. More importantly, order matters. Creating an index with `(category_id, sub_category_id)` can help you run query `where category_id=1 and sub_category_id=2` and query `where category_id=1` faster, but not query `where sub_category_id=2`.

## Disadvantage

After introducing the index, the speed of `INSERT`, `DELETE`, and `UPDATE` gets slower.

The more indexes you created, the slower the `INSERT` statement takes, for the simple reason that it needs to write more index data to disk, not to mention it also needs to keep index order and tree balance.

The `DELETE` statement is the happy one, for it shares the benefit of the boosted where clause querying unless you are querying without where clause. Think of it as a `SELECT` plus deletions. The actual deletion is a reverse operation of `INSERT`: remove references in the index and keep tree balance.

Modification of values of indexed fields impacts the performance of The `UPDATE` statement. Usually, the database removes old entry and adds a new one into the index, which is similar to `DELETE` + `INSERT`.

The performance of all three statements is somewhat related to the number of indexes.

## Inspect

We might have created multiple indexes on a table but have no clue which index to use. Apply with a wrong index might get the query slower than expected, as database will possibly scan much more rows. In MySQL, we can prefix a query with `EXPLAIN` to check if the engine chooses the index we want. Redesign the indexes or optimize the query if it doesn't match.

    EXPLAIN SELECT name FROM product where category_id=1 and sub_category_id=2;
