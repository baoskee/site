(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{482:function(e,t,o){"use strict";o.r(t);var n=o(43),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"diagrams-components-and-connectors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#diagrams-components-and-connectors"}},[e._v("#")]),e._v(" Diagrams, Components, and Connectors")]),e._v(" "),o("p",[e._v("How do we represent the software design? With hindsight, we can, of course, perceive the overall design by reading the code, configuration, document, and inspect the runtime data structures after code is written. But that takes a lot of efforts and is only some thoughts in our mind.")]),e._v(" "),o("p",[e._v("Drawing a diagram is a straightforward solution. A "),o("em",[e._v("diagram")]),e._v(" is a symbolic representation of the software by means of visualization. Human beings are very good at exploiting information from graphics.")]),e._v(" "),o("p",[e._v("We tend to design the software by using simple graphical elements — for example, blocks and lines. Blocks can be color-filled, shadowed, in different shapes, etc. Lines can be dashed, dotted, weighted, arrowed, curved, etc. "),o("em",[e._v("UML")]),e._v(" is a popular tool that represents the software design in different views.")]),e._v(" "),o("p",[e._v("In the software design diagram, a block represents to a component. A line represents a connector. Some texts are around the blocks and the lines for giving a supplement description.")]),e._v(" "),o("p",[e._v("A "),o("em",[e._v("component")]),e._v(" encapsulates a piece of the system that serves as a building block for the system. From a developer's perspective, components are programming language elements, such as classes, objects, modules, or a set of related functions. From an operator's perspective, components are nodes, processes, containers, services, etc.")]),e._v(" "),o("p",[e._v("When we speak of component, we often mix using component types and component instances. The component types are defined in the code, while the component instances run in the runtime.")]),e._v(" "),o("p",[e._v("A "),o("em",[e._v("connector")]),e._v(" encapsulates the interactions and data exchange between components. It represents conceptual connections between multiple components for transfering data. From a developer's perspective, connectors can be declared as import statements or implemented as sockets. From an operator's perspective, connectors are wires, gateways, proxies, etc.")]),e._v(" "),o("p",[e._v("Connectors, like components, are first citizens in the software design. It can have internal components if needed and thus simplies the design of the system. Without connectors, there will be too much components in one diagram.")]),e._v(" "),o("hr"),e._v(" "),o("p",[o("strong",[e._v("Case Study: Architecture of SQLite.")]),e._v(" Let's take SQLite's architecture diagram as an example. The below diagram shows the main components of SQLite and how they interoperate.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.sqlite.org/images/arch2.gif",alt:"SQLite architecture"}})]),e._v(" "),o("p",[e._v("SQLite (v3) consists of eleven components grouping in four categories: Core, SQL compiler, Backend, and Accessories. All these components are described as shadowed blocks, and the categories are described as color-filled blocks.")]),e._v(" "),o("p",[e._v("The arrowed connectors marks how data flows from one component to the next. It starts from "),o("em",[e._v("Interface")]),e._v(" and ends at "),o("em",[e._v("OS Interface")]),e._v(". The in and out connectors between "),o("em",[e._v("Core")]),e._v(" and "),o("em",[e._v("SQL Compilers")]),e._v(" provides a zoom-in view on "),o("em",[e._v("SQL Command Processor")]),e._v(". The missing connectors on "),o("em",[e._v("Accessories")]),e._v(" and the other components are intentionally removed to reduce distraction from reading the main data flow, which is a very common used trick.")]),e._v(" "),o("p",[e._v("In short, this diagram is a neat modeling of the design of SQLite. We only discussed how to describe the software design by drawing diagram here. If you'd like to know more about the architecture of SQLite, don't miss the document "),o("a",{attrs:{href:"https://www.sqlite.org/arch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.sqlite.org/arch.html"),o("OutboundLink")],1),e._v(". It attaches one to three short paragraphs describing each component.")])])}),[],!1,null,null,null);t.default=s.exports}}]);