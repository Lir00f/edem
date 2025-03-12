<template>
  <div class="app-container">
    <!-- Header with user info and icon -->
    <div class="header">
      <div class="user-info">
        <img src="https://picsum.photos/50" class="avatar" alt="User avatar" />
        <span class="username">Эдем</span>
      </div>
      <div class="settings">
        <img src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png" alt="Settings" class="settings-icon" />
      </div>
    </div>

    <!-- Balance cards -->
    <div class="cards-container">
      <div class="card">
        <div class="card-title">Доход за друзей</div>
        <div class="card-value">0 ₽</div>
        <div class="card-subtitle">≈$0.00</div>
      </div>
      <div class="card">
        <div class="card-title">Баланс TRX</div>
        <div class="card-value">
          <img src="https://cdn-icons-png.flaticon.com/512/7016/7016532.png" alt="TRX" class="currency-icon" />
          0.00
        </div>
        <div class="card-subtitle">≈$0.00</div>
        <button class="card-button">
          <img src="https://cdn-icons-png.flaticon.com/512/565/565350.png" alt="Card" class="button-icon" />
        </button>
      </div>
    </div>

    <!-- Investment section -->
    <div class="investment-section">
      <p class="investment-text">
        Начните зарабатывать до 100% прибыли за период от 3 часов до 14 дней.
      </p>
      <button class="invest-button">
        <img src="https://cdn-icons-png.flaticon.com/512/1611/1611288.png" alt="Invest" class="button-icon" />
        Инвестировать
      </button>
      <div class="divider"></div>
      <button class="bonus-button">
        <img src="https://cdn-icons-png.flaticon.com/512/1611/1611288.png" alt="Bonus" class="button-icon" />
        Бонусные тарифы
      </button>
      <p class="bonus-text">
        Тарифы со 100% прибылью до 24 часов.
        <br />
        Информация о включении бонусных тарифов выходит в моем канале.
      </p>
    </div>

    <!-- Investment details -->
    <div class="investment-details">
      <div class="investment-info">
        <div>Инвестиция: <span class="bold">50 000 ₽</span></div>
        <div>Ваша выплата: <span class="bold">100 000 ₽</span></div>
      </div>
      <div class="time-info">
        <div class="waiting-time">Время ожидания</div>
        <div class="time-counter">07:42:32</div>
        <div class="time-limit">до 24 часов</div>
      </div>
    </div>

    <!-- Bank details -->
    <div class="bank-details">
      <ul class="details-list">
        <li>Банк: <span class="bold">Рнкб</span></li>
      </ul>
    </div>

    <!-- Bottom navigation -->
    <div class="bottom-nav">
      <div class="nav-item active">
        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="Home" class="nav-icon" />
        <div class="nav-text">Главная</div>
      </div>
      <div class="nav-item">
        <img src="https://cdn-icons-png.flaticon.com/512/681/681494.png" alt="Friends" class="nav-icon" />
        <div class="nav-text">Друзья</div>
      </div>
      <div class="nav-item">
        <img src="https://cdn-icons-png.flaticon.com/512/633/633611.png" alt="Card" class="nav-icon" />
        <div class="nav-text">Карта</div>
      </div>
      <div class="nav-item">
        <img src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt="Wallet" class="nav-icon" />
        <div class="nav-text">Кошелек</div>
      </div>
      <div class="nav-item">
        <img src="https://cdn-icons-png.flaticon.com/512/3094/3094019.png" alt="History" class="nav-icon" />
        <div class="nav-text">История</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue 3 composition API 
import { onMounted, ref } from 'vue';

// Responsive handling
const isMobile = ref(false);

onMounted(() => {
  // Check if device is mobile
  checkDevice();
  // Listen for window resize events
  window.addEventListener('resize', checkDevice);
});

function checkDevice() {
  isMobile.value = window.innerWidth < 768;
}
</script>

<style>
/* Global styles to ensure proper rendering */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #004165; /* Dark blue background like in the image */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>

<style scoped>
.app-container {
  width: 100%;
  max-width: 420px;
  min-height: 100vh;
  background-color: #111;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 16px 70px 16px; /* Added bottom padding for nav bar */
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  font-weight: 600;
  font-size: 18px;
}

.settings-icon {
  width: 24px;
  height: 24px;
  opacity: 0.7;
}

.cards-container {
  display: flex;
  gap: 10px;
  margin-bottom: 4px;
}

.card {
  flex: 1;
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 16px;
  position: relative;
}

.card-title {
  font-size: 14px;
  margin-bottom: 10px;
  color: #fff;
}

.card-value {
  font-size: 18px;
  font-weight: 600;
  color: #ffc92e;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
}

.currency-icon {
  width: 16px;
  height: 16px;
}

.card-subtitle {
  font-size: 12px;
  color: #777;
}

.card-button {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #ffc92e;
  border: none;
  border-radius: 6px;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-icon {
  width: 16px;
  height: 16px;
}

.investment-section {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.investment-text {
  margin-bottom: 16px;
  font-size: 14px;
  color: #ccc;
  line-height: 1.4;
}

.invest-button {
  background-color: #ffc92e;
  color: black;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 16px;
  width: 200px;
  justify-content: center;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #333;
  margin: 16px 0;
}

.bonus-button {
  background-color: #ffc92e;
  color: black;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 16px;
  width: 200px;
  justify-content: center;
}

.bonus-text {
  font-size: 14px;
  color: #ccc;
  line-height: 1.4;
}

.investment-details {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.investment-info {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bold {
  font-weight: 600;
}

.time-info {
  background-color: #ffc92e;
  color: black;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.waiting-time {
  font-size: 12px;
}

.time-counter {
  font-size: 18px;
  font-weight: 700;
}

.time-limit {
  font-size: 12px;
}

.bank-details {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 16px;
}

.details-list {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 14px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #111;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  border-top: 1px solid #222;
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px 0;
  flex: 1;
  color: #777;
}

.nav-item.active {
  color: #ffc92e;
}

.nav-icon {
  width: 22px;
  height: 22px;
}

.nav-text {
  font-size: 11px;
}

/* Media Queries for better responsiveness */
@media screen and (max-width: 360px) {
  .app-container {
    padding: 12px 12px 70px 12px;
    gap: 10px;
  }

  .cards-container {
    flex-direction: column;
    gap: 8px;
  }

  .card {
    padding: 12px;
  }

  .invest-button,
  .bonus-button {
    width: 100%;
  }

  .investment-details {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .time-info {
    align-self: flex-end;
  }
}

@media screen and (min-width: 361px) and (max-width: 480px) {
  .app-container {
    max-width: 480px;
  }

  .invest-button,
  .bonus-button {
    width: 80%;
  }
}

@media screen and (min-width: 481px) {
  .app-container {
    max-width: 420px;
    border-radius: 8px;
    margin: 20px auto;
    min-height: calc(100vh - 40px);
  }
}

/* CSS Reset / Normalize */
*, 
*::before, 
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body {
  line-height: 1.5;
  background-color: #004165;
  color: #fff;
}

button, 
input, 
select, 
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

ul, ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

/* Remove spinner from number inputs */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] {
  -moz-appearance: textfield;
}

/* Remove tap highlight on mobile */
* {
  -webkit-tap-highlight-color: transparent;
}
</style>