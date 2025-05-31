import { useMessagesQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const useMessagesList = () => {
  const { messagesQuery } = useMessagesQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = messagesQuery;

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
