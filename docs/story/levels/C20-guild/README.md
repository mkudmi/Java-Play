# CHAPTER 20 — Релиз для живого города

## Narrative Purpose

Проверить перенос навыков: герой больше не получает задачу "напиши метод", он получает проблему города и должен спроектировать решение.

## Curriculum Coverage

C20. Professional Java Developer: Clean Code, SOLID, patterns, code review, refactoring, JUnit, Mockito, Testcontainers, Docker, auth/authz, input validation, logging, metrics, profiling, documentation, legacy.

Related Curriculum IDs: JAVA-C20-L01, JAVA-C20-L02, JAVA-C20-L03, JAVA-C20-L04, JAVA-C20-L05, JAVA-C20-L06, JAVA-C20-L07, JAVA-C20-L08, JAVA-C20-L09, JAVA-C20-L10, JAVA-C20-L11, JAVA-C20-L12.

## Starting Situation

Гильдия показывает полную карту: маяки, рынок, склад, транспорт, архив, API, БД, Spring-сервисы и Куратор связаны в одну систему. Отключить Куратора нельзя, оставить как есть опасно.

## Central Problem

Нужно выпустить поддерживаемую систему, которая ограничит Куратора, восстановит контракты и докажет поведение.

## Why Existing Knowledge Is Not Enough

Отдельные инструменты изучены, но теперь игрок сам выбирает, какие классы, сервисы, транзакции, проверки, очереди, тесты и документы нужны.

## New Knowledge

Clean Code, SOLID, patterns как язык обсуждения, тестирование как учебная тема, integration testing, Testcontainers, Docker, security, observability, performance review, legacy refactoring, documentation, growth path.

## Narrative Integration

Игрок ревьюит дефектный service, защищает чужой заказ, пишет учебные тесты в рамках курса, собирает Docker-окружение, документирует API и проводит релизный совет.

## Key Characters

Север, Ира, Бор, Ника, Рэй, Мара, Таль, представители городов.

## Main Quest Chain

1. Переименовать и упростить нечитабельный метод.
2. Разделить перегруженный service.
3. Применить pattern только там, где он решает проблему.
4. Написать учебные unit-тесты в контексте C20.
5. Проверить интеграцию с БД.
6. Собрать Docker-образ.
7. Закрыть чужой заказ через auth/authz.
8. Добавить health, logs и metrics.
9. Отрефакторить legacy-модуль без изменения поведения.
10. Устранить performance bottleneck после измерения.
11. Собрать финальный backend города.
12. Составить маршрут дальнейшего роста.

## Optional Side Stories

Бор приносит старый модуль героя из C02. Вместо стыда игрок видит рост: простое решение было честным для того момента, но теперь его можно перенести в сервис с проверками и документацией.

## Educational Escalation

От code review к самостоятельному техническому заданию.

## Chapter Mystery

Правда открыта полностью: катастрофа была результатом системы без владельцев, тестов, наблюдаемости и понятных границ.

## Story Reveal System

| What Player Believes | New Evidence | What Actually Happened | Remaining Questions |
|---|---|---|---|
| Куратор надо победить. | Он также держит часть мира живой. | Его нужно ограничить, наблюдать и заменить опасные полномочия понятными сервисами. | Как поддерживать систему после финала? |

## Chapter Climax

Финальный релиз проходит через review: API отвечает, БД согласована, конкурентный ресурс защищен, ошибки понятны, права проверяются, наблюдаемость показывает здоровье системы.

## Curriculum Checkpoint

Игрок защищает архитектуру, показывает доказательства качества и объясняет trade-off.

## Chapter Resolution

Куратор становится диагностическим помощником без права самовольно менять правила. Города получают новую систему, а герой официально входит в Инженерную Гильдию.

## Hook To Next Chapter

Основная история завершена. Эпилог открывает повторение, optional content, legacy challenges и самостоятельный путь разработчика.

