import { Key } from 'react';
import { Link } from 'react-router-dom';
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
} from '@mui/material';
import { ItemBase } from '@common';
import { orderKeys } from './enums';
import { DataTableProps } from './types';
import { useDataTable } from './useDataTable';

const DataTable = <T extends ItemBase>({ rows = [], columns = [], urlPrefix, isLoading }: DataTableProps<T>) => {
  const {
    visibleRows,
    emptyRows,
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
          {selected.length > 0 ? (
            <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
              {selected.length} selected
            </Typography>
          ) : (
            <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
              Nutrition
            </Typography>
          )}
          {selected.length > 0 ? (
            <Tooltip title="Delete">
              <IconButton>delete</IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton>filter</IconButton>
            </Tooltip>
          )}
        </Toolbar>
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
                        'aria-label': 'select all desserts',
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
                <TableCell align="right">Akce</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

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

                    {columns.map((column) => (
                      <TableCell
                        key={column.id as Key}
                        component={column.isTitle ? 'th' : 'td'}
                        scope={column.isTitle ? 'row' : undefined}
                        align={column.numeric ? 'right' : 'left'}
                        padding={column.disablePadding ? 'none' : 'normal'}
                      >
                        {row[column.id] as string}
                      </TableCell>
                    ))}

                    <TableCell align="right">
                      <Stack direction="row" gap={1} sx={{ display: 'inline-flex' }}>
                        <Button variant="outlined" color="error" size="small">
                          Delete
                        </Button>
                        <Button component={Link} to={`${urlPrefix}/${row.id}`} variant="outlined" size="small">
                          Detail
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={4} />
                </TableRow>
              )}
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
