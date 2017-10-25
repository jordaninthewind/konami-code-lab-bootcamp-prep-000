const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var index = 0;

// const wnd = document.querySelector('window');

window.addEventListener('keydown', function() {
  init(x);
});

function init(x) {
  let key = parseInt(x.which || x.detail);

  if (key === code[index]) {
    index++;
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
  }
}
