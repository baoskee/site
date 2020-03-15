---
title: Raft and Unreliable Network
permalink: /raft-and-unreliable-network.html
category: Architecture
tags: raft, network
date: 2018-08-14
---

# Raft and Unreliable Network

The synchronization of the Raft states among nodes in the cluster imposes order on messages. However, the unreliable gears make the ordering very difficult. Sometimes, it plays like a thief stealing your data packets. Sometimes, it plays like a jerk swapping the order of data packets sending to a node. Even worse, if the CPU core accidentally has a bit flip, then the node might handle wrong messages all the time. Dr. Lamport called it Byzantine generals problem.

In C code, we might want to register a callback function to exit so that some cleanup logics can be executed when the program exits. On the contrary, if the gears failed, they would very likely fail silently. Since they don't have a chance to shout it out, it seems no easy way for the system to sense that. In the worst case, the failed gear sends out wrong messages, pretending to be functional. It implies that we also need to introduce some auto-correction technique in the software layer as the electrical faults are utterly unavoidable.

The consensus algorithm must overcome this problem. Several solutions have been presented.

* Bitcoin introduces BlockChain, Proof of Work to solve the problem.
* Paxos introduces Client, Proposer, Acceptor, Learner to solve the problem.
* Raft introduces Follower, Candidate, Leader to solve the problem.
