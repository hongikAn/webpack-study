# 5. ES6 Modules 문법

Created By: 홍익 안
Last Edited: Nov 24, 2020 4:22 PM

```jsx
export 변수, 함수
```

다른 파일에서 가져다 쓸 변수나 함수의 앞에 export 키워드를 붙인다.

이렇게 export된 파일은 import로 불러와 사용할 수 있다.

```jsx
import { 불러올 변수 또는 함수 이름 } from '파일의 경로'
```

export된 변수나 함수를 {}에 선언하고 경로를 적어준다.

### import & export 예제

이런식으로 export, import를 이용하면 파일별로 유효범위가 구분이 된다.

```jsx
// math.js
export var pi = 3.14;
export function sum(a, b) {
	return a + b;
}
```

```jsx
// app.js
import { pi } from './math.js';
import { sum } from './math.js';

console.log(pi); // 3.14
sum(10, 20); // 30
```