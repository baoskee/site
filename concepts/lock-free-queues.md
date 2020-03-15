---
title: Lock-free Queues
permalink: /lock-free-queues.html
category: Programming
tags: queue
date: 2018-06-21
---

# Lock-free Queues

[[toc]]

## Context

FIFO queue is an important data structure. Queues are also being implemented in many other algorithms, such as quick-sort.

Applying queue data structure to concurrency is important. This data structure enables us to distribute information from one execution unit to another. However, it enforces us to make sure data in queue are well synchronized without being overwritten by another process or thread.

Other than trivial and tedious locking solution, there is another way to do it. It's called Lock-Free Queue.

## Introduction

Lock-free queue is a queue applying to concurrency but without locking. When using lock-free queue, slow or stopped processes do not prevent other processes from accessing data in it.

Lock-free queue has two main interfaces just like normal queue:

* Enqueue. Append a new data to the end of the queue.
* Dequeue. Pop out the first data in the head of the queue.

Lock-free queue has below advantages and disadvantages:

* Advantage
    * Faster
    * No dead-lock
    * Reentrant
* Disadvantage
    * Hard to set priority.
    * Need CPU support CAS.

## Solutions

### Compare & Swap

Compare & Swap, or CAS, is among one of modern CPU instruction set. It's used as an atom operation to change a value in memory if it's not modified.

```python
def cas(addr, expect, new):
    current = ram.get(addr)
    if current == expect:
        ram.set(addr, new)
    return current
```

It's the fundamental instruction of lock-free queue algorithm. Without this, we have to apply a lock onto the queue.

### Linked-List based

The linked-list-based lock-free queue algorithm appears below.

```python
Enqueue(x):
  q = new record
  q.value = x
  q.next = null

  repeat
    p = tail
    ok = CAS(p.next, null, q)
  until ok

  CAS(tail, p, q)    
```

Dequeue:

```python
Dequeue():
  repeat
    p = head
    if p.next == null
      return ERR_EMPTY
  until not CAS(head, p, p.next)
  return p.next.value
```

### Array based

Array-based lock-free queue is simpler than linkedlist-based. It requires a ring array. The rules are described below:

* Each element can have for possible values: HEAD, TAIL, EMPTY, and data.
* When initialized, all elements are EMPTY except two of them are HEAD and TAIL. It means this is an empty ring array.
* Enqueue operation is to update (TAIL, EMPTY) to (data, TAIL) via CAS. The queue is full if (TAIL, EMPTY) is not found.
* Dequeue operation is to update (HEAD, data) to (EMPTY, HEAD) via CAS. The queue is empty if (HEAD, TAIL) is found.

### Retry-Loop

In linkedlist-based solution, `p = tail` has a potential problem. If other threads are hanging after CAS operation but before executing `p = tail`, then current thread will be blocked.

The solution can be introducing a retry-loop:

```python
Enqueue(x):
  q = new record
  q.value = x
  q.next = null

  repeat
    while (p->next != null):
      p = next
    ok = CAS(p.next, null, q)
  until ok

  CAS(tail, p, q)   
```

### ABA problem

CAS instruction introduces one problem: if one value is being modified twice and back to its origin value at the second time, then CAS cannot find it's being modified.

We have at least two solutions:

* Double-CAS: add a counter in parallel with data. When the data is modified, the counter has to being increased.
* Ref-Count: we keep track of when it is safe to recycle a node by assigning each node a reference count, and not reusing a node until its reference count has gone to zero.

```python
RefCount_SafeRead (q):
  loop:
    p = q.next
    if p == null:
      return p
    fetch_add(p.refcnt, 1)
    if p == q.next:
      return p
    else:
      release(p)
    goto loop
```

## Conclusions

Lock-Free queues provides us better performance for concurrent queue which is non-blocking and linearizable. Although it introduces ABA problem, we have some workaround solutions for it. In general, if if don't want to lock your queue in concurrent programming, try lock-free queue algorithm.

## References

* [Implementing Lock-Free Queues](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.53.8674&rep=rep1&type=pdf)
