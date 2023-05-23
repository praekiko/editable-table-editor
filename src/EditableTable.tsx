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

  const onSuggestionChange = (
    newValue: OnChangeValue<Option, false>,
    rowIndex: number,
    columnIndex: number
  ) => {
    if (tableData) {
      const updatedRows = tableData.rows.map((columns, index) => {
        if (index === rowIndex) {
          return columns.map((column, colIndex) => {
            if (columnIndex === colIndex) {
              return { ...column, value: newValue?.label };
            }

            if (colIndex > columnIndex) {
              return { ...column, value: undefined };
            }

            return column;
          });
        }

        return columns;
      });

      setTableData({ ...tableData, rows: updatedRows });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ maxWidth: '200px' }}>
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
            {tableData.rows.map((columns, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => {
                    if (column.id === 'count') {
                      return (
                        <td key={colIndex}>
                          <strong>{(rowIndex + 1).toString()}</strong>
                        </td>
                      );
                    }

                    const columnConfig = tableData.columns.find(
                      (col) => col.id === column.id
                    );

                    if (columnConfig && columnConfig.suggestions) {
                      const prevColumn = tableData.columns[colIndex - 1];
                      const prevColumnRowData = columns.find(
                        (column) => column.id === prevColumn.id
                      );
                      const suggestions =
                        prevColumnRowData && prevColumnRowData.value
                          ? columnConfig.suggestions[prevColumnRowData.value] ??
                            columnConfig.suggestions.default
                          : columnConfig.suggestions.default;

                      return (
                        <td key={colIndex}>
                          <Select
                            key={`${column.id}-${colIndex}`}
                            id={`${column.id}-${colIndex}`}
                            name={`${column.id}-${colIndex}`}
                            components={{
                              DropdownIndicator: () => null,
                              IndicatorSeparator: () => null,
                            }}
                            options={suggestions}
                            onChange={(newValue) =>
                              onSuggestionChange(newValue, rowIndex, colIndex)
                            }
                            value={
                              !column.value
                                ? null
                                : suggestions.find(
                                    (option) => option.label === column.value
                                  )
                            }
                            placeholder=""
                            styles={{
                              control: (baseStyles) => ({
                                ...baseStyles,
                                border: 0,
                              }),
                            }}
                          />
                        </td>
                      );
                    }

                    return (
                      <td key={colIndex}>
                        <input
                          className="editableInput"
                          id={`${column.id}-${colIndex}`}
                          name={`${column.id}-${colIndex}`}
                          value={column.value}
                          type="text"
                          onChange={onChangeInput}
                          placeholder="Type..."
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
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
