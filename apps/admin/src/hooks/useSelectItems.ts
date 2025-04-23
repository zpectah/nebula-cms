import { useTranslation } from 'react-i18next';
import { MenuItemProps } from '@mui/material';
import { useEffect, useState } from 'react';

export const useSelectItems = (numbers: string[] = []) => {
  const [items, setItems] = useState<MenuItemProps[]>([]);

  const { t } = useTranslation('form');

  useEffect(() => {
    const tmpItems = items;

    numbers.forEach((num) => {
      const index = tmpItems.findIndex((item) => item.value === num);

      if (index < 0)
        tmpItems.push({
          value: num,
          children: t(`options.${num}`),
        });
    });

    setItems(tmpItems);
  }, []);

  return items;
};
