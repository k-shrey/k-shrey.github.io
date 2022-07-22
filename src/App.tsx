import React from 'react';
import './App.css';
import './index.css';
import Resume from './components/Resume';
import { Switch, theme } from '@nextui-org/react';
import { SunIcon } from './assets/SunIcon';
import { MoonIcon } from './assets/MoonIcon';
import { ThemeContext } from './themeContext';

function App() {
  // const setTheme = useTheme();
  const themeContext = React.useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: themeContext?.props.colors.background.value
    }}>
      {themeContext?.theme}
      {/* {console.log(themeContext?.props)} */}
      <Switch
        checked={themeContext?.theme === "dark"}
        size="lg"
        iconOn={<MoonIcon filled fill={themeContext?.props.colors.foreground.value}/>}
        iconOff={<SunIcon filled />}
        onChange={() => {themeContext?.toggleTheme()}}
      />
      <Resume />
    </div>
  );
}

export default App;
