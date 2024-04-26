import {RecordWithWMS} from "../interfaces.util";

export const insertify = (record: RecordWithWMS): string =>
  `insert into test_table (col_1, col_2) values (${record.skuId}, ${record.skuBatchId})`;

export const getUpdateForSkuBatchRecord = (table: string, updates: string, skuBatchId: string) =>
  `update ${table} set ${updates} where sku_batch_id = '${skuBatchId}'`;

// no op that would take our db connection and execute the list of sql statements
export const queryExec = (db: any, sql: string[]): Promise<void> => Promise.resolve();

export const formatSqlValue = (v: string | number | boolean | null): string => {
  if (v === null) {
    return 'NULL'; // For null values, return 'NULL' without quotes
  } else if (typeof v === 'string') {
    // For string values, wrap in single quotes and escape any single quotes within the string
    return `'${v.replace(/'/g, "''")}'`;
  } else if (typeof v === 'number' || typeof v === 'boolean') {
    return v.toString(); // For numbers and booleans, return the value as-is
  }

  return v;
};