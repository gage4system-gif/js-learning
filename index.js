fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => {
    console.log(data.setup)
    console.log(data.punchline)
  })
  .catch(error => console.log(error))
