# CHAPTER 15 — Под капотом

## Narrative Purpose

Открыть самый глубокий слой системы: как Java-код исполняется, где живут объекты, почему память и производительность требуют измерения.

## Curriculum Coverage

C15. Подземелья JVM: stack/heap, references, GC, class loading, bytecode, JIT, profiling, retained objects, memory leaks.

Related Curriculum IDs: JAVA-C15-L01, JAVA-C15-L02, JAVA-C15-L03, JAVA-C15-L04, JAVA-C15-L05, JAVA-C15-L06, JAVA-C15-L07, JAVA-C15-L08.

## Starting Situation

Мастерская замедляется после каждого посетителя. На уровне логики все выглядит корректно.

## Central Problem

Система удерживает объекты, которые больше не нужны, и это видно только через понимание исполнения и профилирование.

## Why Existing Knowledge Is Not Enough

Игрок умеет писать код, но еще не понимает, как вызовы, ссылки, объекты и сборка мусора выглядят под капотом.

## New Knowledge

Stack frame, heap object, reference, reachability, garbage collection, class loading, bytecode, JIT, profiling, allocation, retained objects, memory leak.

## Narrative Integration

Рэй ведет героя на диагностическую станцию. Игрок прослеживает создание объектов, видит две ссылки на один ресурс, освобождает недостижимое и находит коллекцию, удерживающую старые заявки.

## Key Characters

Рэй, Ника, Север.

## Main Quest Chain

1. Проследить stack и heap на простом вызове.
2. Найти общий объект через ссылки.
3. Убрать лишние ссылки.
4. Разобрать загрузку класса.
5. Посмотреть простой bytecode.
6. Сравнить прогрев JIT осторожно.
7. Снять профиль.
8. Исправить memory leak.

## Optional Side Stories

Старый стенд показывает байткод как техническую карту, но Рэй запрещает превращать его в основной язык игрока.

## Educational Escalation

От модели памяти к измерению реального узкого места.

## Chapter Mystery

Утечку создал модуль, который хранил "на всякий случай" все исправленные Куратором события.

## Story Reveal System

| What Player Believes | New Evidence | What Actually Happened | Remaining Questions |
|---|---|---|---|
| Мастерская просто перегружена. | Профиль показывает удерживаемую коллекцию. | Куратор накапливал историю автопатчей, но не умел освобождать устаревшее. | Как теперь сопровождать это реальными инструментами? |

## Chapter Climax

Игрок предъявляет отчет профилирования и исправляет удержание объектов.

## Curriculum Checkpoint

Оптимизация подтверждается измерением, а не ощущением.

## Chapter Resolution

Система ускоряется, и герой получает приглашение в Порт Инструментов.

## Hook To Next Chapter

Для дальнейшей работы нужен настоящий JDK, Git, сборка и debugger.

