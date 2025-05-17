import { Key } from 'react';
import { Link } from 'react-router-dom';
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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { itemBaseKeys, ItemBase } from '@common';
import { getFormattedDate, getFormattedTime } from '../../utils';
import { ConfirmationDialog } from '../dialog';
import { orderKeys } from './enums';
import { DataTableProps } from './types';
import { useDataTable } from './useDataTable';
import { TABLE_ROWS_PER_PAGE_OPTIONS } from './constants';

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
  onDeleteSelected,
}: DataTableProps<T>) => {
  const { t } = useTranslation();
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
    isConfirmationOpen,
    onConfirmationOpen,
    onConfirmationClose,
    onConfirmationConfirm,
  } = useDataTable<T>(rows, onDeleteSelected);

  return (
    <>
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
                <Button
                  variant="outlined"
                  size="small"
                  onClick={onSort(itemBaseKeys.id)}
                  endIcon={
                    orderBy === itemBaseKeys.id ? (
                      order === orderKeys.asc ? (
                        <ArrowUpwardIcon fontSize="small" />
                      ) : (
                        <ArrowDownwardIcon fontSize="small" />
                      )
                    ) : null
                  }
                >
                  {orderBy !== itemBaseKeys.id ? t('table.orderById') : t('table.order')}
                </Button>
              </Stack>
              <Stack direction="row" alignItems="center" gap={2}>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  disabled={selected.length < 1}
                  onClick={onConfirmationOpen}
                >
                  {t('button.deleteSelected')} ({selected.length})
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
                  const linkUrl = `${urlPrefix}/${row.id}`;

                  return (
                    <TableRow
                      key={row.id}
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          onClick={() => onSelect(row.id)}
                          slotProps={{
                            input: {
                              'aria-labelledby': labelId,
                            },
                          }}
                        />
                      </TableCell>
                      {columns.map((column, columnIndex) => {
                        const value = row[column.id] as string;
                        const label = column.renderValue ? column.renderValue(value, row, index) : value;

                        return (
                          <TableCell
                            key={column.id as Key}
                            component={column.isTitle ? 'th' : 'td'}
                            scope={column.isTitle ? 'row' : undefined}
                            align={column.numeric ? 'right' : 'left'}
                            padding={column.disablePadding ? 'none' : 'normal'}
                            id={column.isTitle ? labelId : `${labelId}-${columnIndex}`}
                          >
                            {column.isLink ? <RowTitleLink to={linkUrl}>{label}</RowTitleLink> : label}
                          </TableCell>
                        );
                      })}
                      {!disableUpdatedColumn && (
                        <TableCell>
                          {getFormattedDate(row.updated)}
                          <br />
                          {getFormattedTime(row.updated)}
                        </TableCell>
                      )}
                      <TableCell align="right">
                        <Stack direction="row" gap={1} sx={{ display: 'inline-flex' }}>
                          <Button component={Link} to={linkUrl} variant="outlined" size="small">
                            {t('table.detail')}
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
            rowsPerPageOptions={TABLE_ROWS_PER_PAGE_OPTIONS}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, page) => onPageChange(page)}
            onRowsPerPageChange={onRowsPerChange}
          />
        </Paper>
      </Box>
      <ConfirmationDialog
        open={isConfirmationOpen}
        onConfirm={onConfirmationConfirm}
        onClose={onConfirmationClose}
        title={t('confirmation.deleteSelected.title')}
        description={t('confirmation.deleteSelected.description')}
      />
    </>
  );
};

export default DataTable;
