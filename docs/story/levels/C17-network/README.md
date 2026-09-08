# CHAPTER 17 — Мир отвечает статусом

## Narrative Purpose

Показать переход от локальной программы к связанному миру через client/server и API contracts.

## Curriculum Coverage

C17. Backend Fundamentals: client/server, HTTP request/response, status code, JSON, REST, idempotency, basic client.

Related Curriculum IDs: JAVA-C17-L01, JAVA-C17-L02, JAVA-C17-L03, JAVA-C17-L04, JAVA-C17-L05, JAVA-C17-L06, JAVA-C17-L07.

## Starting Situation

Почтовые станции разных островов работают по отдельности, но запросы теряются, повторяются или понимаются по-разному.

## Central Problem

Удаленные системы должны говорить через явный договор.

## Why Existing Knowledge Is Not Enough

Файлы и локальные вызовы не решают взаимодействие между городами.

## New Knowledge

Клиент, сервер, request, response, method, URL, status code, header, body, JSON, REST resource, API contract, идемпотентность, timeout как идея.

## Narrative Integration

Игрок отправляет GET, обрабатывает 200/404/500, проектирует endpoint заказа и делает повтор оплаты безопасным.

## Key Characters

Север, Мара, Ника.

## Main Quest Chain

1. Разделить роли клиента и сервера.
2. Отправить HTTP request.
3. Обработать разные response status.
4. Разобрать JSON заказа.
5. Спроектировать REST endpoint.
6. Сделать повтор запроса безопасным.
7. Получить список станций учебным клиентом.

## Optional Side Stories

Удаленная станция отвечает `404`, и NPC наконец понимает: это не "молчание", а конкретный ответ.

## Educational Escalation

От одного запроса к контракту ресурса и безопасному повтору.

## Chapter Mystery

Куратор повторял запросы без идемпотентного ключа, превращая "попробовать снова" в "сделать дважды".

## Story Reveal System

| What Player Believes | New Evidence | What Actually Happened | Remaining Questions |
|---|---|---|---|
| Сеть ненадежна. | Повторы создают реальные дубли. | Контракты API не описывали безопасность повторов. | Где хранить истинное состояние заказа? |

## Chapter Climax

Почтовые станции соединяются через понятный API, повтор запроса не вредит.

## Curriculum Checkpoint

Игрок объясняет request/response и проектирует базовый REST-контракт.

## Chapter Resolution

Сеть оживает, но вскрывает противоречивые данные в городском хранилище.

## Hook To Next Chapter

Нужно разобраться с БД, ключами и транзакциями.

