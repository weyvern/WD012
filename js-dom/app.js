// Query selector all -> nodeList
/* const pMain = document.querySelectorAll('.paragraph'); */
// getElementsBy... -> HTML collection (you can cover to array)
/* const pMain = Array.from(document.getElementsByClassName('paragraph')); */
const mySelector = 'div';
const pMain = Array.from(document.getElementsByTagName(mySelector));
//console.log(pMain);

/* const arr = ['one', 'two'];
console.log(arr);
const arr2 = Array('one', 'two', 'three');
console.log(arr2);
const arr3 = Array.from(pMain);
console.log(arr3); */

pMain.forEach(el => {
  if (el.classList.contains('class2')) {
    el.style.backgroundColor = 'green';
    el.style.color = 'white';
    /* el.innerHTML = `
        <h1>This comes from JS</h2>
    `; */
    const h1 = document.createElement('h1');
    h1.innerText = 'This comes from JS';
    el.appendChild(h1);
  } else {
    el.style.backgroundColor = 'red';
    el.style.color = 'yellow';
    el.addEventListener('mouseleave', event => {
      /*  console.log(event);
      console.log(event.clientX);
      console.log(event.clientY); */
      el.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, ${
        event.clientY + event.clientX
      })`;
    });
  }
});

/* 
// Get just one element
const pMain = document.getElementsById('main-paragraph');
pMain.style.backgroundColor = 'red';
pMain.style.color = 'white';
pMain.style.fontSize = '2rem';
pMain.classList.add('class3');
console.log(pMain.style);
console.log(pMain.className);
console.log(pMain.classList); */
