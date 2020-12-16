# Elad's cloth store project
 server and cleint side
 
 for Alon:

 פרויקט Angular +C# ראשון :
מטרת הפרויקט:

פיתוח אתר קטלוג מוצרים/חנות – הכולל את המאפיינים הבאים:

ממשק משתמש:
הצגת מוצרים✓
אפשרות להוסיף מוצר לסל הקניות✓
אפשרות לבצע הזמנה של מוצר.✓
אפשרות להרשם לניוזלטר של החנות✓
ממשק ניהול:
אפשרי להכנס רק עם התחברות לחשבון ייעודי דרך Firebase.✓
אפשר לערוך, למחוק, להוסיף מוצר והזמנה.✓-to add a product you can add in postman for now it still need a little work, there's a service biult just for that in the store.
רק בממשק הניהול ניתן לראות את כל המשתמשים שנרשמו לניוזלטר של החנות.✓
רק בממשק הניהול ניתן למחוק משתמש או לערוך פרטי משתמש שנרשם לניוזלטר.✓
צד שרת:
יצירת API המכיל את הנתיבים הבאים:

/newsletter – הצגת כל המשתמשים שנרשמו לניוזלטר✓
/products – הצגת המוצרים שיש לחנות להציע.✓
/orders – יציג את כל ההזמנות ופרטיהם.✓
/categories – מחזיר את כל קטגוריות המוצרים✓
כל נתיב ב API מאפשר ביצוע של הפעולות CRUD כפי שלמדנו.✓-there's a service filld with all the crud options for the store

 מסד הנתונים:
טבלת משתמשים –
לכל משתמש יש מספר מזהה (ID) שם וכתובת מייל.✓
טבלה הזמנות –
לכל הזמנה יש את הפרטים הבאים:
-מספר מזהה✓
-שם מלא✓
-טלפון✓
-אימייל✓
-כתובת✓
-משלוח – כן או לא✓ site work only on deliverys
-מספר מזהה של המוצרים✓
-מחיר כולל✓
-הוספת ברכה אישית להזמנה✓
– סטטוס הזמנה (נשלח ללקוח או לא)✓
-הערות✓
טבלת מוצרים-
-מספר מזהה✓
-שם המוצר✓
-תיאור המוצר✓
-קטגוריה✓
-צבע✓
-מחיר✓
-משקל. its a cloth store
צד הלקוח באפליקציה – משתמש:
עיצוב:
העיצוב נתון לשיקול דעתכם, בהתאם לסוג החנות אותה אתם רוצים לבנות.

מסכים ופונקציונאליות:

מסך הצגת מוצרים:

אפשרות לצפיה בכל המוצרים✓
צפיה לפי קטגוריות✓
סינון מוצרים – מהמחיר הזול ליקרX ill do it in the near future
סינון מוצרים – מהמחיר היקר לזולX ill do it in the near future
מסך הזמנה:

טופס למילוי פרטי הרשמה✓ you can sighn in with google
בחירת עיר – מתוך רשימה (נתונים מ API)X ill do it in the near future
ולידציה – שדות חובה✓
כפתור ביצוע ההזמנה לא לחיץ אם השדות לא מלאים כראוי.X ill do it in the near future
סל קניות:

ניתן לראות את כל המוצרים שיש בסל✓
ניתן למחוק/לערוך את המוצרים שיש בסל הקניות.✓
ממשק הניהול:

התחברות עם google/facebook.✓

חלון ניהול הזמנות:

ניתן לשנות סטטוס להזמנה.✓
ניתן לערוך,למחוק, הזמנה קיימת.✓
ניתן להוסיף הזמנה חדשה.✓

חלון ניהול המשתמשים:

ניתן להסיר משתמש מהניוזלטר✓
עדכון/שינוי כתובת מייל או שם משתמש.✓

חלון ניהול מוצרים:

אפשרות להוסיף מוצר – בחלון ההוספה יהיה ניתן לבחור קטגוריה מרשימה נגללת של קטגוריות (שמגיעות מ API)X for now its only in postman ill do it in the future
אפשרות לערוך ולמחוק מוצר.✓
אפשרות להוסיף/לערוך/למחוק קטגוריה.X for now its only in postman ill do it in the future

בהצלחה!


By the time this project is on github there might be update's ready contact me for more !


this project uses: angular framework ,visual studio ,firebase Authentications ,python ,bootstrap ,To form a fully functional cloth store.