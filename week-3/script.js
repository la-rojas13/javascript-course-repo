setInterval(showTime, 1000)
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

function showTime()
{
  const day = new Date();
  const secondsRatio = day.getSeconds()/60;
  const minutesRatio = (day.getMinutes() + secondsRatio)/60;
  const hoursRatio = (day.getHours() + minutesRatio + offset) /12;
  
  const hourHand = document.querySelector('[data-hour-hand');
  const minuteHand = document.querySelector('[data-minute-hand');
  const secondHand = document.querySelector('[data-second-hand');
  
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
  element.style.setProperty(`--rotation`, rotationRatio *360);
}


showTime();