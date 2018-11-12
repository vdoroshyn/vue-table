# vue-table component

##The Task

```
Целью тестового задания является создание и публикация на Github/Bitbucket переиспользуемого vue-компонента.
Компонентом является таблица со следующим функционалом:
1. Сортировка по столбцам
2. Фильтрация по столбцам
2. Возможность редактирования ячеек
Инициатива приветствуется.
Пример данных, получаемых компонентом при его инициализации, прилагается.
```

# Github Pages with the project

[The Project can be previewed here](https://vdoroshyn.github.io/vue-table/)

## Project description

```
The table was completed as one component. The data is transferred from the parent component.
The main features are filtering, sorting, and editable fields.

Sorting is dynamic. For the number fields, the table is sorted properly.
n/a, unknown, none, and blank fields are dropped to the end and do not participate in the sorting of the column because they are irrelevant.

Editable fields are done in such a way that only one input field can be displayed at a time.
Filter and hover over the column name will disable editing.
After the field was edited and saved, it will participate in the overall sorting.

The table seems to be pretty functional. There might be bugs though. HTML and CSS layout were not prioritized during this test project.
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```
