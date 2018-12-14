---
title: What's New?
---

# Change Log

```sql
>>> SELECT * from journals order by time desc;
```

## 2018 Week 45

Dear my readers, this is the update of week 45 of 2018.

We have two new posts added into a new category - Utility. I'll introduce more tools
that are interesting or proved to be practical in this section.

* [VuePress](https://enqueuezero.com/utilities/vuepress.html)
* [Docker Compose](https://enqueuezero.com/utilities/docker-compose.html)

A new post about [Fuzzy Search](https://enqueuezero.com/fuzzy-search.html) introduces
approximate string matching algorithms and some common solutions.

The new site based on VuePress just gets released. Take it a look, please! <https://enqueuezero.com/>
The landing page is more condense.

<img src="https://pbs.twimg.com/media/DreQfkYU4AE9-b-.jpg" style="height: 200px;">
<img src="https://pbs.twimg.com/media/DreQfkVV4AARMYB.jpg" style="height: 200px;">

Let me know anything can be improved. :)

## 2018 Oct

Dear my readers, this is the update of October of 2018.

I've been unproductive in the new post for a month as I was into a dense development in [nim-markdown]. The progress of this month is the [Markdown Parser]. I was intended to write a blog post, but the output was beyond my expectation. As a side effect, the library [nim-markdown] is work-in-progress. I've received a lot of [feebacks](https://github.com/soasme/nim-markdown/issues?utf8=%E2%9C%93&q=is%3Aissue) from the Nim community, which I felt are very positive. Even better, it seems that the library will have an early consumer - nim forum might use it at some time [1]. I'll keep developing and expect more consumers.

The other post I wrote in this month was [The Architecture of SQLAlchemy](https://enqueuezero.com/the-architecture-of-sqlalchemy.html), though it seems far from complete.

Anyway, I think it's a good time shifting my focus back to the other posts I want to write. See you next time!

[Markdown Parser]: https://enqueuezero.com/markdown-parser.html
[nim-markdown]: https://github.com/soasme/nim-markdown
[1]: https://github.com/nim-lang/Nim/issues/9291#issuecomment-431945866


## 2018 Week 38

Dear my readers, this is the update of week 38 of 2018.

First thing first, four posts have been made.

* [Layered Architecture](/layered-architecture.html)
* [Pseudo-Random Numbers](/pseudo-random-numbers.html)
* [Apscheduler](/apscheduler.html)
* [WSGI](/wsgi.html)

What's more, with the help of Pelican, now subscribing the RSS feed is getting easier: [https://enqueuezero.com/feeds/all.atom.xml](https://enqueuezero.com/feeds/all.atom.xml) . You may subscribe it in any RSS reader you want.

From this week, I started to organize my work on [GitHub Issues](https://github.com/soasme/EnqueueZero/issues) & [GitHub Projects](https://github.com/soasme/EnqueueZero/projects/1). The intent was to make my work as transparent as possible. Publishing the progress of writing is also an excellent way to push me to finish a topic rather than overthink without ending writing a post. I'll try to write the articles based on the input queue order, but they might be published at any time based on their completeness.

Last but not least, I want to say great thanks to my funders. It's so amazing that I'm still being motivated after three months. So, as a gift, I want to display the avatar of my funders on the [index page](https://enqueuezero.com/) and [GitHub project index](https://github.com/soasme/EnqueueZero). To clarify, as long as you have funded at least $1, then you have the privilege to be on the list. It doesn't matter if you pull your fund at any moment in the future. You'll be in the Hall Of Fame forever. Of course, if you don't want to be on the list, let me know. :)


## 2018 Week 36

Dear my funders, there is a tremendous change on UI this week!

It's based on [Pelican](http://docs.getpelican.com/) and theme `Medius`. Almost all old posts have been migrated into the new blog. Besides, I added Disqus comment widget and tagging system.

Below is a sample screenshot.

![New Look](/static/images/2018-36-new-look.png)

Any feedback, please let me know. :)

## 2018 Week 35

Dear my funders, here comes the new issue.

[Two-Phase Locking](/2pl.html). The 2PL is the basic algorithm in relational database.

[Airbnb Architecture](/airbnb-architecture.html). It's quite interesting to outline the architecture of Airbnb without knowing too much details. Fortunately, the Airbnb engineering blog reveals a lot of information so that we can know how they implemented stuffs. We can at least know that it uses AWS heavily, uses chef to manage infrastructure, uses Rails as front-end app framework, and uses customized framework for internal microservices.

Enjoy reading. :)

## 2018 Week 34

Dear my funders,

This is the weekly newsletter on Enqueue Zero new posts. I'm trying to break  down topics into small posts. The tiddlywiki has a nice feature that it can include some other notes into one note, for example, this is the raft topic that compiles from below three raft related posts. 

* [Raft - the nature of time](/raft-and-the-nature-of-time.html)
* [Raft - The gears are unreliable](/raft-and-unreliable-network.html)
* [Raft - Exploiting the Stream Paradigm](/raft-and-stream-paradigm.html)

Besides, I have some other posts.

* [The Difference Between SLA SLO and SLI](/the-difference-between-sli-slo-and-sla.html)
* [Periodic Scheduler](/periodic-scheduler.html)
* [Timezone](/timezone.html)

Enjoy reading. :)

## 2018 Week 30

Dear my pledgers, here comes our new issue.

* [FFI](/ffi.html). Foreign Function Interface is a bridging technology between VM languages and shared libraries. I wrote this post after a tough battle in implementing FFI in my previous educable scripting language [ao](https://github.com/soasme/ao). Besides, I introduced Grammarly to help improving grammar and verbals.

* Several old posts are improved as well with the help of Grammarly.

* [Container](/container.html). I wrote this post for the entire week. Although it's not that long, it takes many time to read manual document and run commands to check container behaviors. At last I gain a deeper understanding of container. It's awesome that it could inspire someone [reddit](https://www.reddit.com/r/docker/comments/92lptc/yet_another_container_101_post/).

* I'm planning to release a set of topics as well, which will explain concepts in several ways, such as interactive demos, asciinema records, animations and so on. I was especially inspired by the keepachangelog. It can be seen as a boon to existing topics. It will based on the handy Lektor engine. 

* Goal $20 of $100 per month reached. Hooray. :)

## 2018 Week 28

Hello everyone, two weeks passed. Now I bring all ya some new posts.

* New 404 Page. I try to glue all potential topics into one posts and has integrated about 100 topics into it. I will grow it and make it as another kind of table of index.

* [Load](/load.html). This post is heavily influenced by Prometheus document but it's absolutely not tied to any specific tool or technology. Load of distributed system is much more complicated than single-box.

* [Coroutine](/coroutine.html). This post explains coroutine and compare different APIs in Lua, Python, and Ruby.

* [Language Grammar](/language-grammar.html). In this post, I introduced BNF, EBNF, ABNF. Maybe I should also put Lex/Yacc as well? Some references like Python / Go official EBNF representation are included. I also embed a tiny tutorial on how to implement a small language.

* [AO](http://github.com/soasme/ao). Reimplemented Language VM interpreter. Support raise / catch error. The weather of Cook Islands was not good and thus I have plenty of time thinking syntax. Finally I presented this solution: `value or error = call()`. It's just like Golang or Haskell but looks like in more plain English.

A little bit unpleased that I didn't create funny animated creation. Maybe next time.

Any mistake or errors, please tweet to @EnqueueZero. See you next week. :)

## 2018 Week 26

Kia ora, my pledgers. Yet another great weekends. First thing first, let's count what we have this week:

* Post: Back-pressure. Not much to say on this post. It's easy and short one. Very simple but powerful strategy to keep the system away from crashing.

* Post: URL Dispatcher. I compared several web frameworks. Well actually the idea  came from one night when my wife and I read through Django document. URL Dispatcher seems not that big a topic but the design pattern is actually being spread into so many frameworks. 

* Source code: github.com/soasme/linkedlist. To be honest, I haven't had enough time to nail down verbals for this. I just wrote a pure C library that implemented LinkedList data structure and some important interfaces. Even though I gained a huge pleasure when coding. I felt like I was back to Uni and upload my course homework. Coding just refreshed my memory. Next week, I'll write one post on it.

* Source code: github.com/soasme/ao. This week I was traversing somewhere very corner in the Internet and found this: picol - A pure C implementation of TCL script written by @antirez. I'm not strong enough like @antirez just using 3 hours implementing a scripting language in pure C. Actually it took me entire day over the weekend, and some more earlier days to design the minimal language syntax. Eventually in this Sunday night, I could finally place it on the table of this week's update in time. It is still buggy but I'll try to make it implement correctly next. Either way, I think I have so much thing to discuss from practicing: EBNF, Opcode design of different languages, JIT, etc. It's so fun!

Sorry didn't create that much posts like previous week but I think coding is just as much important as writing, and it's worthwhile taking equal time. I will have a PTO last week to Cook Islands for a few days break, so not much update next week. But I promise I'll create more after back!