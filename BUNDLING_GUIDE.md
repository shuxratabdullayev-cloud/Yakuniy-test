# APP-BUNDLED.JS NI YANGILASH BO'YICHA QO'LLANMA

## ✅ OSON YO'L - Qo'lda Nusxalash

### 1-QADAM: Yangi fayl yaratish
1. `app-bundled.js` faylini oching
2. **Barcha eski kodni o'chiring** (Ctrl+A, Delete)

---

### 2-QADAM: Questions.js dan nusxalash

1. `data/questions.js` faylini oching
2. **FAQAT 2-qatorni o'zgartiring:**
   - Eski: `export const examTopics = [`
   - Yangi: `const examTopics = [`

3. **FAQAT 54-qatorni o'zgartiring:**
   - Eski: `export const questions = {`
   - Yangi: `const questions = {`

4. **Butun faylni nusxalang** (Ctrl+A, Ctrl+C)
5. `app-bundled.js` ga **qo'ying** (Ctrl+V)

---

### 3-QADAM: Timer.js dan nusxalash

1. `utils/timer.js` faylini oching
2. **FAQAT 2-qatorni o'zgartiring:**
   - Eski: `export class ExamTimer {`
   - Yangi: `class ExamTimer {`

3. **Butun faylni nusxalang** (Ctrl+A, Ctrl+C)
4. `app-bundled.js` ga **qo'shib** qo'ying (oxiriga Ctrl+V)

---

### 4-QADAM: Storage.js dan nusxalash

1. `utils/storage.js` faylini oching
2. **FAQAT 2-qatorni o'zgartiring:**
   - Eski: `export const Storage = {`
   - Yangi: `const Storage = {`

3. **Butun faylni nusxalang** (Ctrl+A, Ctrl+C)
4. `app-bundled.js` ga **qo'shib** qo'ying (oxiriga Ctrl+V)

---

### 5-QADAM: App.js dan nusxalash

1. `app.js` faylini oching
2. **1-3 qatorlarni o'chiring:**
   ```javascript
   import { examTopics, questions } from './data/questions.js';
   import { ExamTimer } from './utils/timer.js';
   import { Storage } from './utils/storage.js';
   ```

3. **Qolgan barcha kodni nusxalang** (Ctrl+A, Ctrl+C)
4. `app-bundled.js` ga **qo'shib** qo'ying (oxiriga Ctrl+V)

---

### 6-QADAM: Saqlash va Test qilish

1. `app-bundled.js` ni **saqlang** (Ctrl+S)
2. Brauzerda sahifani **yangilang** (F5 yoki Ctrl+R)
3. Mavzuni tanlang - **Modal ochilishi kerak!**

---

## 🎯 Natija

Agar hammasi to'g'ri bo'lsa:
- ✅ Mavzu tanlanadi
- ✅ Modal oyna ochiladi
- ✅ F.I.O. va Guruh so'raladi
- ✅ Ma'lumotlar saqlanadi

---

## ⚠️ MUHIM ESLATMA

Har safar `app.js`, `storage.js`, `timer.js` yoki `questions.js` o'zgartirilganda, `app-bundled.js` ni **qayta yaratish kerak**!

---

## 💡 YOKI Python Script

Agar Python o'rnatilgan bo'lsa:

```bash
cd C:\Users\Admin\.gemini\antigravity\scratch\Yakuniy-imtixon-fixed
python create_bundle.py
```

Bu avtomatik ravishda yangi `app-bundled.js` yaratadi!
