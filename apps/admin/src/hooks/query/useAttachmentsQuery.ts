import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Attachments, AttachmentsDetail } from '@core';
import { API_URL_ATTACHMENTS } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'attachments';

export const useAttachmentsQuery = (id?: string) => {
  const attachmentsQuery = useQuery<unknown, unknown, Attachments>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_ATTACHMENTS).then((response) => response.data),
  });

  const attachmentsDetailQuery = useQuery<unknown, unknown, AttachmentsDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_ATTACHMENTS}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    attachmentsQuery,
    attachmentsDetailQuery,
  };
};
