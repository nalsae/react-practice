# 📖 **UploadIcon, UploadButton Component**

## 📌 **개요**

---

- `props`로 전달 받은 `type`에 따라 적절한 Icon, Button 컴포넌트를 생성합니다.

## 📌 **컴포넌트 구조**

---

- Root > (StrictMode) > UploadButton > UploadIcon

## 📌 **컴포넌트 설명**

---

### 🔶 **UploadIcon**

- **기능 명세**<br>
  : `getPath` 함수에 `type`을 인수로 전달하면 `type`에 따라 적절한 경로를 생성하고, 이를 바탕으로 `img` 요소를 반환합니다.<br>
  : 이 때 전달한 `type`이 disabled일 경우, `icon-disabled` 클래스를 추가적으로 설정하여 UploadIcon 컴포넌트의 색상을 변경합니다.<br>

- **코드 소개**<br>

```javascript
// Icon의 공통 경로
const ICON_DEFAULT_PATH = './assets/icons/type=';

// Icon의 type에 따른 svg 파일 이름
const ICON_TYPE = {
  idle: 'up-arrow',
  pending: 'spinner-animate',
  resolved: 'check-mark',
  rejected: 'cross',
  disabled: 'not-allowed',
};

// Icon의 경로를 생성하는 getPath 함수
const getPath = (type) => `${ICON_DEFAULT_PATH}${ICON_TYPE[type]}.svg`;
```

```javascript
// UploadIcon 컴포넌트
const UploadIcon = ({ type }) => {
  // type이 disabled일 경우 icon-disabled 클래스를 추가 설정
  const IconClassNames = `${type === 'disabled' ? 'icon-disabled' : ''}`;

  return <img src={getPath(type)} className={IconClassNames} />;
};
```

- **구현 예제**<br>
  | type | UploadIcon |
  | --------------- | -------------------------------------------------------- |
  | idle | ![idle](./public/assets/icons/type%3Dup-arrow.svg) |
  | pending | ![pending](./public/assets/icons/type%3Dspinner-animate.svg) |
  | resolved | ![resolved](./public/assets/icons/type%3Dcheck-mark.svg) |
  | rejected | ![rejected](./public/assets/icons/type%3Dcross.svg) |
  | disabled | ![disabled](./public/assets/icons/type%3Dnot-allowed.svg) |

### 🔶 **UploadButton**

- **기능 명세**<br>
  : 전달한 `type`에 따라 적절한 텍스트와 UploadIcon 컴포넌트를 자식 요소로 포함하는 `button` 요소를 반환합니다.<br>
  : 이 때 전달한 `type`이 disabled일 경우, `button-disabled` 클래스를 추가적으로 설정하여 UploadButton 컴포넌트의 색상과 마우스 커서를 변경합니다.<br>
- **코드 소개**<br>

```javascript
// Button의 type에 따른 텍스트
const BUTTON_CONTENT = {
  idle: '업로드',
  pending: '업로드 중',
  resolved: '완료',
  rejected: '실패',
  disabled: '업로드',
};
```

```javascript
// UploadButton 컴포넌트
const UploadButton = ({ type }) => {
  // type이 disabled일 경우 button-disabled 클래스를 추가 설정
  const buttonClassNames = `button-default ${
    type === 'disabled' ? 'button-disabled' : ''
  }`;

  return (
    <button className={buttonClassNames}>
      <span>{BUTTON_CONTENT[type]}</span>
      <UploadIcon type={type} />
    </button>
  );
};
```

- **구현 예제**<br>
  | type | UploadButton |
  | --------------- | -------------------------------------------------------- |
  | idle | ![idle](./public/assets/icons/type%3Dup-arrow.svg) |
  | pending | ![pending](./public/assets/icons/type%3Dspinner-animate.svg) |
  | resolved | ![resolved](./public/assets/icons/type%3Dcheck-mark.svg) |
  | rejected | ![rejected](./public/assets/icons/type%3Dcross.svg) |
  | disabled | ![disabled](./public/assets/icons/type%3Dnot-allowed.svg) |
