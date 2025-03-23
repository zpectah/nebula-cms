import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import { PanelValue } from './types';

export const useSettingsPanels = (panel?: PanelValue) => {
  const [currentPanel, setCurrentPanel] = useState<PanelValue>(panel as PanelValue);

  const { routes } = config;

  const navigate = useNavigate();

  const changePanelHandler = (panel: PanelValue) => navigate(`${routes.settings.path}/${panel}`);

  useEffect(() => {
    if (panel) setCurrentPanel(panel);
  }, [panel]);

  return {
    currentPanel,
    onPanelChange: changePanelHandler,
  };
};
