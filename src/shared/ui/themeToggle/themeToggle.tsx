'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import styles from './themeToggle.module.css';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Предотвращаем гидратацию на стороне клиента
    useEffect(() => {
        setMounted(true);
    }, []);

    // Если компонент не смонтирован, рендерим пустое место того же размера
    if (!mounted) {
        return <div className={styles.placeholder} />;
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'dark') {
            setTheme('system');
        } else {
            setTheme('light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={styles.toggleButton}
            aria-label="Переключить тему"
        >
            {theme === 'light' && <span className={styles.icon}>☀️</span>}
            {theme === 'dark' && <span className={styles.icon}>🌙</span>}
            {theme === 'system' && <span className={styles.icon}>💻</span>}
        </button>
    );
};