# Expressjs-Start-Kit
## 회원 가입
### Request info
|  PATH  | METHOD |
|:------:|-----------|
|  /register  | POST |
### Request data
|  설명  |   필드 명   | 데이터에 대한 설명          |
|:--------:|:--------:|-----------------|
|  아이디  |   name   | String          |
| 비밀번호 | password | String          |
|   성별   |  gender  | F, M 둘 중 하나 |
### Response status code
| status code |      설명     |
|:---:|:-------------:|
| 200 |      성공     |
| 409 | 중복된 아이디 |
## 로그인
### Request info
|  PATH  | METHOD |
|:------:|-----------|
|  /login  | POST |
### Request data
|  설명  |   필드 명   | 데이터에 대한 설명          |
|:--------:|:--------:|-----------------|
|  아이디  |   name   | String          |
| 비밀번호 | password | String          |
### Response status code
| status code |      설명     |
|:---:|:-------------:|
| 200 |      성공     |
| 400 | 아이디 또는 비밀번호가 틀린 경우 |