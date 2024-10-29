//      fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

     fetch('https://jsonplaceholder.typicode.com/users/2')
     .then(response => response.json())
     .then(data => {
         console.log(data);
        //  document.body.innerHTML = <pre>${JSON.stringify(data, null, 2)}</pre>;   --- Veya
         document.write(JSON.stringify(data));
  })
 .catch(error => console.error(error));



    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error))
    
