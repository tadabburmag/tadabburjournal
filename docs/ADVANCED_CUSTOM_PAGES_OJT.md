Advanced Custom Pages ضمن مسار OJT

الغرض

هذا الملف يلخص طريقة العمل المعتمدة لصفحات OJS المخصصة وفق دليل OJS Themes الخاص بمجلة تدبر.

قبل التنفيذ

- تحديد اسم الصفحة ومسارها.
- اسم المجلد بحروف صغيرة وأرقام وشرطات فقط.
- تحديد اللغة والاتجاه قبل كتابة الصفحة.
- تحديد ما إذا كانت الصفحة تحتاج CSS أو JavaScript إضافيًا.
- التنفيذ يكون على Staging أولًا.

بنية الصفحة

customPages/
  page-name/
    index.tpl
    index.json
    index.css
    index.js

الملفات المطلوبة

index.tpl
محتوى الصفحة المرئي من HTML.
لا يكتب كصفحة HTML كاملة.
أي CSS أو JavaScript خام داخل الملف يلف داخل literal و /literal حتى لا يفسره Smarty خطأ.

index.json
إعدادات الصفحة وبيانات head.
يجب أن يحدد على الأقل:
- access
- title
- htmlLang
- htmlDir

للصفحات العربية:
htmlLang = ar
htmlDir = rtl

index.css
اختياري.
CSS عادي فقط.
يعمل عندما تكون cssSource مضبوطة على both أو file.

index.js
اختياري.
JavaScript عادي دون build step.
المنطق الصغير يمكن وضعه قرب العنصر داخل index.tpl، والمنطق الأكبر يفضل وضعه في index.js.

أثناء التنفيذ

1. إنشاء مجلد الصفحة داخل customPages.
2. إنشاء index.json.
3. إنشاء index.tpl.
4. إضافة index.css عند الحاجة.
5. إضافة index.js عند الحاجة.
6. إضافة meta وcanonical وOpen Graph عند الحاجة.
7. اختبار الصفحة على Staging.
8. اختبار RTL والعربية والهاتف.

قبل الرفع

- اسم المجلد lowercase مع hyphens.
- index.tpl موجود ويحتوي HTML صالحًا.
- index.json موجود.
- cssSource صحيح عند استخدام index.css.
- CSS وJS الخام داخل index.tpl محاطان بـ literal.
- العربية مضبوطة على ar وrtl.
- الخطوط أو المكتبات الخارجية معرفة بصورة صحيحة.

بعد التنفيذ

- مراجعة الصفحة على Staging.
- التأكد من الرابط النهائي.
- التأكد من عدم كسر Header أو Footer أو Sidebar حسب الإعدادات.
- اعتماد إدارة المجلة قبل Production.
- توثيق الصفحة ومسارها في Issue وPull Request.

ملاحظات

- اسم مجلد الصفحة يصبح مسار URL.
- الدليل الحالي يعرض أمثلة موجودة للمشروع مثل special-issue-ar وspecial-issue-en وstatistic-ar وstatistic-en.
- الإضافة نفسها موجودة على الخادم؛ لا حاجة لتوزيع ملفات الإضافة يدويًا ما لم يطلب فريق OJS Themes غير ذلك.
