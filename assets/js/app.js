class CountdownTimer {
  constructor(targetDate, daysID, hoursId, minutesId, secondsId) {
    this.targetDate = new Date(targetDate).getTime();
    this.daysElement = document.getElementById(daysID);
    this.hoursElement = document.getElementById(hoursId);
    this.minutesElement = document.getElementById(minutesId);
    this.secondsElement = document.getElementById(secondsId);
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = this.targetDate - now;
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      this.daysElement.textContent = `${days} `;
      this.hoursElement.textContent = `${hours} `;
      this.minutesElement.textContent = `${minutes}`;
      this.secondsElement.textContent = `${seconds}`;

      if (remainingTime <= 0) {
        this.stop();
        this.countdownElement.innerHTML = "EXPIRED";
      }

    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }
}

const countdownTimer = new CountdownTimer("December 25, 2023 23:59:59", "countdown-days", "countdown-hours", "countdown-minutes", "countdown-seconds");
countdownTimer.start();



