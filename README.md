# Oltin Shaxmat

Node.js 20 yoki yangi versiya kerak. Tashqi paketlar talab qilinmaydi.

Ushbu papkada terminal ochib npm start buyrug‘ini bajaring. Brauzerda http://localhost:3000 manziliga kiring.

Ikki akkaunt uchun ikki brauzer yoki oddiy va inkognito oynani ishlating. Bir tarmoqdagi boshqa qurilmadan server kompyuterining IP manzili va 3000-port orqali kirish mumkin; firewall bunga ruxsat berishi kerak. Internet orqali o‘ynash uchun Node.js hosting va HTTPS kerak.

Har hisobga 8 xonali ID va bir marta 1 000 000 virtual so‘m beriladi. Bot narxlari: oddiy 1 000, o‘rtacha 5 000, qiyin 10 000, afsonaviy 15 000. G‘alabada 2 baravar, durangda kirish puli qaytariladi. Do‘stlar o‘yinida har biridan 10 000 olinadi; g‘olib 20 000 oladi; durangda ikkisiga ham 10 000 qaytadi.

ID bilan do‘st qidirish, do‘stlik so‘rovlari, shaxsiy xabarlar va o‘yin takliflari mavjud. Oltin doim boshlaydi. Taklif yuborgan o‘yinchi oltin donalarni oladi.

Bot minimax qidiruvi va material/pozitsiya bahosidan foydalanadi. Darajalar 1/2/3/5 chuqurlikkacha, 80/220/650/1800 ms vaqt chegarasi bilan ishlaydi. Afsonaviy eng kuchli ichki daraja; professional dvigatel emas.

Hisoblar, scrypt parol xeshlari, balanslar, o‘yinlar va xabarlar data.json faylida saqlanadi. Uni zaxiralang va ochiq ulashmang. Bitta server jarayonini ishlating. Server qayta ishga tushsa qayta login qiling; hisob va o‘yinlar saqlanadi. Virtual so‘m haqiqiy pulga almashtirilmaydi.

Katta ommaviy xizmat uchun tranzaksiyali baza, HTTPS va autentifikatsiya tezligini cheklash talab etiladi.

Tekshirish: npm test — 20/400/8902 yurishlar, mot, rokirovka, en passant va piyoda almashishi. Ikki vaqtinchalik akkaunt bilan bonus, do‘stlik, chat, multiplayer, navbat, tikish va to‘lovlar, takroriy to‘lovni rad etish, 4 bot narxi va yurishlari ham tekshirilgan.

## Internet va Google uchun

Dockerfile bilan bitta Node.js serverini joylang. PORT hosting portiga moslanadi. DATA_DIR doimiy saqlash jildiga yo‘naltirilishi kerak; konteynerdagi odatiy yo‘l /app/data. PUBLIC_URL qiymatini hosting bergan haqiqiy HTTPS manziliga tenglang. Maxfiy hisob ma’lumotlari Docker tasviriga qo‘shilmaydi; mavjud hisoblarni ko‘chirish kerak bo‘lsa data.json faylini yopiq tartibda doimiy diskka ko‘chiring.

/haqida — ochiq tanishtiruv sahifasi. /robots.txt Google botiga ruxsat beradi va /api/ yo‘lini cheklaydi. /sitemap.xml faqat PUBLIC_URL berilgach yaratiladi; manzil sozlanmaguncha 503 qaytaradi. Canonical URL ham haqiqiy PUBLIC_URL bilan yaratiladi.

Ochiq HTTPS manzil olingach Google Search Console hisobida shu manzilga egalikni tasdiqlash va sitemap.xml ni yuborish kerak. Google indekslashni kafolatlamaydi.
