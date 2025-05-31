import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Users, UsersDetail } from '@core';
import { API_URL_USERS } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'users';

export const useUsersQuery = (id?: string) => {
  const usersQuery = useQuery<unknown, unknown, Users>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_USERS).then((response) => response.data),
  });

  const usersDetailQuery = useQuery<unknown, unknown, UsersDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_USERS}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    usersQuery,
    usersDetailQuery,
  };
};
