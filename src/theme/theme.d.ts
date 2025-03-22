import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    myColor: {
      main: string;
      dark: string;
    };
    neutral: {
      main: string;
    };
    favColor: {
      main: string;
    };
    back: {
      main: string;
    };
  }

  interface PaletteOptions {
    myColor?: {
      main: string;
      dark: string;
    };
    neutral?: {
      main: string;
    };
    favColor?: {
      main: string;
    };
    back?: {
      main: string;
    };
  }
}