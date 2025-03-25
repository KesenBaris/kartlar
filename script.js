// Kimde sıra? "top" veya "bottom"
let currentTurn = "bottom"; // ilk seninle başlıyor

const cards = [
  { image: "assets/11.png", question: "Seni en çok rahatlatan şey nedir mesela? Sessizlik mi, konuşmak mı?" },
  { image: "assets/7.png", question: "Bir şey seni çok etkilediğinde veya kızdırdığında bunu hemen paylaşır mısın, yoksa bekletir misin içinde?" },
  { image: "assets/3.png", question: "Birine güven duyman zaman alır mı? Ne belirler bu süreci?" },
  { image: "assets/19.png", question: "Biri seni kırdığında hemen belli eder misin, yoksa zamanla mı soğursun?" },
  { image: "assets/6.png", question: "Para konularında tutumun nasıldır? Hesap kitap yapar mısın mesela?" },
  { image: "assets/14.png", question: "Bir aile kurmayı hayal ettiğinde gözünün önüne nasıl bir tablo geliyor?" },
  { image: "assets/16.png", question: "Hatalar karşısında seni rahatlatan şey nedir: özür, telafi, zaman?" },
  { image: "assets/5.png", question: "Sana iyi gelen insanlar genelde nasıl insanlar olur?" },
  { image: "assets/13.png", question: "Bir konuda rahatsız olduğunda doğrudan mı söylersin, yoksa biraz zaman mı geçsin istersin?" },
  { image: "assets/8.png", question: "Değer verdiğin biri seni yanlış anladığında bunu düzeltmek için çaba gösterir misin, yoksa “beni tanımalıydı” mı dersin?" },
  { image: "assets/23.png", question: "Sessizlik mi yoksa konuşarak çözüm bulmak mı seni daha çok rahatlatır?" },
  { image: "assets/12.png", question: "Bir problem yaşadığında, çözüm için nasıl bir yol izlemeyi tercih edersin? Hemen konuşmak mı, düşünmek mi?" },
  { image: "assets/15.png", question: "Sevilmeyi en çok hangi davranışta hissedersin?" },
  { image: "assets/1.png", question: "Güvende hissetmek” deyince ne geliyor aklına? Ne sağlar bu duyguyu?" },
  { image: "assets/9.png", question: "Birlikte vakit geçirmek deyince aklına ne gelir? Sence kaliteli zaman nasıl olur?" },
  { image: "assets/17.png", question: "Bir tartışmadan sonra nasıl barışılır? Senin gönlünü en çok ne alır?" },
  { image: "assets/22.png", question: "Birlikte karar alırken dengeyi nasıl kurmak gerekir sence?" },
  { image: "assets/2.png", question: "Hangi ortamlar seni ruhen iyi hissettirir? Kalabalık mı, sessiz mi, doğa mı?" },
  { image: "assets/10.png", question: "Küs kalmayalım demek mi kolaydır senin için, yoksa biraz zaman mı istersin?" },
  { image: "assets/4.png", question: "İçini ne sıkar?" },
  { image: "assets/21.png", question: "Güvendiğin biriyle dertleşmek mi, içinden kendi halletmek mi daha rahatlatır seni?" },
  { image: "assets/20.png", question: "Seni mutlu eden küçük şeyler nelerdir? Bir çay molası mı, yürüyüş mü, müzik mi?" },
  { image: "assets/18.png", question: "Destek görmek deyince ne anlıyorsun? Yanında durmak mı, çözüm üretmek mi?" },
  { video: "assets/24.mp4", question: "🃏 Joker Kart: Sorunu Sor!", type: "joker" }

];




let topStack = [...cards];
let bottomStack = [...cards];

// Elemanları alalım
const topOptions = document.getElementById("top-options");
const bottomOptions = document.getElementById("bottom-options");
const topQuestion = document.getElementById("top-question");
const bottomQuestion = document.getElementById("bottom-question");
const nextTurnBtn = document.getElementById("next-turn");

function displayCards() {
  topOptions.innerHTML = "";
  bottomOptions.innerHTML = "";
  topQuestion.innerText = "";
  bottomQuestion.innerText = "";

  const currentStack = currentTurn === "top" ? topStack : bottomStack;
  const container = currentTurn === "top" ? topOptions : bottomOptions;

  // Kart yoksa sıradaki kişiye geçmeden önce uyarı verilebilir
  if (currentStack.length < 2) {
    container.innerText = "Kart kalmadı 💔";
    return;
  }

  // Rastgele 2 kart seç
  const shuffled = currentStack.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 2);

  selected.forEach(card => {
    const img = document.createElement("img");
    img.src = card.image;
    img.alt = "Soru Kartı";
    img.onclick = () => showQuestion(card, currentTurn);
    container.appendChild(img);
  });
}
function createFloatingEmojis(targetId) {
  const container = document.getElementById(targetId);
  const emojis = ["💖", "🌸", "💫", "🌼", "💗", "✨", "🌷", "💞"];

  // Daha fazla emoji üret, örneğin 20
  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.classList.add("floating");
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.bottom = "-30px";
    span.style.fontSize = Math.random() * 16 + 18 + "px";
    span.style.animationDelay = (Math.random() * 2) + "s"; // Dağıtılmış başlama

    container.appendChild(span);

    // 6 saniye sonra sil
    setTimeout(() => {
      span.remove();
    }, 6000);
  }
}

function startAmbientEmojis(targetId) {
  const container = document.getElementById(targetId);
  const emojis = ["💖", "🌸", "💫", "🌼", "💗", "✨", "🌷", "🩷"];

  setInterval(() => {
    const span = document.createElement("span");
    span.classList.add("floating");
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.top = Math.random() * 100 + "%";
    span.style.fontSize = Math.random() * 10 + 16 + "px";

    container.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 6000);
  }, 3000); // her 0.5 saniyede bir emoji üret
}
function launchHearts() {
  const emojis = ["💖", "💗", "💞", "💘", "💕"];
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 80 + "vh";
    heart.style.fontSize = Math.random() * 12 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

function showQuestion(card, player) {
  const container = player === "top" ? topOptions : bottomOptions;
  const questionDiv = player === "top" ? topQuestion : bottomQuestion;

  questionDiv.innerText = card.question;

  // Joker mi?
  if (card.type === "joker") {
    questionDiv.classList.add("joker");

    // 💡 Joker efektleri
    document.body.classList.add("joker-flash");
    setTimeout(() => document.body.classList.remove("joker-flash"), 1000);
    launchHearts();

    // 🎥 Video göster
    const video = document.createElement("video");
    video.src = card.video;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.style.width = "160px";
    video.style.height = "160px";
    video.style.borderRadius = "16px";
    container.innerHTML = "";
    container.appendChild(video);
	// ➕ Bu satırı ekle
video.play().catch((e) => {
  console.log("Autoplay engellendi:", e);
});

  } else {
    questionDiv.classList.remove("joker");

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = "Soru Kartı";
    img.classList.add("selected");
    container.innerHTML = "";
    container.appendChild(img);
  }

  const currentStack = player === "top" ? topStack : bottomStack;
  const updatedStack = currentStack.filter(c => c !== card);

  // Diğer kartı da çıkar (aynı anda gösterilen ama seçilmeyen)
  // Bu sırada sadece 2 kart gösteriliyordu, onlardan biri zaten card, diğerini bulalım:
  const otherCard = currentStack.find(c => c !== card);
  const finalStack = updatedStack.filter(c => c !== otherCard);

  if (player === "top") {
    topStack = finalStack;
  } else {
    bottomStack = finalStack;
  }
}


// Sıra değiştir
nextTurnBtn.addEventListener("click", () => {
  currentTurn = currentTurn === "top" ? "bottom" : "top";
  displayCards();
});


// İlk başlatma
displayCards();
startAmbientEmojis("top-float");
startAmbientEmojis("bottom-float");

