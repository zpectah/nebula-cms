import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Categories, CategoriesDetail } from '@core';
import { API_URL_CATEGORIES } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'categories';

export const useCategoriesQuery = (id?: string) => {
  const categoriesQuery = useQuery<unknown, unknown, Categories>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_CATEGORIES).then((response) => response.data),
  });

  const categoriesDetailQuery = useQuery<unknown, unknown, CategoriesDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_CATEGORIES}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    categoriesQuery,
    categoriesDetailQuery,
  };
};
