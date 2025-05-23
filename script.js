const countdown = document.getElementById("countdown");
const targetDate = new Date("March 7, 2026 18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdown.innerHTML = "🎉 Сьогодні свято!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `${days}д ${hours}г ${minutes}хв ${seconds}с`;
}

setInterval(updateCountdown, 1000);
