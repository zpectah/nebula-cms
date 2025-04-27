import { Key } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { visuallyHidden } from '@mui/utils';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  Button,
  Stack,
  styled,
  Divider,
} from '@mui/material';
import { ItemBase } from '@common';
import { orderKeys } from './enums';
import { DataTableProps } from './types';
import { useDataTable } from './useDataTable';

const RowTitleLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 700,

  '&:hover': {
    textDecoration: 'underline',
  },
}));

const DataTable = <T extends ItemBase>({
  rows = [],
  columns = [],
  urlPrefix,
  isLoading,
  disableUpdatedColumn,
}: DataTableProps<T>) => {
  const {
    visibleRows,
    order,
    orderBy,
    selected,
    page,
    rowsPerPage,
    onRowsPerChange,
    onPageChange,
    onSelect,
    onSelectAll,
    onSort,
  } = useDataTable<T>(rows);
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar
          sx={[
            {
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
            },
          ]}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography>
                Order by: {String(orderBy)}|{order}
              </Typography>
              <Button variant="outlined" size="small" onClick={() => onSort('id')}>
                Reset to id
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center" gap={2}>
              <Button variant="outlined" size="small" disabled={selected.length <= 0}>
                Delete selected ({selected.length})
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
        <Divider />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={selected.length > 0 && selected.length < rows.length}
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={onSelectAll}
                    slotProps={{
                      input: {
                        'aria-label': 'select all rows',
                      },
                    }}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id as Key}
                    align={column.numeric ? 'right' : 'left'}
                    padding={column.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === column.id ? order : false}
                    width={column.width ?? 'auto'}
                  >
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : orderKeys.asc}
                      onClick={onSort(column.id as keyof ItemBase)}
                    >
                      {column.label}
                      {orderBy === column.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === orderKeys.desc ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
                {!disableUpdatedColumn && <TableCell width="150px">{t('labels.updated')}</TableCell>}
                <TableCell align="right" width="150px">
                  {t('labels.action')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `table-row-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => onSelect(event, row.id)}
                        slotProps={{
                          input: {
                            'aria-labelledby': labelId,
                          },
                        }}
                      />
                    </TableCell>
                    {columns.map((column, columnIndex) => {
                      const value = row[column.id] as string;
                      const label = column.renderValue ? column.renderValue(value) : value;

                      return (
                        <TableCell
                          key={column.id as Key}
                          component={column.isTitle ? 'th' : 'td'}
                          scope={column.isTitle ? 'row' : undefined}
                          align={column.numeric ? 'right' : 'left'}
                          padding={column.disablePadding ? 'none' : 'normal'}
                          id={column.isTitle ? labelId : `${labelId}-${columnIndex}`}
                        >
                          {column.isLink ? <RowTitleLink to={`${urlPrefix}/${row.id}`}>{label}</RowTitleLink> : label}
                        </TableCell>
                      );
                    })}
                    {!disableUpdatedColumn && <TableCell>{dayjs(row.updated).format('DD.MM. YYYY')} </TableCell>}
                    <TableCell align="right">
                      <Stack direction="row" gap={1} sx={{ display: 'inline-flex' }}>
                        <Button component={Link} to={`${urlPrefix}/${row.id}`} variant="outlined" size="small">
                          Detail
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerChange}
        />
      </Paper>
    </Box>
  );
};

export default DataTable;
