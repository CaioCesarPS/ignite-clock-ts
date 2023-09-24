import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';
import { defaultTheam } from './styles/theme/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheam}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}
