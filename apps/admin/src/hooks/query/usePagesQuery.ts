import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pages, PagesDetail } from '@core';
import { API_URL_PAGES } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'pages';

export const usePagesQuery = (id?: string) => {
  const pagesQuery = useQuery<unknown, unknown, Pages>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_PAGES).then((response) => response.data),
  });

  const pagesDetailQuery = useQuery<unknown, unknown, PagesDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_PAGES}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    pagesQuery,
    pagesDetailQuery,
  };
};
