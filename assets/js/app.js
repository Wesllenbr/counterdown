class CountdownTimer {
  constructor(targetDate, daysID, hoursID, minutesID, secondsID) {
    // Get the date and time for the target date and time
    this.targetDate = new Date(targetDate).getTime();
    // Get the elements that display the timer values
    this.daysElement = document.getElementById(daysID);
    this.hoursElement = document.getElementById(hoursID);
    this.minutesElement = document.getElementById(minutesID);
    this.secondsElement = document.getElementById(secondsID);
    this.interval = null;


    // create a new MutationObserver object
    this.observer = new MutationObserver((mutationsList, observer) => {
      
      // loop through the mutations to check for changes to the timer values
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const flipDownElement = mutation.target; // the element that changed
          // add a class to trigger the flip down animation
          flipDownElement.classList.add('flip-down');
          // remove the class after a short delay to allow the animation to complete
          setTimeout(() => flipDownElement.classList.remove('flip-down'), 500);
        }
      }
    });

    // configure the observer to watch the elements that display the timer values
    this.observer.observe(this.daysElement, { childList: true });
    this.observer.observe(this.hoursElement, { childList: true });
    this.observer.observe(this.minutesElement, { childList: true });
    this.observer.observe(this.secondsElement, { childList: true });
  }

  start() {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = this.targetDate - now;
  
      if (remainingTime <= 0) {
        this.stop();
        this.daysElement.textContent = '00';
        this.hoursElement.textContent = '00';
        this.minutesElement.textContent = '00';
        this.secondsElement.textContent = '00';
        return;
      }
  
      const remainDaysTime = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 364)).toString().padStart(2, '0');
      const remainHoursTime = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const remainMinutesTime = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const remainSecondsTime = Math.floor((remainingTime % (1000 * 60)) / 1000).toString().padStart(2, '0');
      console.log(remainSecondsTime)
  
      this.daysElement.textContent = `${remainDaysTime} `;
      this.hoursElement.textContent = `${remainHoursTime} `;
      this.minutesElement.textContent = `${remainMinutesTime}`;
      this.secondsElement.textContent = `${remainSecondsTime}`;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }
}

const countdownTimer = new CountdownTimer("2026-11-25", "countdown-days", "countdown-hours", "countdown-minutes", "countdown-seconds");
countdownTimer.start();
