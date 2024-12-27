const greetings = [
  "Hi! 👋 My name is",
  "नमस्ते! 👋 मेरा नाम है",
  "নমস্কার! 👋 আমার নাম হল",
  "வணக்கம்! 👋 என் பெயர்",
  "నమస్తే! 👋 నా పేరు",
  "ಹಲೋ! 👋 ನನ್ನ ಹೆಸರು",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! 👋 ਮੇਰਾ ਨਾਮ ਹੈ",
  "Bonjour! 👋 Je m'appelle",
  "Hola! 👋 Mi nombre es",
  "Hallo! 👋 Mein Name ist",
  "Ciao! 👋 Mi chiamo",
  "你好! 👋 我的名字是",
  "こんにちは! 👋 私の名前は",
  "안녕하세요! 👋 제 이름은",
  "Привет! 👋 Меня зовут",
];

function updateGreeting() {
  const greetingElement = document.getElementById("dynamic-greeting");
  greetingElement.textContent = greetings[0] + " , Arit Chanda.";
  let index = 1;

  setInterval(() => {
    greetingElement.textContent = greetings[index] + " , Arit Chanda.";
    index = (index + 1) % greetings.length;
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  updateGreeting();
});
