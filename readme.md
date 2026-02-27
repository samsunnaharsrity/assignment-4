1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:The difference between getElementById ,getElementsByClassName, and querySelector / querySelectorAll :-
it is a vary important things in our wev development . there is
i)  getElementById is used to select any kind of unique Id .It works only this types single Id .Id makes priority first.

example:<div id ="mainSec"></>

ii) getElementsByClassName: it select multiple elements of class.it used only class name value.It returns multiple value

iii)  querySelector :It returns only first one value

iv)   querySelectorAll: it returns multiple value in the section of the matches class or value.

2. How do you create and insert a new element into the DOM?
ans: to create and insert a new element into the dom:-
first- 
    create dom div :- document.createElement('div') it also creates
    i) html elements
    ii) text element
    iii) p= paragraph element
    iv) inner.text

it insert value:-
parentElement.appendChild('new items')


3. What is Event Bubbling? And how does it work?
ans: Event Bubbling is default js mechanism .It triggered the event child .If we click a btn inside a div it clicks and first trigger on the btn, then move up to the parents div.

4. What is Event Delegation in JavaScript? Why is it useful?
ans:-Even Delegation is the technique of attaching a single event listener.Its handle parent event to its child elements.


example:-  i) it helps Dynamically Element handling
ii) improve performance


5. What is the difference between preventDefault() and stopPropagation() methods?
ans:- The difference between preventDefault() and stopPropagation() methods

 preventDefault() : this methods stops the browsers default behavior for an elements and don't stop the propagation

 stopPropagation() : stopPropagation() is a js event method .it stop trigger upper parent .