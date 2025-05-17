import { useArticlesQuery } from '../../../hooks';

export const useArticlesList = () => {
  const { articlesQuery } = useArticlesQuery();

  const { data: items, isLoading } = articlesQuery;

  const deleteRowHandler = (id: number) => {
    // TODO
    console.log('on delete row', id);
  };

  const deleteSelectedHandler = (selected: number[]) => {
    // TODO
    console.log('on delete selected', selected);
  };

  return {
    items: items ?? [],
    isLoading,
    onDeleteRow: deleteRowHandler,
    onDeleteSelected: deleteSelectedHandler,
  };
};
