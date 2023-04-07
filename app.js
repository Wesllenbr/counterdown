

// Set the target date and time
const targetDate = new Date("April 30, 2023 23:59:59").getTime();
// new Date retorna a data e a hora atual

// Update the countdown timer every second
const interval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = targetDate - now;

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the HTML element with the remaining time
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the remaining time is zero or negative, clear the interval and display a message
  if (remainingTime <= 0) {
    clearInterval(interval);
    countdownElement.innerHTML = "EXPIRED";
  }
}, 1000);

const stopBtn = document.getElementById('stop')
console.log(stopBtn)

const stopCounter = ()=> {
    clearInterval(interval)
}
stopBtn.addEventListener('click', stopCounter)
 

