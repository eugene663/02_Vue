function addContract1({ name, phone, email = '이메일 없음', age = 0 }) {
  console.log(name, phone, email, age);
}
addContract1({ name: '이몽룡', phone: '010-3434-8989' });

function addContract2(contact) {
  if (!contact.email) contact.email = '이메일 없음';
  if (!contact.age) contact.age = 0;
  let { name, phone, email, age } = contact;
  console.log(name, phone, email, age);
}
addContract2({ name: '이몽룡', phone: '010-3434-8989' });

function addContract3(name, phone, email = '이메일 없음', age = 0) {
  console.log(name, phone, email, age);
}
addContract3('이몽룡', '010-3434-8989');
