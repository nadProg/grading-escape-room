// styled.d.ts
import 'styled-components';

type Font = 'mini' | 'small' | 'semibase' | 'base' | 'upperbase' | 'medium' | 'formsHeading' | 'semilarge' | 'large';

type Color = 'white' | 'black' | 'whiteSmoke' | 'whisper' | 'whisper2' | 'gray' | 'darkerGray' | 'nero' | 'nero2' | 'tangerine' | 'carrotOrange' | 'eclipse' | 'pinkSwan';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      [key in Font]: string
    };
    color: {
      [key in Color]: string
    };
  }
}
