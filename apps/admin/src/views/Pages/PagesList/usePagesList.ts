import { usePagesQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const usePagesList = () => {
  const { pagesQuery } = usePagesQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = pagesQuery;

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
