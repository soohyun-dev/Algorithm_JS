## 📋 기능 수행 로직

#### 다리길이 입력

- OutputView 시작 문구 출력.
- InputView.readBridgeSize 사용자에게 다리의 길이를 입력받음.
- Controller에게 다리 길이 를 전달.
- ✔️ 예외 처리 확인.
- Controller 는 다리 길이 정보를 BridgeGame에 전달.
- BridgeGame은 BridgeMaker, BridgeRandomNumberGenerate 사용해서 다리 만들기.
- 만들어진 다리 정보 저장.

#### 움직임 입력

- InputView.readMoving 사용자에게 움직임을 입력받음.
- Controller 에게 움직일 방향 전달.
- ✔️ 예외 처리 확인.
- Controller 는 움직일 방향을 BridgeGame에 전달.
- move 메소드가 이동할 정보를 모델 내에서 확인. 이후 확인값 Controller 에게 전달.
- Controller는 이동정보를 OutView에게 전달.
- OutView는 맞는 정보에 맞게 출력
- 이후 move 메소드는 게임 진행상황을 Controller 에게 전달.
- Controller는 진행 상황을 OutputView에게 출력하라 명령.
- OutputView는 전달받은 정보로 진행 상황 출력.
- 이후, 함정을 밟았는지에 대한 정보를 확인.

  - 함정을 안밟은 경우
  - 다리 끝까지 혹은 함정을 밟을때까지 InputView.readMoving 과정을 반복

  - 함정을 밟은 경우
  - Controller는 InputView.readGameCommand를에게 게임 재시작 응답을 입력받게 명령.
  - 응답정보를 Controller 에게 알려줌.
  - ✔️ 예외 처리 확인.
  - Controller 는 응답정보를 BridgeGame에게 전달.
  - BrideGame 은 응답 정보에 맞는 값을 Controoler 에게 전달.

#### 재시작

- BridgeGame은 현재까지 온 스테이지 번호를 다시 초기화, 기존 다리 정보는 유지됨.
- BridgeGame 은 재시작 횟수 를 카운트.
- Controller는 inputView.readMoving 을 재실행.

#### 종료

- Controller는 현재까지의 게임 정보를 BridgeGame에게 요구.
- BridgeGame은 현재까지의 게임 정보를 Controller에게 전달
- Controller는 OutputView.printResult 에게 현재까지의 게임 정보를 전달
- OutputView.printResult는 전달 받은 게임 정보에 맞는 결과 출력.
- 게임 종료.

### 게임 클리어

- Controller에게 게임이 완료되었다는 정보가 전달된다.
- Controller는 게임을 종료시키라는 명령을 내린다.
- GameBridge에게 현재까지 이뤄진 게임 정보를 요구해서 받아낸다.
- OutputView.printResult는 전달 받은 게임 정보에 맞는 결과 출력.
- 게임 종료. <br>
  <br>
