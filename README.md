# Assignment-5-Emergencies
# Assignment-5-Emergencies
1.
getElementById: we use it to get the specific element by giving it a unique id...
getElementsByClassName : we use it to get  those classes which match with the class name...
querySelector : it gets the first elemnet that matches..
querySelectorAll: select all the names that matches the given selector

2.
 #create and insert a new element into the DOM

we use document.createElement() to create a new html element...
and we use appendchild() to insert the element.

3.
#Event Bubbling
Event bubbling is a process in DOM where an event start from the innermost target elemnt and then bubble up through its parent elemnt ultil it reach the root of dom.

4.
EVent delegation in js is a technique where instead of adding event listners to multiple child elements, its use a single event listner to their parent element and use event bubbling to detect which child triggered the event.
its improve perfomance, make the code easy and clean to understand and maintain,  and handles adding dynamic element.

5.
preventDefault():stops the default behaviour of an element.
stopPropagation(): stops the event from bubbling up the root of dom.

