import { Selector } from './selectorFactory';

const createSelectorMap = <T extends Record<string, Selector<unknown>>>(selectors: T): T =>
  selectors;

// Объединяем все селекторы в один объект
export const selectors = createSelectorMap({
  pageLoading: (state) => state.ui.pageLoading,
});
