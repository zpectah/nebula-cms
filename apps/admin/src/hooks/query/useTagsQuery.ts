import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Tags, TagsDetail } from '@core';
import { API_URL_TAGS } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'tags';

export const useTagsQuery = (id?: string) => {
  const tagsQuery = useQuery<unknown, unknown, Tags>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_TAGS).then((response) => response.data),
  });

  const tagsDetailQuery = useQuery<unknown, unknown, TagsDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_TAGS}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    tagsQuery,
    tagsDetailQuery,
  };
};
