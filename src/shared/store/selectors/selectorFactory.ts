import { shallowEqual } from 'react-redux';

import { useAppSelector } from 'shared/store';
import { AppState } from 'shared/store';

import { selectors } from './selectorStore';

export type Selector<TReturn> = (state: AppState) => TReturn;
/**
 * Создает фабрику селекторов для доступа к определенной части состояния.
 *
 * @param selectors Объект с селекторами
 * @returns Функцию, которая создает хук, выбирающий только нужные поля
 */
export const createSelectorFactory = <T extends Record<string, Selector<unknown>>>(selectors: T) =>
  /**
   * Создает хук, который выбирает только указанные поля из состояния
   *
   * @param keys Массив ключей нужных селекторов
   * @returns Хук, возвращающий объект с выбранными полями
   */
  function createSelector<const K extends readonly (keyof T)[]>(...keys: K) {
    type SelectedKeys = K[number];
    type SelectorResults = {
      [P in SelectedKeys]: ReturnType<T[P]>;
    };

    return function useCustomSelector(): SelectorResults {
      return useAppSelector((state) => {
        const result = {} as SelectorResults;

        keys.forEach((key) => {
          result[key] = selectors[key](state) as ReturnType<T[typeof key]>;
        });

        return result;
      }, shallowEqual);
    };
  };

// Создаем фабрику селекторов
export const createLocalSelector = createSelectorFactory(selectors);
