function tick() {
  $('#ticker tr:first').slideUp(function () { $(this).appendTo($('#ticker')).slideDown(); });
}
setInterval(function () { tick() }, 500);