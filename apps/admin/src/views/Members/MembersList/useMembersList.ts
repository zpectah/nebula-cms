import { useMembersQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const useMembersList = () => {
  const { membersQuery } = useMembersQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = membersQuery;

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
