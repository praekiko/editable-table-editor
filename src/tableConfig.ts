export enum TableType {
  table1 = 'table1',
  table2 = 'table2',
  table3 = 'table3',
}

interface TableHeader {
  id: string;
  title: string;
}

interface TableRow {
  id: string;
  value?: string;
}

export interface Option {
  label: string;
  value: string;
}

type TableSuggestionOptions = { [key in string]: Option[] };

export interface TableContent {
  headers: TableHeader[];
  rows: TableRow[][];
  suggestions: TableSuggestionOptions;
}

const table1: TableContent = {
  headers: [
    { id: 'count', title: '' },
    { id: 'physical_exam', title: 'Physical exam' },
    { id: 'description', title: 'Description' },
  ],
  rows: [
    [
      { id: 'count' },
      { id: 'physical_exam', value: 'HEENT' },
      { id: 'description', value: '' },
    ],
    [
      { id: 'count' },
      { id: 'physical_exam', value: 'Heart' },
      { id: 'description', value: '' },
    ],
    [
      { id: 'count' },
      { id: 'physical_exam', value: 'Lung' },
      { id: 'description', value: '' },
    ],
    [
      { id: 'count' },
      { id: 'physical_exam', value: 'Abdomen' },
      { id: 'description', value: '' },
    ],
    [
      { id: 'count' },
      { id: 'physical_exam', value: 'Extremities' },
      { id: 'description', value: '' },
    ],
  ],
  suggestions: {
    physical_exam: [
      { value: '0', label: 'HEENT' },
      { value: '1', label: 'Heart' },
      { value: '2', label: 'Lung' },
      { value: '3', label: 'Abdomen' },
      { value: '4', label: 'Extremities' },
      { value: '5', label: 'Eyes' },
      { value: '6', label: 'Nose' },
      { value: '7', label: 'Breast' },
      { value: '8', label: 'Tonsils' },
      { value: '9', label: 'Arms' },
    ],
    description: [
      { value: '0', label: 'within normal limit' },
      { value: '1', label: 'clear' },
      { value: '2', label: 'injected pharynx' },
      { value: '3', label: 'exudate tonsils' },
      { value: '4', label: 'no breast mass' },
      { value: '5', label: 'cataract both eyes' },
      { value: '6', label: 'pitting edema Rt leg' },
      { value: '7', label: 'scratch wound Lt forearm' },
    ],
  },
};

const table2: TableContent = {
  headers: [
    { id: 'count', title: '' },
    { id: 'medication_name', title: 'Medication name' },
    { id: 'instruction', title: 'Instruction' },
    { id: 'quantity', title: 'Quantity' },
  ],
  rows: [
    [
      { id: 'count' },
      { id: 'medication_name', value: '' },
      { id: 'instruction', value: '' },
      { id: 'quantity', value: '' },
    ],
  ],
  suggestions: {
    medication_name: [
      { value: '0', label: 'Amoxicillin(500mg)' },
      { value: '1', label: 'Paracetamol(500mg)' },
      { value: '2', label: 'Diclofenac amp' },
      { value: '3', label: 'Morphine amp' },
    ],
    instruction: [
      { value: '0', label: '1 tab 3 times a day' },
      { value: '1', label: '1 tab every 6 hr' },
      { value: '2', label: '75 mg IM' },
      { value: '3', label: '40 mg IV' },
    ],
    quantity: [
      { value: '0', label: '1' },
      { value: '1', label: '2' },
      { value: '2', label: '3' },
      { value: '3', label: '4' },
      { value: '4', label: '5' },
      { value: '5', label: '6' },
      { value: '6', label: '7' },
      { value: '7', label: '8' },
      { value: '8', label: '9' },
      { value: '9', label: '10' },
    ],
  },
};

const table3: TableContent = {
  headers: [
    { id: 'count', title: '' },
    { id: 'follow_up', title: 'Follow up' },
    { id: 'result', title: 'Result' },
  ],
  rows: [
    [
      { id: 'count' },
      { id: 'follow_up', value: 'clinical improved?' },
      { id: 'result', value: '' },
    ],
  ],
  suggestions: {
    result: [
      { value: '0', label: 'Yes' },
      { value: '1', label: 'No' },
      { value: '2', label: 'Same' },
    ],
  },
};

type TableListType = { [key in TableType]: TableContent };

export const TableList: TableListType = {
  table1: table1,
  table2: table2,
  table3: table3,
};
