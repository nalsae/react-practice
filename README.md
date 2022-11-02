# 📚 **React 수업 연습장**

## 📌 **Icon, UploadButton 컴포넌트 제작**

---

### 🔶 **To do List**

- [x] UploadIcon 컴포넌트 제작
- [x] UploadButton 컴포넌트 제작
- [x] README.md 파일에 컴포넌트별 기능 명세 작성

### 🔶 **Retrospectives**

- Babel을 사용하여 JSX 문법으로 작성한 코드가 어떻게 컴파일되는지 전체적인 맥락을 파악할 수 있었다.
- 또한 아직 헷갈리는 JSX 문법을 다루는 데 조금이나마 익숙해진 것 같다. 다만 이 부분은 지속적인 연습이 필요할 듯하다.
- 처음에는 UploadIcon 컴포넌트가 `img`가 아니라 `svg`를 반환하도록 했는데, 결과적으로 가능은 했지만 `spinner-animate` Icon만 `svg` 코드 구조가 달라서 추상화를 하기가 난감했다. 결국 추상화를 위해 `img`를 반환하기로 했지만 CSS `filter` 속성을 사용하여 색을 완전히 동일하게 변경하지 못했다는 아쉬움이 남는다. 다른 방법이 있는지 추후 찾아봐야겠다.
