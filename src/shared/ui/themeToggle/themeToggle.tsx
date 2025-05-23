'use client';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ComputerIcon from '@mui/icons-material/Computer';
import { IconButton, Tooltip } from '@mui/material';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeSequence = {
    light: 'dark',
    dark: 'system',
    system: 'light',
  };

  const getTooltipText = () => {
    if (theme === 'light') return 'Переключить на темную тему';
    if (theme === 'dark') return 'Переключить на системную тему';

    return 'Переключить на светлую тему';
  };

  const toggleTheme = () => {
    const nextTheme = themeSequence[theme as keyof typeof themeSequence] || 'light';
    setTheme(nextTheme);
  };

  return (
    <Tooltip title={getTooltipText()}>
      <IconButton aria-label='Переключить тему' color='inherit' onClick={toggleTheme}>
        {theme === 'light' && <Brightness7Icon />}
        {theme === 'dark' && <Brightness4Icon />}
        {theme === 'system' && <ComputerIcon />}
        {theme === undefined && <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
};
