

function getData(){
  var data = [
    {"firstName":"Anand","lastName":"Gangadharan","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Anand","lastName":"Gangadharan","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Unni","lastName":"Krishnan","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Anand","lastName":"Gangadharan","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Sarat","lastName":"Ramachandran","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Anand","lastName":"Gangadharan","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Rakesh","lastName":"Chandra","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Anand","lastName":"Gangadharan","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Abhayadev","lastName":"Sankaran","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Anand","lastName":"Gangadharan","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Nithya","lastName":"Subhaga","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Anand","lastName":"Gangadharan","age":"37","city":"TVM","car":"Jetta"},
    {"firstName":"Suraj","lastName":"Sasikumar","age":"37","city":"TVM","car":"Jetta"}
  ];
  return data;
}

data = getData();

function makeTableHeader(){
  header = Object.keys(data[0]);
  var $tr = $('<tr>')
  var $thead = $('<thead>').append($tr);
  $(function() {
    $.each(header, function(i, col) {
        $tr.append($('<th>').text(col));
    });
  });
  return $thead;
}

function makeTableFooter(){
  header = Object.keys(data[0]);
  var $tr = $('<tr>')
  var $tfoot = $('<tfoot>').append($tr);
  $(function() {
    $.each(header, function(i, col) {
        $tr.append($('<th>').text(col));
    });
  });
  return $tfoot;
}

function makeTableBody(){
  var $tbody = $('<tbody>')
  $(function() {
    $.each(data, function(i, item) {
        var $tr = $('<tr>').append(
            $('<td>').text(item.firstName),
            $('<td>').text(item.lastName),
            $('<td>').text(item.age),
            $('<td>').text(item.city),
            $('<td>').text(item.car)
        );
        $tbody.append($tr);
    });
  });
  return $tbody;
}

function loadTable(){
  $('#records_table').append(makeTableHeader());
  $('#records_table').append(makeTableFooter());
  $('#records_table').append(makeTableBody()).ready(function(){

    $('#records_table').DataTable();
  });
}

$(document).ready(function () {
        loadTable();
});
