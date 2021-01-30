# API List

http://localhost:3000/

### Helath

curl localhost:3000/health

### Login

curl -X POST localhost:3000/login -d 'email=test@test.com&password=123123'

---

### Get board list

curl localhost:3000/boards -H 'Authorization: Bearer token'

### Get board

curl localhost:3000/boards/1 -H 'Authorization: Bearer token'

### Add board

curl -X POST localhost:3000/boards -H 'Authorization: Bearer token' -d "title=string"

### Edit board

curl -X PUT localhost:3000/boards/1 -H 'Authorization: Bearer token' -d "title=string&bgColor=string"

### Delete board

curl -X DELETE localhost:3000/boards/1 -H 'Authorization: Bearer token'"

---

### Add list

curl -X POST localhost:3000/lists -H 'Authorization: Bearer token' -d "title=string&boardId=number&pos=number"

### Edit list

curl -X PUT localhost:3000/lists/1 -H 'Authorization: Bearer token' -d "title=string&pos=number"

### Delete list

curl -X DELETE localhost:3000/lists/1 -H 'Authorization: Bearer token'

---

### Add card

curl -X POST localhost:3000/cards -H 'Authorization: Bearer token' -d "title=string&listId=number&pos=number"

### Get card

curl localhost:3000/cards/1 -H 'Authorization: Bearer token'

### Edit card

curl -X PUT localhost:3000/cards/1 -H 'Authorization: Bearer token' -d "title=string&description=string&listId=number&pos=number"

### Delete card

curl -X DELETE localhost:3000/cards/1 -H 'Authorization: Bearer token'
