import { ArticlesItem } from '@core';
import config from '../../../config';
import { useArticlesQuery } from '../../../hooks';
import { DataTable } from '../../../components';

const ArticlesList = () => {
  const { articlesQuery } = useArticlesQuery();

  const { routes } = config;
  const { data: items, isLoading } = articlesQuery;

  return (
    <DataTable<ArticlesItem>
      rows={items ?? []}
      columns={[
        { id: 'name', label: 'Name', isTitle: true },
        { id: 'updated', label: 'Updated' },
      ]}
      urlPrefix={routes.articles.path}
      isLoading={isLoading}
    />
  );
};

export default ArticlesList;
