import {RecordWithWMS} from "../interfaces.util";

export const insertify = (record: RecordWithWMS): string =>
  `insert into test_table (col_1, col_2) values (${record.skuId}, ${record.skuBatchId})`;

export const getUpdateForSkuBatchRecord = (table: string, updates: string, skuBatchId: string) =>
  `update ${table} set ${updates} where sku_batch_id = '${skuBatchId}'`;

// no op that would take our db connection and execute the list of sql statements
export const queryExec = (db: any, sql: string[]): Promise<void> => Promise.resolve();

export const formatSqlValue = (v: string | number | boolean | null) => {
    // build a function that will properly handle the quoting of values
    // for the generated sql statement
    return v;
};