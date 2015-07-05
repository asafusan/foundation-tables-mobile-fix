  //copy the content of the TH
  specialTHContent = $('.pinned tbody:first-child th:first-child').html();

  //add the copied content with full width at the beginning of the wrapping div
  $('.pinned tbody:first-child th:first-child').filter(function () {
      return ($(this).attr("colspan") > 1)
  }).closest('.table-wrapper').prepend("<table style='width:101%;'><tbody><tr><th> " + specialTHContent + " </th></tr></tbody></table>");

  //hide the original TH
  $('.pinned tbody:first-child th:first-child').filter(function () {
      return ($(this).attr("colspan") > 1)
  }).closest('tr').hide();

  //move the pinned table down
  $('.pinned tbody:first-child th:first-child').filter(function () {
      return ($(this).attr("colspan") > 1)
  }).closest('.pinned').css({ 'top': '32px' });
