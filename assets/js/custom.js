$(document).ready(function() {
  $('.data-table').dataTable();

  var options = {
    valueNames: [ 'name', 'born' ]
  };

  var hackerList = new List('users', options);
} );