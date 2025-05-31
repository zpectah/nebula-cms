import { useUsersQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const useUsersList = () => {
  const { usersQuery } = useUsersQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = usersQuery;

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
