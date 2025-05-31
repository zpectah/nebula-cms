import { useTranslation } from 'react-i18next';
import { useToastsStore } from '../store';

export const useDataListControl = () => {
  const { t } = useTranslation();
  const { addToast } = useToastsStore();

  const createToastAfterDelete = (selected: number[]) => {
    addToast(t('message.selectedItemsDeleted'), 'success', true);
  };

  return {
    onAfterConfirm: createToastAfterDelete,
  };
};
