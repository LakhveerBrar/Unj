function getJSONData() {
    $.getJSON('team.json', function(data) {
      $.each(data.team, function(index, member) {
        // Create HTML elements for name, position, and bio
        var nameElement = $('<h2>').text(member.name);
        var positionElement = $('<h5>').text(member.position);
        var bioElement = $('<p>').text(member.bio);
  
        // Append elements to the #team div
        $('#team').append(nameElement, positionElement, bioElement);
      });
    });
  }
  
  function getAjaxData() {
    // Display "Loading..." while the request is in progress
    $('#team').text('Loading...');
  
    $.ajax({
      type: 'GET',
      url: 'team.json',
      dataType: 'json',
      success: function(data) {
        // Clear the "Loading..." message
        $('#team').empty();
  
        $.each(data.team, function(index, member) {
          // Create HTML elements for name, position, and bio
          var nameElement = $('<h2>').text(member.name);
          var positionElement = $('<h5>').text(member.position);
          var bioElement = $('<p>').text(member.bio);
  
          // Append elements to the #team div
          $('#team').append(nameElement, positionElement, bioElement);
        });
      },
      error: function() {
        // Display an error message if the request fails
        $('#team').text('Error: Could not retrieve content.');
      }
    });
  }
  