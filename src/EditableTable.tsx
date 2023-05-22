import { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';

import { TableContent, TableList, TableType, Option } from './tableConfig';
import { ChangeEvent } from 'react';

const EditableTable = () => {
  const [tableData, setTableData] = useState<TableContent | undefined>(
    undefined
  );

  const onTableSelectChange = (newValue: OnChangeValue<Option, false>) => {
    if (newValue) {
      setTableData(TableList[newValue.value as TableType]);
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (tableData) {
      const [id, index] = name.split('-');
      const updatedRows = tableData.rows.map((row, i) => {
        if (i === parseInt(index)) {
          return row.map((r) => (r.id === id ? { ...r, value } : r));
        }
        return row;
      });

      setTableData({ ...tableData, rows: updatedRows });
    }
  };

  const onAddRow = () => {
    if (tableData) {
      const newRow = tableData.headers.map((header) => ({
        id: header.id,
        value: '',
      }));
      setTableData({ ...tableData, rows: [...tableData.rows, newRow] });
    }
  };

  return (
    <div>
      <div style={{ marginTop: '1rem', maxWidth: '200px' }}>
        <Select
          id="table-list"
          name={'table-list'}
          options={[
            { label: 'Table 1', value: 'table1' },
            { label: 'Table 2', value: 'table2' },
            { label: 'Table 3', value: 'table3' },
          ]}
          onChange={onTableSelectChange}
          openMenuOnFocus={true}
          autoFocus={true}
          isSearchable={false}
        />
      </div>

      {tableData && (
        <table style={{ marginTop: '1rem' }}>
          <thead>
            <tr>
              {tableData.headers.map(({ title, id }) => (
                <th key={id}>
                  <p>
                    <strong>{title}</strong>
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.rows.map((row, index) => (
              <tr key={index}>
                {row.map(({ value, id }) => (
                  <td key={id}>
                    {id === 'count' ? (
                      <strong>{(index + 1).toString()}</strong>
                    ) : (
                      <>
                        {tableData.suggestions[id] ? (
                          <Select
                            components={{
                              DropdownIndicator: () => null,
                              IndicatorSeparator: () => null,
                            }}
                            id={`${id}-${index}`}
                            name={`${id}-${index}`}
                            options={tableData.suggestions[id]}
                            defaultValue={tableData.suggestions[id].find(
                              (option) => option.label === value
                            )}
                            placeholder=""
                            styles={{
                              control: (baseStyles) => ({
                                ...baseStyles,
                                border: 0,
                              }),
                            }}
                          />
                        ) : (
                          <input
                            className="editableInput"
                            id={`${id}-${index}`}
                            name={`${id}-${index}`}
                            value={value}
                            type="text"
                            onChange={onChangeInput}
                            placeholder="Type..."
                          />
                        )}
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr onClick={onAddRow}>
              <td colSpan={tableData.headers.length} className="addRow">
                ➕ New
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default EditableTable;
