# STT 서비스간 성능 비교 웹서비스
## Usage
최근 STT 기술 동향이 활발해지고 있고, STT 서비스를 활용하는 기업들 뿐만 아니라 STT 서비스를 제공하는 기업 또한 많이 존재한다. 대표적으로 구글, 네이버, 카카오 등의기업 에서 STT 서비스를 API 형태로 제공하고 있으며, 이러한 서비스를 사용해야 하는 스타트업이나 소규모 기업들에서는 어떤 서비스를 선택해야 할지에 대해 고민이 생기게 된다.

이런 고민을 해결하기 위해 각 **STT 서비스들의 인식률과 인식 시간에 대한 성능 비교를 제공**함으로써 상황에 따른 유연한 결정의 지표가 되어주는 웹 서비스를 제작했다.
<div align="center">
<img src="https://user-images.githubusercontent.com/33976823/141943890-3c68ba8a-2b6f-4fbe-839c-905e85ac5c0b.png">
</div>

## Getting Started
> ### Prerequisites
> - ```server```폴더의 ```.env.example```에 있는 내용에 따라 필요한 STT 서비스의 키를 ```.env``` 파일을 새로 만들어 입력한다.
> - ```server```의 주소와 ```client/src/api/index.js```의 ```baseURL```의 주소를 맞춰준다.
### Installation
1. Repository를 clone한다.
```sh
git clone https://github.com/woong-jae/STT-Evaluation.git
```
2. 서버 디렉토리로 이동한다.
```sh
cd server
```
3. Package 설치
```sh
npm install
```
4. 서버를 실행
```sh
npm start
```
5. 클라이언트 디렉토리로 이동한다.
```sh
cd ../client
```
6. Package 설치
```sh
npm install
```
7. 클라이언트 실행
```
npm start
```
### Installation - via Docker
> Dockerizing을 위해 Docker Compose를 사용합니다.

Root 디렉토리에서
```sh
docker-compose up -d --build
```
사용을 중지하기 위해서는 ```docker-compose stop```을 입력하면 됩니다.
## Contributor
[woong-jae](https://github.com/woong-jae)

[SeongukBaek](https://github.com/SeongukBaek)

[KingDonggyu](https://github.com/KingDonggyu)

[Go-Jaecheol](https://github.com/Go-Jaecheol)
