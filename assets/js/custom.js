$(document).ready(function() {
  $('.data-table').dataTable();

  var options = {
    valueNames: [ 'name', 'email', 'phone', 'organization' ]
  };

  var hackerList = new List('contact-list', options);
} );