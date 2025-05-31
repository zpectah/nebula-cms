import { useTagsQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const useTagsList = () => {
  const { tagsQuery } = useTagsQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = tagsQuery;

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
