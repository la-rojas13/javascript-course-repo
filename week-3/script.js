let offset = 0;

function readForm() {
  let radioButtons = document.getElementsByName('timezone');
  let option = '';
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked == true) {
      option = radioButtons[i].value;
    }
  }
  switch (option) {
    case 'cst':
      offset = 0;
      break;
    case 'est':
      offset = 1;
      break;
    case 'mst':
      offset = -1;
      break;
    case 'pst':
      offset = -2;
      break;
    case 'ast':
      offset = -4;
      break;
    case 'hst':
      offset = -5;
      break;
    default:
      offset = 0;
      break;
  }
  document.getElementById('timezone-user').innerHTML = option;
}

function printDate() {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let session = hour >= 11 ? 'pm' : 'am';
  let time = hour + offset + ':' + minute + ':' + seconds + session;
  //document.getElementById('time').innerHTML = time;
  setTimeout(printDate, 1000);
}
printDate();
