setTimeout(function(){
  $("#home_link").removeClass("active");
  $("#emp_link").removeClass("active");
  $("#map_link").removeClass("active");
  $("#anm_link").addClass("active");
}, 1000);

function showTable(response){
  // table head
  console.log(response);
  var keys = Object.keys(response[0]);
  console.log(keys.length);
  var head = '<th class="col-md-2" scope="col">#</th>';
  for(var j=0; j<keys.length; j++){
      head += `<th class="col-md-2" scope="col">${keys[j].toUpperCase()}</th>`;
  }
  $("#table_head").html(head);

  var row='';
  for(var i=0; i<response.length; i++){
    var name = response[i].name;
    var species = response[i].species;
    var foods = response[i].foods;
    console.log(response[i].foods.likes);
    console.log(response[i].foods.dislikes);

    var foods_keys = Object.keys(foods);
    var likes = "Likes: ";
    var dislikes = "Dislikes: ";
    for(var m=0;m<response[i].foods.likes.length; m++){
      likes += " " + response[i].foods.likes[m];
    }
    for(var n=0;n<response[i].foods.dislikes.length; n++){
      dislikes += " " + response[i].foods.dislikes[n];
    }

    row += `<tr><th scope="row">${i+1}</th><td>${name}</td><td>${species}</td><td>${likes}<br>${dislikes}</td></tr>`;
    $("#table_body").html(row);
  }
}

$.get('https://learnwebcode.github.io/json-example/animals-1.json', showTable);
