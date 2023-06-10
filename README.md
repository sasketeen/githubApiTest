#  🌐 [SearchHub](https://sasketeen.github.io/githubApiTest/)

## 📖 Описание
Данный проект является тестовым заданием на вакансию VUE-разработчик. Необходимо было реализовать интерфейс поиска пользователей GitHub по логину при помощь [GitHub REST API](https://docs.github.com/ru/rest?apiVersion=2022-11-28)

## ⚙️ Функционал проекта:
- Поиск по логину
- Сортировка по кол-ву репозиториев и подписчиков
- Подгрузка списка пользователей по нажатию на кнопку в конце списка
- Открытие подробной карточки описания пользователя

## 💻 Стек технологий
- **Vue 3**
- **Vite**
- **Vue Router**: в проекте реализована главная страница с поиском и страница с подробными данными выбранного пользователя
- **Vuex**: данный стейт менеджер был указан как одно из требований к стеку технологий. В проекте он используется для хранения результатов поиска и параметров поиска. Это позволило обеспечить сохранение данных при переходе между роутаму, поэтому пользователь при возвращении назад на страницу поиска увидит свой последний запрос и его результаты, и может продолжит с ним работать
- **octokit** и **axios**: необходимы для работы с GitHub API
---
⚠️ Особенность реализации: так как у GitHub API есть ограничение по количеству запросов за единицу времени для неавторазованных пользователей, то для минимизации ненужных запросов после выбора фильтра и характера сортировки (по возрастаю/по убыванию) для их применения нужно нажать повторно на кнопку поиска, и только после этого отобразятся отсортированные данные