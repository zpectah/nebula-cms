import { useMenuQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const useMenuList = () => {
  const { menuQuery } = useMenuQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = menuQuery;

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
