import { useAttachmentsQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const useAttachmentsList = () => {
  const { attachmentsQuery } = useAttachmentsQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = attachmentsQuery;

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
