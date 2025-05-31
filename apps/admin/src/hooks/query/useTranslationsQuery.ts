import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Translations, TranslationsDetail } from '@core';
import { API_URL_TRANSLATIONS } from '../../constants';
import { newItemKey } from '../../enums';

const QUERY_KEY_BASE = 'translations';

export const useTranslationsQuery = (id?: string) => {
  const translationsQuery = useQuery<unknown, unknown, Translations>({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_TRANSLATIONS).then((response) => response.data),
  });

  const translationsDetailQuery = useQuery<unknown, unknown, TranslationsDetail>({
    queryKey: [QUERY_KEY_BASE, `${QUERY_KEY_BASE}-${id}`],
    queryFn: () => axios.get(`${API_URL_TRANSLATIONS}/${id}`).then((response) => response.data),
    enabled: !!id && id !== newItemKey,
  });

  return {
    translationsQuery,
    translationsDetailQuery,
  };
};
