import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
import { ItemBase } from '@common';
import { Order } from './types';
import { getComparator } from './helpers';
import { orderKeys } from './enums';

export const useDataTable = <T extends ItemBase>(rows: T[]) => {
  const [order, setOrder] = useState<Order>(orderKeys.asc);
  const [orderBy, setOrderBy] = useState<keyof T>('id');
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const sortHandler = (event: MouseEvent<unknown>, property: keyof T) => {
    const isAsc = orderBy === property && order === orderKeys.asc;

    setOrder(isAsc ? orderKeys.desc : orderKeys.asc);
    setOrderBy(property);
  };

  const createSortHandler = (property: keyof ItemBase) => (event: MouseEvent<unknown>) => sortHandler(event, property);

  const selectAllClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }

    setSelected([]);
  };

  const selectHandler = (event: MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const changePageHandler = (event: unknown, newPage: number) => setPage(newPage);

  const changeRowsPerPageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () => [...rows].sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return {
    visibleRows,
    emptyRows,
    order,
    orderBy,
    selected,
    page,
    rowsPerPage,
    onRowsPerChange: changeRowsPerPageHandler,
    onPageChange: changePageHandler,
    onSelect: selectHandler,
    onSelectAll: selectAllClickHandler,
    onSort: createSortHandler,
  };
};
