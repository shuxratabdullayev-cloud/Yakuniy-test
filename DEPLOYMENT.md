# GitHub Pages'ga Deploy Qilish Yo'riqnomasi

Bu loyihani GitHub Pages orqali jonli sayt sifatida joylashtirish uchun qadamma-qadam yo'riqnoma.

## 📋 Boshlash oldidan

- GitHub hisobingiz bo'lishi kerak
- Loyiha fayllaringiz tayyor bo'lishi kerak
- Git o'rnatilgan bo'lishi kerak (ixtiyoriy, GitHub web interfeysi ham ishlatiladi)

## 🚀 Usul 1: GitHub Web Interfeysi orqali

### 1-qadam: Yangi repository yaratish

1. GitHub'ga kiring: https://github.com
2. O'ng yuqori burchakda **"+"** tugmasini bosing
3. **"New repository"** ni tanlang
4. Repository nomini kiriting: `Yakuniy-imtixon`
5. **Public** ni tanlang
6. **"Create repository"** tugmasini bosing

### 2-qadam: Fayllarni yuklash

1. Yangi ochilgan repository sahifasida **"uploading an existing file"** havolasini bosing
2. Barcha loyiha fayllarini tortib oling (drag & drop):
   - `index.html`
   - `styles.css`
   - `app.js`
   - `data/` papkasi (ichidagi `questions.js` bilan)
   - `utils/` papkasi (ichidagi `storage.js` va `timer.js` bilan)
   - `README.md`
   - `DEPLOYMENT.md`

> **Muhim:** Papka tuzilmasini saqlang! `data/` va `utils/` papkalari to'g'ri yuklanganligiga ishonch hosil qiling.

3. Commit message yozing: "Initial commit"
4. **"Commit changes"** tugmasini bosing

### 3-qadam: GitHub Pages'ni yoqish

1. Repository sahifasida **"Settings"** (Sozlamalar) bo'limiga o'ting
2. Chap menyudan **"Pages"** ni tanlang
3. **"Source"** qismida:
   - **Branch:** `main` (yoki `master`) ni tanlang
   - **Folder:** `/ (root)` ni tanlang
4. **"Save"** tugmasini bosing

### 4-qadam: Saytni ochish

1-2 daqiqadan keyin saytingiz tayyor bo'ladi:
```
https://[sizning-username].github.io/Yakuniy-imtixon/
```

Sahifani yangilang va yuqoridagi havolani ko'ring.

## 🚀 Usul 2: Git Command Line orqali

### 1-qadam: Repository yaratish

GitHub'da yangi repository yarating (yuqoridagi 1-qadam).

### 2-qadam: Loyihani Git bilan yuklash

Loyiha papkasida terminal ochib quyidagi buyruqlarni bajaring:

```bash
# Git'ni ishga tushirish
git init

# Barcha fayllarni qo'shish
git add .

# Commit qilish
git commit -m "Initial commit: Yakuniy imtixon tizimi"

# Remote repository qo'shish
git remote add origin https://github.com/[sizning-username]/Yakuniy-imtixon.git

# GitHub'ga yuklash
git branch -M main
git push -u origin main
```

### 3-qadam: GitHub Pages'ni yoqish

Yuqoridagi **Usul 1**ning 3-qadamini bajaring.

## 🔧 Muammolarni hal qilish

### Savollar yuklanmayapti (404 error)

**Sabab:** Papka tuzilmasi noto'g'ri yuklangan.

**Yechim:**
1. Repository'da `data/questions.js` fayl yo'lini tekshiring
2. Agar faqat `questions.js` ko'rinsa, uni `data/` papkasiga ko'chiring:
   - GitHub'da `data` papkasini yarating
   - `questions.js` ni ichiga ko'chiring
   - Eski faylni o'chiring

### Mobil qurilmada ishlamayapti

**Sabab:** Kesh muammosi yoki JavaScript xatolari.

**Yechim:**
1. Brauzer keshini tozalang
2. Sahifani yangilang (Ctrl+F5 yoki Cmd+Shift+R)
3. Browser Console'da xatolarni tekshiring (F12)

### Sayt ko'rinmayapti

**Sabab:** GitHub Pages hali faollashmagan yoki xato.

**Yechim:**
1. Settings > Pages sahifasida holat tekshiring
2. 5-10 daqiqa kuting
3. Repository Public ekanligiga ishonch hosil qiling

## 📱 Mobil qurilmalarda test qilish

1. Sayt tayyor bo'lgach, telefonda ochib ko'ring
2. Barcha mavzular va tugmalar ishlashini tekshiring
3. Touch eventlar to'g'ri ishlashini tasdiqlang

## 🔄 Yangilanishlarni yuklash

Loyihada o'zgarishlar qilganingizdan keyin:

### Web interfeysi orqali:
1. Repository sahifasiga o'ting
2. O'zgartirmoqchi bo'lgan faylni oching
3. Qalamcha (Edit) tugmasini bosing
4. O'zgarishlarni kiriting
5. "Commit changes" tugmasini bosing

### Git orqali:
```bash
git add .
git commit -m "Yangilanish tavsifi"
git push
```

1-2 daqiqadan keyin o'zgarishlar saytda ko'rinadi.

## ✅ Tekshirish ro'yxati

Deploy qilishdan oldin:

- [ ] Barcha fayllar to'g'ri papkalarda
- [ ] `data/questions.js` mavjud va to'g'ri
- [ ] `utils/storage.js` va `utils/timer.js` mavjud
- [ ] `index.html`, `styles.css`, `app.js` asosiy papkada
- [ ] README.md va DEPLOYMENT.md mavjud
- [ ] Repository Public
- [ ] GitHub Pages yoqilgan

Deploy qilgandan keyin:

- [ ] Sayt ochiladi
- [ ] Barcha 7 ta mavzu ko'rinadi
- [ ] Mavzuni tanlash ishlaydi
- [ ] Savollar yuklanadi
- [ ] Taymer ishlaydi
- [ ] Javoblar saqlanadi
- [ ] Mobil qurilmada ishlaydi
- [ ] Natijalar to'g'ri hisoblanadi

## 🎉 Tayyor!

Endi sizning imtixon tizimingiz jonli va ishlaydi. Havolani talabalar bilan baham ko'ring:

```
https://[sizning-username].github.io/Yakuniy-imtixon/
```

---

**Muammo yuzaga kelsa:**
1. Browser Console'ni tekshiring (F12)
2. Network tab'da 404 xatolarni qidiring
3. Fayl yo'llarini tekshiring
4. GitHub Pages statusini qayta ko'ring

**Omad tilaymiz! 🚀**
