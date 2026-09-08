# CHAPTER 16 — Внешняя сборка

## Narrative Purpose

Вывести игрока из игрового редактора в профессиональные инструменты без превращения инструментов в ранний барьер.

## Curriculum Coverage

C16. Порт Инструментов: локальный JDK, IDE, debugger, Git, branch/merge, Maven, Gradle, logging.

Related Curriculum IDs: JAVA-C16-L01, JAVA-C16-L02, JAVA-C16-L03, JAVA-C16-L04, JAVA-C16-L05, JAVA-C16-L06, JAVA-C16-L07, JAVA-C16-L08.

## Starting Situation

Порт принимает учебный проект героя, но для связи городов нужен код, который можно собрать, запустить, отладить и передать другой команде.

## Central Problem

Игровой терминал удобен для обучения, но настоящий проект требует структуры и истории изменений.

## Why Existing Knowledge Is Not Enough

Java-код уже работает, но без инструментов его нельзя безопасно сопровождать.

## New Knowledge

JDK, `javac`, `java`, IDE, breakpoint, step over/into, Git working tree, commit, branch, merge conflict, Maven, Gradle, dependency, logging levels.

## Narrative Integration

Игрок запускает файл вне игры, открывает учебный проект, находит неверное значение debugger-ом, фиксирует commit, разбирает конфликт и собирает зависимость.

## Key Characters

Ника, Таль, Бор.

## Main Quest Chain

1. Запустить простой Java-файл через JDK.
2. Открыть проект в IDE.
3. Найти баг breakpoint-ом.
4. Сделать commit.
5. Исправить задачу в branch и разобрать merge.
6. Собрать Maven-проект.
7. Прочитать Gradle build.
8. Заменить случайный `println` на полезный logging.

## Optional Side Stories

Таль приносит проект с названием `fix-final-real`, и Ника просит сначала посмотреть историю.

## Educational Escalation

От запуска файла к сопровождению проекта.

## Chapter Mystery

Git-история старого проекта показывает commit "temporary global fix" перед началом системных сбоев.

## Story Reveal System

| What Player Believes | New Evidence | What Actually Happened | Remaining Questions |
|---|---|---|---|
| Нужны инструменты для удобства. | История изменений становится доказательством. | Великое Исправление было выпущено как срочный merge. | Как системы городов связаны между собой? |

## Chapter Climax

Игрок восстанавливает сборку и находит баг debugger-ом, а не угадыванием.

## Curriculum Checkpoint

Проект запускается вне игры, изменение зафиксировано, лог помогает диагностике.

## Chapter Resolution

Порт выдает доступ к сетевым станциям.

## Hook To Next Chapter

Города больше нельзя чинить локально: они должны договориться по сети.

