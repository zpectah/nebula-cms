import { useEffect } from 'react';
import config from '../config';
import { DocumentMeta } from '../types';

interface UseDocumentMetaProps extends Partial<DocumentMeta> {
  detail?: string;
  panel?: string;
}

export const useDocumentMeta = ({ title, detail, panel }: UseDocumentMetaProps) => {
  const { admin } = config;

  useEffect(() => {
    const appTitle = admin.meta.name;

    let documentTitle = appTitle;
    if (title && !(detail && panel)) documentTitle = `${title} | ${appTitle}`;
    if (title && detail) documentTitle = `${title}: ${detail} | ${appTitle}`;
    if (title && panel) documentTitle = `${title}: ${panel} | ${appTitle}`;

    document.title = documentTitle;
  }, [title, detail, panel]);
};
