#include <stdio.h>

int main(void) {
    float height, weight, heightSwap, BMI;  //  각각 키, 몸무게, 키/100, BMI 변수 선언.

    printf("본인의 키와 몸무게를 입력해주세요.\n\n");

    printf("키(cm) : ");
    scanf_s("%f", &height);       // %d 로 선언할 시 BMI계산에서 오류 발생
    printf("몸무게 (kg) : ");
    scanf_s("%f", &weight);

    heightSwap = height / 100;   //  키를 100으로 나눈 값
    BMI = weight / (heightSwap * heightSwap);  //  BMI 값 계산

    printf("\nBMI 계산법 = 몸무게 / {(키/100) * (키/100)}\n\n");
    printf("당신의 BMI 측정량은 %.2f 입니다. \n", BMI);

    return 0;
}