/*
생성자 함수의 New 호출을 통한 객체 생성 과정
1.빈 객체를 만듭니다.
2. 만든 빈 객체를 this에 할당합니다.
3. 생성자 함수 바디의 코드 실행합니다(this에 속성 및 메소드 추가)
4. 만든 빈 객체의 __proto__에 생성자 함수의 Prototype 속성을 대입합니다.
5. this를 생성자의 반환값으로 변환합니다.
*/
function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게' + this.subject + '를 가르칩니다.');
    };
}

const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay);
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2);
console.log(age);