const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

//runs the function every second, not good for performance
// requestAnimationFrame(sethandles);

setInterval(() =>{
  sethandles();
}, 1000)

function sethandles() {
  const d = new Date();
  console.log(d);
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  //360deg/12hours = 30deg for hour rotation
  //360deg/60minutes = 6deg for minute rotation
  //360deg/60seconds = 6deg for second rotation
  console.log(hours, minutes, seconds);

// make the hour handle move slighty and minute handle move slightly, not jumpping after 60sec is through
//60 sec in a min
//minute increments by 6 degrees
// 6 / 60 = 0.1 every single second it should move 0.1 degrees
const extraMintuesAngle = seconds * 0.1;
const minutesAngle = minutes * 6 + extraMintuesAngle;  

//60 min for each hour increments by 30 degrees
// 30 / 60 = 0.5 every single minute it should move 0.5 degrees
const extraHoursAngle = minutes * 0.5;
const hoursAngle = hours * 30 + extraHoursAngle;

  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
  // requestAnimationFrame(sethandles);
}


