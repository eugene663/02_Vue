// 깊은 복사: 실제 데이터를 복사(복제)
const arr3 = [100, 200, 300];
const arr4 = [...arr3]; // ...: 전개 연산자

arr4[0] = 99999;

console.log('arr3: ', arr3);
console.log('arr4 :', arr4);
