Привет всем!

    перед началом:



Здесь я пытаюсь показать свое понимание верстки будучи новечком. Я не использую сторонние библиотеки или фреймворки для написания HTML. Я использую автоматизацию на gulp 4, написанную мной лично, она очень проста и не содержит сложных задач, она присутствует для компиляции sass и автоРелоада странички. Я пишу на sass вместо ванильного css, чтобы изучить этот инструмент как можно быстрее, так как писать на ванильном css не актуально. У меня пока нет большого опыта, но я постараюсь сделать рабочую версию макета адаптивной (не под стандартную сетку размеров, а под свою). Спасибо за внимание.


    после финиша:

И вот я наконец то завершил свой первый учебный проект после долгого перерыва. Что ж, как по мне получилось неплохо. Да это долеко не топовый результат для профессионала, но хэй, я еще новичек! 

Стек технологий который я применял:

1) Конечноже HTML, я не использовал Pug потому, что еще не умею его использовать. Хотя мне хотелось, но тогда я бы переусложнил задачу =)

2) Это SASS, люблю sass так же сильно как и ненавижу, помню беззаботные деньки когда я писал на ванильном css и не парился. Да, работа шла медленно, но боже, как же это было легко! Но нет! Им надо было добавить матиматику в долбанную верстку!

3) Gulp - его я исспользовал для того что бы sass компилился самостоятельно. Так же потому, что я слишком ленив для того чтобы сотни раз тыкать на перезагрузку страницы. Gulp - это то, что я понастоящему люблю! Я всегда стараюсь писать все таски сам, потаму, что люблю это делать!

4) Породия на БЭМ - я неумею в бэм, но стараюсь хотя бы немного походить на него, конечно рано или поздно я его выучу... рано... или поздно...

С какими трудностями я столкнулся:

1) Ну, самая большая трудность это не запутаться в собственном дерьме. Я старался придерживатся разделенной структуры проекта, как вы могли заметить, все стили в sass файлах разделены по своему предназначению (ну как я это вижу =) ), казалось бы это удобно, но с непревычки оооочень сильно путаешься.

2) Долбанный position:fixed"! Просто нахрен его! Ну, на самом деле ответ я нашел довольно быстро, однако мое решение меня не устраивает но мать твою, другого выхода я не нашел >=\ , не сомниваюсь, что мог просто плохо искать. Все дело в том, что при использовании перехода к якорю, по нажатию на ссылку в меню навигации, твой "header" залезает на блок, я воткнул небольшей "span" в верстку чтобы с помощью  относительного позиционирования поднять его чуть выше (на размер моего хедера = 95px) и "анкориться" на него. Это помогло мне.

Если кто то эту телегу дочитал, спасибо что уделил мне время, я старался выполняя эту работу! 




Hi there!

    before start:

Here I am trying to show my understanding of layout by a beginner; I do not use third-party libraries or frameworks for writing HTML. I use automation on gulp 4 written by me personally, it is very simple and does not contain complex tasks, it exists to compile sass and restart the browser. I am writing in sass instead of vanilla css in order to learn this tool as quickly as possible, since it is not difficult to write on vanilla css. I am not experienced yet, but I will try to make a working version of the layout. Thanks for your attention.

    after finish:

And so I finally completed my first training project after a long break. Well, how good it turned out for me. Yes, this is far from the top result for a professional, but hey, I'm still a beginner!

The technology stack that I used:

1) Of course, HTML, I didn’t use Pug because I don’t know how to use it yet. Although I wanted to, but then I would re-complicate the task =)

2) This is SASS, I love sass as much as I hate, I remember carefree days when I wrote on vanilla css and did not steam. Yes, the work went slowly, but God, how easy it was! But no! They needed to add mathematics to the fucking layout!

3) Gulp - I used it to compile sass on my own. It’s also because I'm too lazy to poke a page reload hundreds of times. Gulp is what I truly love! I always try to write all the tasks myself, because I like to do it!

4) Species of BEM - I don’t understand Bem, but I try to at least resemble it a little, of course sooner or later I will learn it ... sooner ... or later ...

What difficulties did I encounter:

1) Well, the biggest difficulty is not getting lost in your own shit. I tried to adhere to the divided structure of the project, as you can see, all the styles in the sass files are divided according to their purpose (well, as I see it =)), it would seem convenient, but you are very confused with unaccustomedity.

2) Fucking position: fixed "! Just fuck it! Well, actually I found the answer pretty quickly, but my solution doesn’t suit me but your mother, I didn’t find another way out> = \, I have no doubt that I could just look badly The thing is that when using the transition to the anchor, by clicking on the link in the navigation menu, your "header" crawls onto the block, I stuck a small "<span>" in the layout to raise it slightly higher with relative positioning (by my header size = 95px) and anchor onto it. It helped me.

If someone read this cart, thanks for your time, I tried to do this job!
