import { Option } from './services/api.types';

export const THEME_KEY = 'theme';

export const ALERT_TIMEOUT_DEFAULT = 3000;

export const ALERT_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};

export const DIGITS_LENGTH = 3;

export const ORDER_ASC = 'asc';

export const SORT_BY_NAME = 'name';

export const SORT_BY_TASK_TITLE = 'title';

export const INITIAL_PAGE_NUMBER = 1;

export const LAST_PAGE_NUMBER = 10;

export const PAGE_SIZES: Option[] = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 50, label: '50' }
];

export const DEFAULT_PAGE_SIZE: Option = PAGE_SIZES[0];

export const COLUMNS_MAP = [
  { key: 'id', label: 'Code', isSortEnabled: true },
  { key: 'user', label: 'User', isSortEnabled: false },
  { key: 'title', label: 'Title', isSortEnabled: true },
  { key: 'completed', label: 'Status', isSortEnabled: true }
];
