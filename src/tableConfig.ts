export enum TableType {
  table1 = 'table1',
  table2 = 'table2',
  table3 = 'table3',
}

interface TableHeader {
  id: string;
  title: string;
}

type TableColumnSuggestion = {
  [key in string]: Option[];
};

interface TableColumn {
  order: number;
  id: string;
  suggestions?: TableColumnSuggestion;
}

interface TableRow {
  id: string;
  value?: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface TableContent {
  headers: TableHeader[];
  columns: TableColumn[];
  rows: TableRow[][];
}

const table1: TableContent = {
  headers: [
    { id: 'count', title: '' },
    { id: 'physical_exam', title: 'Physical exam' },
    { id: 'description', title: 'Description' },
  ],
  columns: [
    { order: 0, id: 'count' },
    {
      order: 1,
      id: 'physical_exam',
      suggestions: {
        default: [
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
      },
    },
    {
      order: 2,
      id: 'description',
      suggestions: {
        HEENT: [
          { value: '0', label: 'injected pharynx' },
          { value: '1', label: 'exudate both tonsils' },
          { value: '2', label: 'foreign body at pharynx' },
          { value: '3', label: 'thyroid enlarge both' },
          { value: '4', label: 'redness Right ear canal' },
          { value: '5', label: 'impacted cerumen' },
          { value: '6', label: 'cataract both eye' },
          { value: '7', label: 'inject conjunctiva' },
        ],
        Heart: [
          { value: '0', label: 'Normal S1S2, no murmur' },
          { value: '1', label: 'Systolic ejection murmur' },
          { value: '2', label: 'Diastolic murmur' },
          { value: '3', label: 'Distant heart sound' },
        ],
        Lung: [
          { value: '0', label: 'Clear both lung' },
          { value: '1', label: 'Crepitation Left Lung' },
          { value: '2', label: 'Wheezing both lung' },
          { value: '3', label: 'Decrease breath sound Left Lung' },
        ],
        Abdomen: [
          { value: '0', label: 'soft, not tender' },
          { value: '1', label: 'Guarding and rebound tenderness' },
          { value: '2', label: 'RUQ pain' },
          { value: '3', label: 'LUQ pain' },
          { value: '4', label: 'LLQ pain' },
          { value: '5', label: 'Hepatomegaly' },
          { value: '6', label: 'Splenomegaly' },
        ],
        Extremities: [
          { value: '0', label: 'no edema' },
          { value: '1', label: 'pitting edema both leg' },
        ],
        default: [
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
    },
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
};

const table2: TableContent = {
  headers: [
    { id: 'count', title: '' },
    { id: 'medication_name', title: 'Medication name' },
    { id: 'instruction', title: 'Instruction' },
    { id: 'quantity', title: 'Quantity' },
  ],
  columns: [
    { order: 0, id: 'count' },
    {
      order: 1,
      id: 'medication_name',
      suggestions: {
        default: [
          { value: '0', label: 'Amoxicillin(500mg)' },
          { value: '1', label: 'Paracetamol(500mg)' },
          { value: '2', label: 'Diclofenac amp' },
          { value: '3', label: 'Morphine amp' },
        ],
      },
    },
    {
      order: 2,
      id: 'instruction',
      suggestions: {
        'Amoxicillin(500mg)': [
          { value: '0', label: '1 tab tid' },
          { value: '1', label: '2 tab bid' },
        ],
        'Paracetamol(500mg)': [
          { value: '0', label: '1 tab prn q4h' },
          { value: '1', label: '1 tab prn q6h' },
        ],
        'Diclofenac amp': [
          { value: '0', label: '75 mg IM stat' },
          { value: '1', label: '50 mg IM stat' },
        ],
        'Morphine amp': [
          { value: '0', label: '40 mg IV q 4h' },
          { value: '1', label: '20 mg IV q12h' },
        ],
        default: [
          { value: '0', label: '1 tab 3 times a day' },
          { value: '1', label: '1 tab every 6 hr' },
          { value: '2', label: '75 mg IM' },
          { value: '3', label: '40 mg IV' },
        ],
      },
    },
    {
      order: 3,
      id: 'quantity',
      suggestions: {
        default: [
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
    },
  ],
  rows: [
    [
      { id: 'count' },
      { id: 'medication_name', value: '' },
      { id: 'instruction', value: '' },
      { id: 'quantity', value: '' },
    ],
  ],
};

const table3: TableContent = {
  headers: [
    { id: 'count', title: '' },
    { id: 'follow_up', title: 'Follow up' },
    { id: 'result', title: 'Result' },
  ],
  columns: [
    { order: 0, id: 'count' },
    { order: 1, id: 'follow_up' },
    {
      order: 2,
      id: 'result',
      suggestions: {
        default: [
          { value: '0', label: 'Yes' },
          { value: '1', label: 'No' },
          { value: '2', label: 'Same' },
        ],
      },
    },
  ],
  rows: [
    [
      { id: 'count' },
      { id: 'follow_up', value: 'clinical improved?' },
      { id: 'result', value: '' },
    ],
  ],
};

type TableListType = { [key in TableType]: TableContent };

export const TableList: TableListType = {
  table1: table1,
  table2: table2,
  table3: table3,
};
