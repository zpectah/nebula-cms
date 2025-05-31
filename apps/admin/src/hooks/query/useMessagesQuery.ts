import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Messages, MessagesDetail } from '@core';
import { API_URL_MESSAGES } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'messages';

export const useMessagesQuery = (id?: string) => {
  const messagesQuery = useQuery<unknown, unknown, Messages>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_MESSAGES).then((response) => response.data),
  });

  const messagesDetailQuery = useQuery<unknown, unknown, MessagesDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_MESSAGES}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    messagesQuery,
    messagesDetailQuery,
  };
};
