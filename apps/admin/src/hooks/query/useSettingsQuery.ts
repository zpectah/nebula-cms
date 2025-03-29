import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL_SETTINGS } from '../../constants';

const QUERY_KEY_BASE = 'settings';

export const useSettingsQuery = () => {
  const settingsQuery = useQuery({
    queryKey: [QUERY_KEY_BASE],
    queryFn: () => axios.get(API_URL_SETTINGS).then((response) => response),
  });

  return {
    settingsQuery,
  };
};
