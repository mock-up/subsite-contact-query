$(document).ready(function() {
  $('.data-table').dataTable();

  var options = {
    valueNames: [ 'name', 'email', 'phone', 'county', 'department' ]
  };

  var hackerList = new List('contact-list', options);
} );