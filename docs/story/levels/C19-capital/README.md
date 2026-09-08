# CHAPTER 19 — Слишком много связей

## Narrative Purpose

Показать Spring как ответ на уже прочувствованную сложность backend-а, а не как внезапный framework.

## Curriculum Coverage

C19. Spring Ecosystem: Spring Boot, DI, application context, bean, controller, service, repository, DTO, validation, exception handler, configuration, logging, transactions.

Related Curriculum IDs: JAVA-C19-L01, JAVA-C19-L02, JAVA-C19-L03, JAVA-C19-L04, JAVA-C19-L05, JAVA-C19-L06, JAVA-C19-L07, JAVA-C19-L08, JAVA-C19-L09, JAVA-C19-L10.

## Starting Situation

В Столице Сервисов контроллеры знают слишком много, объекты создаются вручную, настройки зашиты в коде, ошибки приходят клиентам в разном виде.

## Central Problem

Backend вырос до системы, где зависимости, слои и конфигурация должны управляться осознанно.

## Why Existing Knowledge Is Not Enough

Игрок знает Java Core, HTTP и БД, но ручная сборка всех частей стала хрупкой.

## New Knowledge

Spring Boot, application context, bean, dependency injection, controller, service, repository, DTO, validation, exception handling, configuration properties, logging, transaction boundary.

## Narrative Integration

Игрок запускает сервис, внедряет service в controller, переносит бизнес-правила из controller, связывает repository с БД, настраивает validation и единый handler.

## Key Characters

Север, Таль, Мара, Ника.

## Main Quest Chain

1. Запустить Spring Boot project.
2. Подключить DI.
3. Создать `GET /items`.
4. Перенести покупку в service.
5. Получить товары через repository.
6. Отклонить неверный заказ validation-ом.
7. Настроить exception handler.
8. Вынести настройки.
9. Добавить полезные логи.
10. Очертить transaction boundary.

## Optional Side Stories

Таль называет DI магией; Север просит игрока объяснить это через обычные объекты и интерфейсы.

## Educational Escalation

От запуска сервиса к слойной системе с правилами, данными и ошибками.

## Chapter Mystery

Север раскрывает, что Великое Исправление было попыткой автоматически связать такие сервисы без ясных границ ответственности.

## Story Reveal System

| What Player Believes | New Evidence | What Actually Happened | Remaining Questions |
|---|---|---|---|
| Нужен framework для удобства. | Без границ service/repository ошибки распространяются по городу. | Куратор появился как компенсация плохой архитектуры. | Как выпустить систему, которой можно доверять? |

## Chapter Climax

Backend магазина начинает обслуживать витрину, склад и транспорт через понятные слои.

## Curriculum Checkpoint

Игрок объясняет DI, роли слоев, validation, handler и транзакционную границу.

## Chapter Resolution

Столица работает, но Куратор все еще имеет слишком широкие права.

## Hook To Next Chapter

Инженерная Гильдия собирает финальный релиз всей системы.

