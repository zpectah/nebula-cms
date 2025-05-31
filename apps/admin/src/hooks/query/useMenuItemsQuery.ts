import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MenuItems, MenuItemsDetail } from '@core';
import { API_URL_MENUITEMS } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'menuItems';

export const useMenuItemsQuery = (id?: string) => {
  const menuItemsQuery = useQuery<unknown, unknown, MenuItems>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_MENUITEMS).then((response) => response.data),
  });

  const menuItemsDetailQuery = useQuery<unknown, unknown, MenuItemsDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_MENUITEMS}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    menuItemsQuery,
    menuItemsDetailQuery,
  };
};
