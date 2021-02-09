const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const userInput = e.target[0].value;
  if (userInput) {
    console.log(userInput);
    // Add your todo
  } else {
    alert('type something');
  }
});
