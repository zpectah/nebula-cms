import { useEffect, useState } from 'react';
import Editor, {
  createButton,
  Toolbar,
  Separator,
  useEditorState,
  EditorProvider,
  ContentEditableEvent,
} from 'react-simple-wysiwyg';
import i18next from 'i18next';
import { styled, Stack } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import { FieldLabel } from '../form/FieldLabel';

// https://www.npmjs.com/package/react-simple-wysiwyg

export interface WysiwygEditorProps {
  value?: string;
  onChange: (value: string, event: ContentEditableEvent) => void;
  name: string;
  label?: string;
  isRequired?: boolean;
}

const FieldWrapper = styled(Stack)(({ theme }) => ({
  '& .rsw-editor': {
    border: 0,
    borderRadius: 0,
  },
  '& .rsw-toolbar': {
    background: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey['700'] : theme.palette.grey['400'],
    borderRadius: theme.shape.borderRadius,
    borderBottom: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    '.rsw-btn': {
      color: theme.palette.text.primary,
      lineHeight: 1,

      '&:hover': {
        background: theme.palette.background.paper,
      },

      '&[data-active="true"]': {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
      },
    },
    '.rsw-separator': {
      marginLeft: 0,
      marginRight: 0,
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey['700'] : theme.palette.grey['400'],
    },
    '.rsw-dd': {},
  },
  '& .rsw-ce': {
    // marginTop: theme.spacing(0.5),
    minHeight: '250px',
    padding: theme.spacing(1.5),
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey['700'] : theme.palette.grey['400'],
    borderRadius: theme.shape.borderRadius,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: '1px',
    color: theme.palette.text.primary,

    '&.rsw-html': {},
  },
}));

const ButtonUndo = createButton(i18next.t('editor.undo') ?? '', <UndoIcon fontSize="inherit" />, 'undo');
const ButtonRedo = createButton(i18next.t('editor.redo') ?? '', <RedoIcon fontSize="inherit" />, 'redo');
const ButtonBold = createButton(i18next.t('editor.bold') ?? '', <FormatBoldIcon fontSize="inherit" />, 'bold');
const ButtonItalic = createButton(i18next.t('editor.italic') ?? '', <FormatItalicIcon fontSize="inherit" />, 'italic');
const ButtonUnderline = createButton(
  i18next.t('editor.underline') ?? '',
  <FormatUnderlinedIcon fontSize="inherit" />,
  'underline'
);
const ButtonStrikeThrough = createButton(
  i18next.t('editor.strikeThrough') ?? '',
  <FormatStrikethroughIcon fontSize="inherit" />,
  'strikeThrough'
);
const ButtonNumberedList = createButton(
  i18next.t('editor.orderedList') ?? '',
  <FormatListNumberedIcon fontSize="inherit" />,
  'insertOrderedList'
);
const ButtonBulletList = createButton(
  i18next.t('editor.bulletList') ?? '',
  <FormatListBulletedIcon fontSize="inherit" />,
  'insertUnorderedList'
);
const ButtonLink = createButton(i18next.t('editor.link') ?? '', <LinkIcon fontSize="inherit" />, () => {
  // eslint-disable-next-line no-alert
  document.execCommand('createLink', false, prompt('URL', '') || undefined);
});
const ButtonUnLink = createButton(i18next.t('editor.unlink') ?? '', <LinkOffIcon fontSize="inherit" />, 'unlink');
const ButtonClearFormatting = createButton(
  i18next.t('editor.removeFormat') ?? '',
  <FormatClearIcon fontSize="inherit" />,
  'removeFormat'
);
const ButtonHtml = ({ ...rest }) => {
  const editorState = useEditorState();

  const clickHandler = () => {
    editorState.update({
      htmlMode: !editorState.htmlMode,
    });
  };

  return (
    <button
      className="rsw-btn"
      data-active={editorState.htmlMode}
      onClick={clickHandler}
      tabIndex={-1}
      title={i18next.t('editor.htmlCode') ?? ''}
      type="button"
      {...rest}
    >
      {editorState.htmlMode ? <CodeOffIcon fontSize="inherit" /> : <CodeIcon fontSize="inherit" />}
    </button>
  );
};

const WysiwygEditor = ({ value, onChange, name, label, isRequired }: WysiwygEditorProps) => {
  const [html, setHtml] = useState<string>(value ?? '');
  const [focused, setFocused] = useState(false);

  const changeHandler = (event: ContentEditableEvent) => {
    const newValue = event.target.value;

    setHtml(newValue);

    onChange(newValue, event);
  };
  const focusHandler = () => setFocused(true);
  const blurHandler = () => setFocused(false);

  useEffect(() => {
    if (value) setHtml(value);
  }, [value]);

  return (
    <EditorProvider>
      <FieldWrapper className={focused ? 'is-focused' : ''}>
        {label && (
          <FieldLabel htmlFor={name}>
            {label}
            {isRequired && ' *'}
          </FieldLabel>
        )}
        <Editor
          name={name}
          value={html}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          containerProps={{
            style: { resize: 'vertical' },
          }}
        >
          <Toolbar>
            <ButtonBold />
            <ButtonItalic />
            <ButtonUnderline />
            <ButtonStrikeThrough />
            <Separator />
            <ButtonNumberedList />
            <ButtonBulletList />
            <Separator />
            <ButtonLink />
            <ButtonUnLink />
            <Separator />
            <ButtonClearFormatting />
            <Separator />
            <ButtonUndo />
            <ButtonRedo />
            <Separator />
            <ButtonHtml />
            <Separator />
          </Toolbar>
        </Editor>
      </FieldWrapper>
    </EditorProvider>
  );
};

export default WysiwygEditor;
