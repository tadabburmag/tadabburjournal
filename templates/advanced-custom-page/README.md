قالب Advanced Custom Page لمجلة تدبر

الاستخدام

1. انسخ مجلد اللغة المناسب.
2. غيّر اسم المجلد إلى مسار الصفحة المطلوب.
3. استخدم أحرفًا صغيرة وأرقامًا وشرطات فقط.
4. عدّل index.json والعنوان والوصف واللغة.
5. عدّل index.tpl للمحتوى.
6. عدّل index.css عند الحاجة.
7. استخدم index.js للمنطق الأكبر.
8. اختبر الصفحة على Staging قبل Production.

مهم

- index.tpl وindex.json إلزاميان.
- الصفحات العربية تستخدم htmlLang = ar وhtmlDir = rtl.
- إذا أضفت CSS أو JavaScript خامًا داخل index.tpl فلفّه داخل literal و /literal وفق دليل OJS Themes.
- لا تضع أسرارًا أو مفاتيح أو Tokens داخل أي ملف.
- لا ترفع الصفحة إلى Production قبل اعتمادها وفق مسار OJT.

المرجع الداخلي

docs/ADVANCED_CUSTOM_PAGES_OJT.md
