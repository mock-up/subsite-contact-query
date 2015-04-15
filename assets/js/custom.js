$(document).ready(function() {
  $('.data-table').dataTable();

  var options = {
    valueNames: [ 'name', 'city' ]
  };

  var hackerList = new List('hacker-list', options);
} );