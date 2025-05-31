import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Menu, MenuDetail } from '@core';
import { API_URL_MENU } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'menu';

export const useMenuQuery = (id?: string) => {
  const menuQuery = useQuery<unknown, unknown, Menu>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_MENU).then((response) => response.data),
  });

  const menuDetailQuery = useQuery<unknown, unknown, MenuDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_MENU}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    menuQuery,
    menuDetailQuery,
  };
};
