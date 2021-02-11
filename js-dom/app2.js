const form = document.getElementById('form');

form.addEventListener('submit', event => {
  console.log(event);
  event.preventDefault();
  const userInput = event.target[0].value;
  if (userInput) {
    console.log(userInput);
    // Add your todo
  } else {
    alert('type something');
  }
});
