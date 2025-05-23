'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { italiana } from 'shared/lib/utils/fonts';
import { IconWidget } from 'shared/ui';

import styles from './page.module.css';

export default function StartPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home'); // перенаправление на dashboard через 3 секунды
    }, 3000);

    return () => clearTimeout(timer); // очистка таймера при размонтировании компонента
  }, [router]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <IconWidget
          alt='Логотип приложения'
          height={2000}
          imageSrc='/startLogo.svg'
          text='CoutureMe'
          textClassName={italiana.className}
          width={2000}
        />
      </div>
    </div>
  );
}
