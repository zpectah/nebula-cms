import { useTranslation } from 'react-i18next';
import { ArticlesItem } from '@core';
import config from '../../../config';
import { DataTable } from '../../../components';
import { useArticlesList } from './useArticlesList';

const ArticlesList = () => {
  const { t } = useTranslation(['common', 'form']);
  const { items, isLoading, onDeleteSelected } = useArticlesList();

  return (
    <DataTable<ArticlesItem>
      rows={items}
      columns={[
        { id: 'name', label: t('labels.name'), isTitle: true, isLink: true },
        { id: 'type', label: t('labels.type'), width: '200px', renderValue: (value) => t(`form:options.${value}`) },
        { id: 'active', label: t('labels.active'), renderValue: (value) => (value === true ? 'yes' : 'no') },
      ]}
      urlPrefix={config.routes.articles.path}
      isLoading={isLoading}
      onDeleteSelected={onDeleteSelected}
    />
  );
};

export default ArticlesList;
