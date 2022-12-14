# ๐ **UploadIcon, UploadButton Component**

## ๐ **๊ฐ์**

- `props`๋ก ์ ๋ฌ ๋ฐ์ `type`์ ๋ฐ๋ผ ์ ์ ํ Icon, Button ์ปดํฌ๋ํธ๋ฅผ ์์ฑํฉ๋๋ค.

## ๐ **์ปดํฌ๋ํธ ๊ตฌ์กฐ**

- Root > (StrictMode) > UploadButton > UploadIcon

## ๐ **์ปดํฌ๋ํธ ์ค๋ช**

### ๐ถ **UploadIcon**

- **๊ธฐ๋ฅ ๋ช์ธ**
  - `getPath` ํจ์์ `type`์ ์ธ์๋ก ์ ๋ฌํ๋ฉด `type`์ ๋ฐ๋ผ ์ ์ ํ ๊ฒฝ๋ก๋ฅผ ์์ฑํ๊ณ , ์ด๋ฅผ ๋ฐํ์ผ๋ก `img` ์์๋ฅผ ๋ฐํํฉ๋๋ค.
  - ์ด ๋ ์ ๋ฌํ `type`์ด disabled์ผ ๊ฒฝ์ฐ, `icon-disabled` ํด๋์ค๋ฅผ ์ถ๊ฐ์ ์ผ๋ก ์ค์ ํ์ฌ UploadIcon ์ปดํฌ๋ํธ์ ์์์ ๋ณ๊ฒฝํฉ๋๋ค.

- **์ฝ๋ ์๊ฐ**<br>

```javascript
// Icon์ ๊ณตํต ๊ฒฝ๋ก
const ICON_DEFAULT_PATH = './assets/icons/type=';

// Icon์ type์ ๋ฐ๋ฅธ svg ํ์ผ ์ด๋ฆ
const ICON_TYPE = {
  idle: 'up-arrow',
  pending: 'spinner-animate',
  resolved: 'check-mark',
  rejected: 'cross',
  disabled: 'not-allowed',
};

// Icon์ ๊ฒฝ๋ก๋ฅผ ์์ฑํ๋ getPath ํจ์
const getPath = (type) => `${ICON_DEFAULT_PATH}${ICON_TYPE[type]}.svg`;
```

```javascript
// UploadIcon ์ปดํฌ๋ํธ
const UploadIcon = ({ type }) => {
  // type์ด disabled์ผ ๊ฒฝ์ฐ icon-disabled ํด๋์ค๋ฅผ ์ถ๊ฐ ์ค์ 
  const IconClassNames = `${type === 'disabled' ? 'icon-disabled' : ''}`;

  return <img src={getPath(type)} className={IconClassNames} />;
};
```

- **๊ตฌํ ์์ **

  | type | UploadIcon |
  | --------------- | -------------------------------------------------------- |
  | idle | ![idle](./public/assets/icons/type%3Dup-arrow.svg) |
  | pending | ![pending](./public/assets/icons/type%3Dspinner-animate.svg) |
  | resolved | ![resolved](./public/assets/icons/type%3Dcheck-mark.svg) |
  | rejected | ![rejected](./public/assets/icons/type%3Dcross.svg) |
  | disabled | ![disabled](./public/assets/icons/type%3Dnot-allowed.svg) |

### ๐ถ **UploadButton**

- **๊ธฐ๋ฅ ๋ช์ธ**
  - ์ ๋ฌํ `type`์ ๋ฐ๋ผ ์ ์ ํ ํ์คํธ์ UploadIcon ์ปดํฌ๋ํธ๋ฅผ ์์ ์์๋ก ํฌํจํ๋ `button` ์์๋ฅผ ๋ฐํํฉ๋๋ค.
  - ์ด ๋ ์ ๋ฌํ `type`์ด disabled์ผ ๊ฒฝ์ฐ, `button-disabled` ํด๋์ค๋ฅผ ์ถ๊ฐ์ ์ผ๋ก ์ค์ ํ์ฌ UploadButton ์ปดํฌ๋ํธ์ ์์๊ณผ ๋ง์ฐ์ค ์ปค์๋ฅผ ๋ณ๊ฒฝํฉ๋๋ค.
 
- **์ฝ๋ ์๊ฐ**

```javascript
// Button์ type์ ๋ฐ๋ฅธ ํ์คํธ
const BUTTON_CONTENT = {
  idle: '์๋ก๋',
  pending: '์๋ก๋ ์ค',
  resolved: '์๋ฃ',
  rejected: '์คํจ',
  disabled: '์๋ก๋',
};
```

```javascript
// UploadButton ์ปดํฌ๋ํธ
const UploadButton = ({ type }) => {
  // type์ด disabled์ผ ๊ฒฝ์ฐ button-disabled ํด๋์ค๋ฅผ ์ถ๊ฐ ์ค์ 
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

- **๊ตฌํ ์์ **

  | type | UploadButton |
  | --------------- | -------------------------------------------------------- |
  | idle | ![button-idle](https://user-images.githubusercontent.com/101828759/199532198-81606c75-a2e9-4111-89ac-4e656d2f495d.PNG) |
  | pending | ![button-pending](https://user-images.githubusercontent.com/101828759/199532245-a10fd6a6-9175-48dc-b003-0599d7c9ba38.PNG) |
  | resolved | ![button-resolved](https://user-images.githubusercontent.com/101828759/199532268-482b9466-7ba8-4f5f-b94f-9b7fd361342f.PNG) |
  | rejected | ![button-rejected](https://user-images.githubusercontent.com/101828759/199532296-d080e468-674d-4188-bd12-c7ed4e2e639a.PNG) |
  | disabled | ![button-disabled](https://user-images.githubusercontent.com/101828759/199532324-b3bb07fc-d34f-4297-93b2-90ac976a6e0f.PNG) |
