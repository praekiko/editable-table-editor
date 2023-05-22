import { Fragment, useCallback, useEffect, useState } from 'react';
import './App.css';
import EditableTable from './EditableTable';
import Editor from './Editor';

interface ReportData {
  id: number;
  tableType: string;
  comment: string;
  createdAt: Date;
}

function App() {
  const [reportData, setReportData] = useState<ReportData[]>([]);

  const onAdd = useCallback(() => {
    setReportData([
      ...reportData,
      {
        id: reportData.length,
        tableType: '',
        comment: '',
        createdAt: new Date(Date.now()),
      },
    ]);
  }, [reportData]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === '/') {
        onAdd();
      }
    },
    [onAdd]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={'main'}>
      <div className={'grid'}>
        {reportData.map(({ id, createdAt }) => {
          return (
            <Fragment key={id}>
              <p className="createdAt">
                Created at {createdAt.toLocaleDateString()} at{' '}
                {createdAt.toLocaleTimeString()}
              </p>
              <Editor />
              <EditableTable />
            </Fragment>
          );
        })}

        <div>
          <button onClick={onAdd}>
            ➕ Add{' '}
            <i>
              <small>(or type / to add new table)</small>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
