import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';
import { defaultTheam } from './styles/theme/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheam}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button />
    </ThemeProvider>
  );
}
