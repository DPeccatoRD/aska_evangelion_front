'use client';

import { ReactNode } from 'react';

import Image from 'next/image';

import styles from './iconWidget.module.css';

interface IconWidgetProps {
  /**
   * Альтернативный текст для изображения
   */
  alt: string;
  /**
   * Высота изображения в пикселях
   */
  height: number;
  /**
   * Путь к изображению
   */
  imageSrc: string;
  /**
   * Текст, отображаемый под изображением
   */
  text: string | ReactNode;
  /**
   * Ширина изображения в пикселях
   */
  width: number;
  /**
   * Дополнительный класс для текста
   */
  textClassName?: string;
}

export const IconWidget = ({
  alt,
  height,
  imageSrc,
  text,
  width,
  textClassName,
}: IconWidgetProps) => (
  <div className={styles.iconWidget}>
    <div className={styles.imageContainer}>
      <Image
        alt={alt}
        height={height}
        priority
        src={imageSrc}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        width={width}
      />
    </div>
    {typeof text === 'string' ? (
      <p className={`${styles.text} ${textClassName || ''}`}>{text}</p>
    ) : (
      text
    )}
  </div>
);
