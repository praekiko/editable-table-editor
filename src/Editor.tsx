import {
  createBasicElementsPlugin,
  createBoldPlugin,
  createItalicPlugin,
  createPlugins,
  createStrikethroughPlugin,
  createTablePlugin,
  createUnderlinePlugin,
  Plate,
  PlateProvider,
  TEditableProps,
} from '@udecode/plate';
import { plateUI } from './plateUI';

const editableProps: TEditableProps = {
  spellCheck: false,
  autoFocus: false,
  placeholder: 'Comment…',
};

const plugins = createPlugins(
  [
    createBasicElementsPlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createTablePlugin(),
  ],
  { components: plateUI }
);

export default function Editor() {
  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <PlateProvider plugins={plugins}>
        <Plate editableProps={editableProps} />
      </PlateProvider>
    </div>
  );
}
