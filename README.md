Тестовое задание

Результаты выполнения тестового задания следует опубликовать на GitHub или захостить на любой открытой платформе (например, Github Pages) и отправить на почту devops@brick.dev. Тестовое задание состоит из двух задач.
1. Ansible playbook

Необходимо написать Ansible playbook, который выполняет на хосте следующие действия:

    создает нового пользователя brickdev с паролем pass
    разрешает на хосте авторизацию через ssh по ключу
    запрещает логин по ssh от пользователя root
    копирует предоставленный публичный ключ для пользователя cloudru

Плейбук должен выполняться относительно чистого дистрибутива ОС Debian 12. Для написания и проверки плейбука можно локально развернуть VM с помощью любого удобного инструмента виртуализации (VirtualBox, VmWare Fusion, VmWare Fusion Player, Hyper-V, ...)

Публичный ключ для публикации на хост:

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDDW1sg+ys6EEZd6ZzbDlrMMybOBUALEtERY2/ZKsvgbcAzTERxbtsqu+iNNDBo+sf3L3YuWkd8fLH4SJ3MQV42ySc6ml2tMT0G2r+QIWwFz+nPaD2DY8blgFpsa41TZxwKgLmqEtUVlps9Q6Un5KtJMjTl2MWYKswdxSqHw8em0DNigJolWfzsmoTvd1HXTYdj/PiJECW3nS38PFlL19Av6ipwrbxme2/VyvjolX5F3p/dgLkuUU7UMQ+tlx9gAlN0F/Tf6zMHSubIBC7lOf58zP+IlykdD4leVaNpFckk9hxnKCZpyM7jlwi2YSnYLAOh4v56NTq7c/yG2jX9+lSb

Полученный плейбук и команду для его запуска положить в папку /playbook
2. Web приложение на NodeJS
Приложение

Требуется написать простое веб-приложение на NodeJS, которое слушает входящие соединения на порту 8000 и предоставляет HTTP API, в котором реализовано 3 метода:

    GET /hostname - при запросе на этот метод приложение отдает имя хоста, на котором запущено приложение
    GET /author - возвращает значение переменной окружения $AUTHOR, в которой задано имя или никнейм человека, выполняющего это задание
    GET /id - возвращает значение переменной окружения $UUID, содержащее любую произвольную строку-идентификатор в формате uuid

Dockerfile

Необходимо написать Dockerfile для полученного приложения в соответствии с принятыми в сообществе best-practice.

Полученный скрипт и Dockerfile к нему положить в папку /app
Docker compose
Далее необходимо написать docker-compose.yml для запуска приложения с 3 репликами. Реализовать health checks. В переменную UUID должен подставляться номер реплики, в котором запущено приложение.
