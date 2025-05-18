import { useArticlesQuery } from '../../../hooks';

export const useArticlesList = () => {
  const { articlesQuery } = useArticlesQuery();

  const { data: items, isLoading } = articlesQuery;

  const deleteSelectedHandler = (selected: number[]) => {
    // TODO
    console.log('on delete selected', selected);
  };

  return {
    items: items ?? [],
    isLoading,
    onDeleteSelected: deleteSelectedHandler,
  };
};
