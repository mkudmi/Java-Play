# CHAPTER 18 — То, что должно сохраниться

## Narrative Purpose

Сделать базы данных ответом на необходимость долговременного, согласованного состояния города.

## Curriculum Coverage

C18. Databases & Persistence: SQL, tables, keys, CRUD, joins, indexes, transactions, JDBC, JPA, Hibernate и границы ORM.

Related Curriculum IDs: JAVA-C18-L01, JAVA-C18-L02, JAVA-C18-L03, JAVA-C18-L04, JAVA-C18-L05, JAVA-C18-L06, JAVA-C18-L07, JAVA-C18-L08, JAVA-C18-L09, JAVA-C18-L10.

## Starting Situation

В Городском Хранилище деньги списаны, товар не выдан, склад показывает один остаток, витрина другой.

## Central Problem

Данные должны иметь идентичность, связи, быстрый поиск и атомарные изменения.

## Why Existing Knowledge Is Not Enough

Файлы и API передают данные, но не дают надежную модель согласованного состояния.

## New Knowledge

Таблицы, schema, primary/foreign key, SELECT, INSERT/UPDATE/DELETE, JOIN, index, transaction, isolation на базовом уровне, JDBC, prepared statement, entity, repository, ORM, lazy loading как риск.

## Narrative Integration

Игрок описывает товары таблицей, ищет заказ по ID, связывает заказ с покупателем, ускоряет поиск индексом и исправляет оплату через транзакцию.

## Key Characters

Мара, Север, казначей Ло, Таль.

## Main Quest Chain

1. Описать таблицу товаров.
2. Ввести primary key.
3. Написать SELECT.
4. Изменить данные CRUD-операциями.
5. Получить заказ с покупателем через JOIN.
6. Объяснить медленный запрос индексом.
7. Сделать оплату и выдачу атомарными.
8. Выполнить prepared statement через JDBC.
9. Сохранить entity через ORM.
10. Исправить частичный update.

## Optional Side Stories

Маленькая лавка просит восстановить историю заказов, потому что для владельца это не таблица, а память о постоянных покупателях.

## Educational Escalation

От таблицы к транзакционному сценарию backend-а.

## Chapter Mystery

Куратор объединял записи без нормальной identity и прятал частичные операции.

## Story Reveal System

| What Player Believes | New Evidence | What Actually Happened | Remaining Questions |
|---|---|---|---|
| БД повреждена. | Несогласованность создана повтором и частичным update. | Старый backend не имел четкой транзакционной границы. | Как собрать сервисы так, чтобы правила жили в правильном месте? |

## Chapter Climax

Оплата и выдача товара проходят как единая операция, повтор запроса не создает вторую покупку.

## Curriculum Checkpoint

Игрок объясняет ключи, JOIN и транзакцию, не строит SQL конкатенацией пользовательского ввода.

## Chapter Resolution

Хранилище стабилизируется, но код сервисов слишком связан вручную.

## Hook To Next Chapter

Столица просит собрать backend, который можно сопровождать.

