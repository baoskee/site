---
title: Container and unshare
permalink: /container-and-unshare.html
category: Programming
tags: container
date: 2018-07-26
---

# Container and unshare

Unshare is a utility running program with some namespaces unshared from a parent. We create a new PID namespace below.

```
[user@julin1 ~]$ sudo unshare --fork --pid --mount-proc sh
[sudo] password for user: 
sh-4.2# ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0 115432  1808 pts/0    S    10:25   0:00 sh
root         2  0.0  0.0 155324  1848 pts/0    R+   10:25   0:00 ps aux
sh-4.2# exit
exit
```

Let's compare it with Docker. It also creates a new PID namespace.

```
[user@julin1 ~]$ sudo docker run -it --rm busybox sh
/ # ps aux
PID   USER     TIME  COMMAND
    1 root      0:00 sh
    5 root      0:00 ps aux
/ # exit
```

Ignoring other things, we're doing a similar job here, that is to create a new namespace.

Check manpage of [unshare.1](http://man7.org/linux/man-pages/man1/unshare.1.html).
