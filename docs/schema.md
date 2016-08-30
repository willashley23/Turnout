# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
price       | integer   | not null
date        | date      | not null
tag         | string    |
author_id   | integer   | not null foreign key(references user)
bookmark_id | integer   | foreign key (references events), indexed


## tickets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
buyer_id    | integer   | not null foreign key (references users)
event_id    | text      | not null foreign key (references events)


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id     | integer   | not null, foreign key (references events), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
