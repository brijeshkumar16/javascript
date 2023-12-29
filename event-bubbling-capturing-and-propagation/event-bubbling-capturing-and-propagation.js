// Event Bubbling, Capturing , Stop Propagation , Immediate Propagation and Prevent default in JavaScript

const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Event bubbling mean event start from child to parent and event capturing mean  parent to child
// use true in event listener for capturing.
// stop Propagation mean stop flow of parent to child or child to parent
// prevent default mean stop the default behavior of any element of tag.

parent.addEventListener('click', (event) => {
  console.log('Capturing Phase: Parent');
});

child.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Capturing Phase: Child');
});
