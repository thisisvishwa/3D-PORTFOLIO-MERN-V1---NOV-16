```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes slideIn {
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  .slide-in {
    animation: slideIn 0.5s ease-in-out forwards;
  }
`;

export default GlobalStyle;
```