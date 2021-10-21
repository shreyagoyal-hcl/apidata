fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then(function(response){
         // response is a json string
        return response.json();// convert it to a pure JavaScript object
    })
    .then(function(data){
         //Process Your data  
      console.log(data);
      data.forEach(element => {
          console.log('Name', element.name);
          console.log('City', element.city);
          var container = document.getElementById("myTable");
          container.innerHTML += '<tbody><tr><td>' + element.name + '</td><td>' + element.city + '</td></tr></tbody>';
      });
    })
    .catch(function(err) {
        console.log(err);
      });
