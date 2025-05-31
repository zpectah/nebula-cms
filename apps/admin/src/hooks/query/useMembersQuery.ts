import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Members, MembersDetail } from '@core';
import { API_URL_MEMBERS } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'members';

export const useMembersQuery = (id?: string) => {
  const membersQuery = useQuery<unknown, unknown, Members>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_MEMBERS).then((response) => response.data),
  });

  const membersDetailQuery = useQuery<unknown, unknown, MembersDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_MEMBERS}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    membersQuery,
    membersDetailQuery,
  };
};
