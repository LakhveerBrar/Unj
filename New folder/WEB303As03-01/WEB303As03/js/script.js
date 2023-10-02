let team = $.getJSON("team.json").done(function(data){
    $.each(data.members,function(a,b){
        console.log("data a:",a,"and data b:",b);
  
        $('#team').append(`
        <h2>${b.name}</h2>
        <h5>${b.position}</h5>
        <p>${b.bio}</p>
        `);
    })  ;
  
  });
  console.log("Main team :", team);
  
  $(function Ajax() {
      $.ajax({url: "team.json", 
      beforeSend: function() {
          let loadText = $("<h2></h2>").text("Loading...");
          $(`div#team`).append(loadText);
      },
      error: function(){
          
      },
      timeout: 5000,
  
      
      success: function(data){
          $(`div#team`).empty();
          $.each(data.members,function(a,b){
              console.log("data a:",a,"and data b:",b);
        
              $('#team').append(`
              <h2>${b.name}</h2>
              <h5>${b.position}</h5>
              <p>${b.bio}</p>
              `);
          })  
      }
  });
  });