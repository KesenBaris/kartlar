// Kimde sıra? "top" veya "bottom"
let currentTurn = "bottom"; // ilk seninle başlıyor

const cards = [
  { image: "assets/1.png", question: "Seni en çok rahatlatan şey nedir mesela? Sessizlik mi, konuşmak mı?" },
  { image: "assets/2.png", question: "Kızgın olduğunda içine mi atarsın, yoksa paylaşıp rahatlar mısın?" },
  { image: "assets/3.png", question: "Kendini nasıl bir karakter olarak tanımlarsın, mesela daha çok planlı biri misin yoksa anı yaşayan?" },
  { image: "assets/4.png", question: "Biri seni kırdığında hemen belli eder misin, yoksa zamanla mı soğursun?" },
  { image: "assets/5.png", question: "Para konularında tutumun nasıldır? Hesap kitap yapar mısın mesela?" },
  { image: "assets/6.png", question: "Bir aile kurmayı hayal ettiğinde gözünün önüne nasıl bir tablo geliyor?" },
  { image: "assets/7.png", question: "Sence iyi bir anne/baba olmak neyi gerektirir?" },
  { image: "assets/8.png", question: "Çocuklara nasıl değerler kazandırmak istersin?" },
  { image: "assets/9.png", question: "Bir konuda rahatsız olduğunda doğrudan mı söylersin, yoksa biraz zaman mı geçsin istersin?" },
  { image: "assets/10.png", question: "Sence tartışmalar, bir ilişkiyi zedeler mi yoksa doğru şekilde yapıldığında geliştirici olabilir mi?" },
  { image: "assets/11.png", question: "Sessizlik mi yoksa konuşarak çözüm bulmak mı seni daha çok rahatlatır?" },
  { image: "assets/12.png", question: "Bir problem yaşadığımızda, çözüm için nasıl bir yol izlemeyi tercih edersin? Hemen konuşmak mı, düşünmek mi?" },
  { image: "assets/13.png", question: "Sana göre bir ilişkide en çok ne eksik olursa arada uzaklık başlar?" },
  { image: "assets/14.png", question: "Biri seni yanlış anladığında genelde ne yaparsın? Açıklamaya çalışır mısın yoksa 'anlamıyorsa anlamasın' mı dersin?" },
  { image: "assets/15.png", question: "Birlikte vakit geçirmek deyince aklına ne gelir? Sence kaliteli zaman nasıl olur?" },
  { image: "assets/16.png", question: "Kendini hangi zamanlarda daha enerjik hissedersin? Sabahlar mı, akşamlar mı mesela?" },
  { image: "assets/17.png", question: "Yorucu bir günün ardından kendini nasıl toparlarsın? Dinlenme biçimin nasıl?" },
  { image: "assets/18.png", question: "Hangi ortamlar seni ruhen iyi hissettirir? Kalabalık mı, sessiz mi, doğa mı?" },
  { image: "assets/19.png", question: "Kendine dair en çok geliştirmek istediğin yön ne?" },
  { image: "assets/20.png", question: "Bazen içine kapanmak istediğin olur mu? Böyle zamanlarda yanında birinin olması mı yoksa yalnız kalmak mı iyi gelir?" }
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

function showQuestion(card, player) {
  const container = player === "top" ? topOptions : bottomOptions;
  const questionDiv = player === "top" ? topQuestion : bottomQuestion;

  questionDiv.innerText = card.question;

  // Seçilen kart dışında hepsini temizle
  container.innerHTML = "";
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = "Seçilen Kart";
  img.classList.add("selected");
  container.appendChild(img);

  // Kendi stack'inden sil
  if (player === "top") {
    topStack = topStack.filter(c => c !== card);
  } else {
    bottomStack = bottomStack.filter(c => c !== card);
  }
}

// Sıra değiştir
nextTurnBtn.addEventListener("click", () => {
  currentTurn = currentTurn === "top" ? "bottom" : "top";
  displayCards();
});

// İlk başlatma
displayCards();
