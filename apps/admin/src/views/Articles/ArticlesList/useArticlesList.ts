import { useArticlesQuery } from '../../../hooks';
import { useDataListControl } from '../../../hooks';

export const useArticlesList = () => {
  const { articlesQuery } = useArticlesQuery();
  const { onAfterConfirm } = useDataListControl();

  const { data: items, isLoading } = articlesQuery;

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
