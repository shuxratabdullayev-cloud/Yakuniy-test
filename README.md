# Yakuniy Imtixon Tizimi - FAXR MADAD KONSALT

**Buxgalteriya hisobi bo'yicha yakuniy imtixon tizimi**

## 📋 Loyiha haqida

Bu loyiha buxgalteriya hisobi fanidan bilimlarni tekshirish uchun mo'ljallangan interaktiv imtixon tizimi. Tizim 7 ta asosiy mavzu bo'yicha test savollari, amaliy masalalar va buxgalteriya yozuvlarini o'z ichiga oladi.

## 🎯 Asosiy imkoniyatlar

- **7 ta mavzu bo'yicha imtixon:**
  - Kassa va Bank
  - Ish haqi
  - Asosiy vositalar
  - AV eskirish (Amortizatsiya)
  - Kreditorlar
  - Materiallar
  - Ishlab chiqarish

- **Har bir mavzu uchun:**
  - 30 ball (Test savollari)
  - 40 ball (Amaliy masalalar)
  - 30 ball (Buxgalteriya yozuvlari)

- **Interaktiv funksiyalar:**
  - ⏱️ Vaqt hisoblagich (90 daqiqa)
  - 📊 Real vaqtda ball hisoblash
  - 💾 Javoblarni avtomatik saqlash
  - 📱 Mobil qurilmalar uchun moslashtirilgan
  - 🎨 Zamonaviy va qulay interfeys

## 🚀 Ishga tushirish

### Onlayn versiya
Loyihani GitHub Pages orqali ishlatish mumkin:
```
https://[sizning-username].github.io/Yakuniy-imtixon/
```

### Lokal ishga tushirish

1. Repozitoriyani klonlash:
```bash
git clone https://github.com/[sizning-username]/Yakuniy-imtixon.git
cd Yakuniy-imtixon
```

2. `index.html` faylini brauzerda ochish:
   - Faylni ikki marta bosing yoki
   - Live Server kengaytmasidan foydalaning (VS Code)

## 📁 Loyiha tuzilmasi

```
Yakuniy-imtixon/
├── index.html          # Asosiy HTML fayl
├── styles.css          # Stillar va dizayn
├── app.js             # Asosiy JavaScript logika
├── data/
│   └── questions.js   # Barcha savollar bazasi
├── utils/
│   ├── storage.js     # LocalStorage boshqaruvi
│   └── timer.js       # Vaqt hisoblagich
├── README.md          # Loyiha haqida ma'lumot
└── DEPLOYMENT.md      # Deploy qilish yo'riqnomasi
```

## 💻 Texnologiyalar

- **HTML5** - Tuzilma
- **CSS3** - Dizayn va animatsiyalar
- **Vanilla JavaScript** - Funksionallik
- **LocalStorage API** - Ma'lumotlarni saqlash
- **GitHub Pages** - Hosting

## 🎨 Dizayn xususiyatlari

- Zamonaviy gradient ranglar
- Glassmorphism effektlari
- Smooth animatsiyalar
- Responsive dizayn (mobil, planshet, desktop)
- Intuitiv foydalanuvchi interfeysi

## 📝 Foydalanish yo'riqnomasi

1. **Mavzu tanlash:** Asosiy sahifada 7 ta mavzudan birini tanlang
2. **Ball turi tanlash:** 30, 40 yoki 30 ball turini tanlang
3. **Imtihonni boshlash:** Savollar paydo bo'ladi va taymer ishga tushadi
4. **Javob berish:** Har bir savolga javob bering
5. **Natijalarni ko'rish:** Imtihon tugagach, natijalaringizni ko'ring

## 🔧 Sozlash

Savollarni o'zgartirish yoki qo'shish uchun `data/questions.js` faylini tahrirlang:

```javascript
export const questionsData = {
  "kassa-bank": {
    "30": [
      {
        question: "Savol matni",
        options: ["A", "B", "C", "D"],
        correct: 0
      }
    ]
  }
};
```

## 🤝 Hissa qo'shish

Loyihani yaxshilash uchun:
1. Fork qiling
2. O'zgarishlar kiriting
3. Pull request yuboring

## 📄 Litsenziya

Bu loyiha ta'lim maqsadida yaratilgan va erkin foydalanish uchun ochiq.

## 👨‍💻 Muallif

**FAXR MADAD KONSALT**

---

⭐ Agar loyiha foydali bo'lsa, GitHub'da yulduzcha qo'yishni unutmang!
