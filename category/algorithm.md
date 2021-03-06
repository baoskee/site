---
title: Algorithm
---

# Algorithms

## [Count Distinct](/count-distinct.html)

Count-distinct problem is a problem of finding the number of distinct elements in a data set or data stream, within which you might possibly see some repeated elements. For example, `[1, 3, 2, 1, 5, 2, 4]` has 5 distinct elements `[1, 2, 3, 4, 5]`.

## [HyperLogLog](/hyperloglog.html)

HyperLogLog is an algorithm that can solve Count Distinct problem. It can provide estimated count on a very large data stream.

## [MurmurHash](/algorithms/murmur-hash.html)

MurmurHash is in the family of general purpose hashing algorithms. In particular, it's only suitable for non-cryptographic usage.

## [Two Sum](/algorithms/two-sum.html)

Question:

```
Given dict D, array nums,

* any j: D.get(nums[j]) = j, 0 <= j < lens(nums).
* exist i: D.get(target - nums[j]) = i, iff target - nums[j] in D.
```

Hint: Reducing variables in the problem is the key to a simpler solution.
