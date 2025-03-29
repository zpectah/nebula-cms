import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Articles, ArticlesItem } from '@core';
import { API_URL_ARTICLES } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'articles';

export const useArticlesQuery = (id?: string) => {
  const articlesQuery = useQuery<unknown, unknown, Articles>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_ARTICLES).then((response) => response.data),
  });

  const articlesDetailQuery = useQuery<unknown, unknown, ArticlesItem>({
    queryKey: [`${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_ARTICLES}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    articlesQuery,
    articlesDetailQuery,
  };
};
