window.addEventListener('DOMContentLoaded', function() {
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].setAttribute('rel', 'noreferrer noopener');
    links[i].setAttribute('target', '_blank');
  }
});
