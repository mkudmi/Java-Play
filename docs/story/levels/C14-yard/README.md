# CHAPTER 14 — Последний билет

## Narrative Purpose

Сделать concurrency сменой масштаба: мир впервые ломается не потому, что код всегда неверен, а потому что несколько правильных действий происходят одновременно.

## Curriculum Coverage

C14. Фабрика Параллелей: Thread, Runnable, lifecycle, race condition, synchronized, volatile, locks, atomics, ExecutorService, Future, CompletableFuture, concurrent collections, virtual threads.

Related Curriculum IDs: JAVA-C14-L01, JAVA-C14-L02, JAVA-C14-L03, JAVA-C14-L04, JAVA-C14-L05, JAVA-C14-L06, JAVA-C14-L07, JAVA-C14-L08, JAVA-C14-L09, JAVA-C14-L10.

## Starting Situation

Распределительный Двор запускает несколько роботов доставки. Два робота продают последний билет двум семьям.

## Central Problem

Общее изменяемое состояние нельзя трогать без правил, когда процессы работают одновременно.

## Why Existing Knowledge Is Not Enough

Коллекции, stream и исключения не объясняют, почему ошибка проявляется не каждый запуск.

## New Knowledge

Поток, задача, lifecycle, join, race condition, shared mutable state, critical section, visibility, atomicity, synchronized, locks, atomics, executor, future, concurrent collections, virtual threads при поддержке JDK.

## Narrative Integration

Игрок сначала воспроизводит гонку в управляемом сценарии, затем защищает продажу, останавливает worker-флагом и переводит доставку на executor.

## Key Characters

Рэй, Мара, Бор, диспетчер Лин.

## Main Quest Chain

1. Запустить фонового робота.
2. Проследить lifecycle.
3. Увидеть двойную продажу.
4. Защитить критическую секцию.
5. Разобрать границу `volatile`.
6. Исправить счетчик atomics.
7. Управлять задачами через executor.
8. Объединить ответы станций через future.
9. Настроить concurrent queue.
10. Сравнить virtual threads только в поддерживаемом окружении.

## Optional Side Stories

Диспетчер ведет доску "редких багов", где самый страшный пункт: "не воспроизводится, но люди уже в очереди".

## Educational Escalation

От одного фонового работника к системе доставки с общими ресурсами.

## Chapter Mystery

Повторные запросы Куратора приходили параллельно, усиливая старые дефекты.

## Story Reveal System

| What Player Believes | New Evidence | What Actually Happened | Remaining Questions |
|---|---|---|---|
| Роботы спорят за ресурс. | Повторы приходят от одного центрального слоя. | Куратор ретраил операции без идемпотентности и блокировок. | Почему система стала такой медленной после сбоев? |

## Chapter Climax

Последний билет продается ровно один раз, очередь доставки не теряет задания.

## Curriculum Checkpoint

Игрок объясняет гонку, visibility и atomicity, выбирает простой механизм защиты.

## Chapter Resolution

Двор стабилизируется, но нагрузочные логи показывают падение производительности.

## Hook To Next Chapter

Рэй предлагает спуститься к уровню исполнения: понять, что делает JVM.

