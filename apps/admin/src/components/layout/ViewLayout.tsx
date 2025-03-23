import { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import { WithChildren } from '@common';
import { Breadcrumbs } from '../Breadcrumbs';

interface ViewLayoutProps extends WithChildren {
  pageTitle?: string;
  pageSubtitle?: string;
  action?: ReactNode;
  disableBreadcrumbs?: boolean;
}

const ViewLayout = ({ children, pageTitle, pageSubtitle, action, disableBreadcrumbs }: ViewLayoutProps) => (
  <Stack gap={6} sx={{ width: '100%' }}>
    <Breadcrumbs disabled={disableBreadcrumbs} />
    <Stack direction="row" alignItems="flex-start" justifyContent="space-between" gap={2}>
      <Stack gap={1}>
        {pageTitle && <Typography variant="h1">{pageTitle}</Typography>}
        {pageSubtitle && <Typography variant="subtitle1">{pageSubtitle}</Typography>}
      </Stack>
      {action && <Stack alignItems="flex-end">{action}</Stack>}
    </Stack>
    {children}
  </Stack>
);

export default ViewLayout;
