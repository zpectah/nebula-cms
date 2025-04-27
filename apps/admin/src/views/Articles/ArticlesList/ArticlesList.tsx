import { useTranslation } from 'react-i18next';
import { ArticlesItem } from '@core';
import config from '../../../config';
import { useArticlesQuery } from '../../../hooks';
import { DataTable } from '../../../components';

const ArticlesList = () => {
  const { t } = useTranslation(['common', 'form']);
  const { articlesQuery } = useArticlesQuery();

  const { routes } = config;
  const { data: items, isLoading } = articlesQuery;

  return (
    <DataTable<ArticlesItem>
      rows={items ?? []}
      columns={[
        { id: 'name', label: t('labels.name'), isTitle: true, isLink: true },
        { id: 'type', label: t('labels.type'), width: '200px', renderValue: (value) => t(`form:options.${value}`) },
      ]}
      urlPrefix={routes.articles.path}
      isLoading={isLoading}
    />
  );
};

export default ArticlesList;
