document.querySelector('html').onclick = postTime;

function postTime() {
  var ul = document.createElement('ul')
  var li = document.createElement('li')
  li.textContent = "Today's date is: " + Date();
  var div = document.querySelector('div');
  div.appendChild(ul)
  ul.appendChild(li)

}