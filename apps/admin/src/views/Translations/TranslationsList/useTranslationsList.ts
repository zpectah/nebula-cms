import { useTranslationsQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const useTranslationsList = () => {
  const { translationsQuery } = useTranslationsQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = translationsQuery;

  const deleteSelectedHandler = (selected: number[]) => {
    // TODO
    console.log('on delete selected', selected);
    onAfterConfirm(selected);
  };

  return {
    items: items ?? [],
    isLoading,
    onDeleteSelected: deleteSelectedHandler,
  };
};
