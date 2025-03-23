import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, ButtonGroup, Button, Stack } from '@mui/material';
import config from '../../config';
import { ViewLayout, Card } from '../../components';
import { PanelValue } from './types';
import { settingsPanelNameKeys } from './enums';
import { SETTINGS_PANELS_KEYS } from './constants';
import { useSettingsPanels } from './useSettingsPanels';
import { SettingsGlobalPanel, SettingsClientPanel, SettingsLanguagePanel, SettingsMaintenancePanel } from './panels';
import { SettingsForm } from './SettingsForm';
import { useDocumentMeta } from '../../helpers';

const TabButton = styled(Button)(({ theme }) => ({
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
}));

const Settings = () => {
  const { panel } = useParams();
  const { t } = useTranslation(['common', 'views']);
  const { currentPanel, onPanelChange } = useSettingsPanels(panel as PanelValue);

  const settingsPanelViews = {
    [settingsPanelNameKeys.global]: {
      title: t('panels.global'),
      subtitle: undefined,
      children: <SettingsGlobalPanel />,
    },
    [settingsPanelNameKeys.client]: {
      title: t('panels.client'),
      subtitle: undefined,
      children: <SettingsClientPanel />,
    },
    [settingsPanelNameKeys.language]: {
      title: t('panels.language'),
      subtitle: undefined,
      children: <SettingsLanguagePanel />,
    },
    [settingsPanelNameKeys.maintenance]: {
      title: t('panels.maintenance'),
      subtitle: undefined,
      children: <SettingsMaintenancePanel />,
    },
  };

  useDocumentMeta({ title: t('views:Settings.title'), panel: settingsPanelViews[currentPanel as PanelValue].title });

  return (
    <ViewLayout pageTitle={t('views:Settings.title')} pageSubtitle="Subtitle">
      <Stack gap={2}>
        <ButtonGroup variant="text" color="inherit">
          {SETTINGS_PANELS_KEYS.map((key) => (
            <TabButton
              key={key}
              id={`settings-tab-${key}`}
              aria-controls={`settings-panel-${key}`}
              onClick={() => onPanelChange(key as PanelValue)}
              children={t(`panels.${key}`)}
              color={key === currentPanel ? 'primary' : 'inherit'}
            />
          ))}
        </ButtonGroup>
        <SettingsForm>
          {SETTINGS_PANELS_KEYS.map((key) => (
            <Card
              key={key}
              role="tabpanel"
              id={`settings-panel-${key}`}
              aria-labelledby={`settings-tab-${key}`}
              sx={{ display: key !== currentPanel ? 'none' : 'initial' }}
              {...settingsPanelViews[key as PanelValue]}
            />
          ))}
        </SettingsForm>
      </Stack>
    </ViewLayout>
  );
};

export default Settings;
