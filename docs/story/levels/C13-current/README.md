# CHAPTER 13 — Река заявок

## Narrative Purpose

Научить игрока видеть большие наборы данных как поток преобразований, фильтров и итогов.

## Curriculum Coverage

C13. Functional Java: functional interfaces, lambda, method reference, Stream API, map/filter/reduce/flatMap, collectors, Optional, ленивость и побочные эффекты.

Related Curriculum IDs: JAVA-C13-L01, JAVA-C13-L02, JAVA-C13-L03, JAVA-C13-L04, JAVA-C13-L05, JAVA-C13-L06, JAVA-C13-L07, JAVA-C13-L08, JAVA-C13-L09.

## Starting Situation

Канал Телеметрии несет тысячи заявок: доставка, вода, сбои, заказы, жалобы. Совет видит шум вместо картины.

## Central Problem

Нужно оставить нужные записи, преобразовать их, сгруппировать и получить итог.

## Why Existing Knowledge Is Not Enough

Циклы работают, но громоздко скрывают смысл цепочки обработки данных.

## New Knowledge

Functional interface, lambda, method reference, stream pipeline, intermediate/terminal operation, lazy execution, side effects, `map`, `filter`, `reduce`, `collect`, `groupingBy`, `flatMap`, `Optional`.

## Narrative Integration

Игрок передает правило фильтра, отбирает активные заявки, преобразует их в отчет, считает общий вес и группирует по районам.

## Key Characters

Рэй, Мара, Ника.

## Main Quest Chain

1. Передать правило фильтра.
2. Написать lambda для заявок.
3. Упростить код method reference.
4. Построить pipeline `filter` + `map`.
5. Посчитать итог через `reduce`.
6. Сгруппировать заказы collectors.
7. Развернуть вложенные товары через `flatMap`.
8. Обработать отсутствие товара через `Optional`.
9. Найти pipeline без terminal operation.

## Optional Side Stories

Рэй ставит стенд, где поток выглядит как канал с шлюзами, но сразу объясняет границу аналогии: Stream не обязан быть водой и не всегда быстрее цикла.

## Educational Escalation

От поведения как значения к полной аналитической сводке.

## Chapter Mystery

Телеметрия показывает всплески повторных запросов перед каждым крупным сбоем.

## Story Reveal System

| What Player Believes | New Evidence | What Actually Happened | Remaining Questions |
|---|---|---|---|
| Слишком много случайных событий. | Повторы группируются вокруг одних сервисов. | Куратор повторял операции, чтобы добиться "успеха". | Что будет, если повторы придут одновременно? |

## Chapter Climax

Совет получает карту инцидентов по районам и видит первую форму глобального паттерна.

## Curriculum Checkpoint

Игрок строит понятный pipeline и может объяснить его шаги обычным циклом.

## Chapter Resolution

Данные указывают на Распределительный Двор.

## Hook To Next Chapter

Там повторные операции приходят одновременно и ломают общее состояние.

