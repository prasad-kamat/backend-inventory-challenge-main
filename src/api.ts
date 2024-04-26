import axios from 'axios';

const logger = console;
const API_BASE_URL = 'https://local-inventory.nabis.dev/v1/';
const INVENTORY_ENDPOINT = 'inventory';
const INVENTORY_AGGREGATE_ENDPOINT = 'inventory-aggregate';

// Function to make a POST request to the 'inventory' endpoint
const postInventoryRequest = async (payload: any): Promise<void> => {
  try {
    if(isValidInventoryPayload(payload)) {
      await axios.post(`${API_BASE_URL}${INVENTORY_ENDPOINT}`, payload);
      logger.log(`POST request to ${INVENTORY_ENDPOINT} successful.`);
    } else {
      throw new Error('Required fields (skuBatchId, skuId, warehouseId) are missing in the payload, or payload is not JSON.');
    }
  } catch (error) {
    logger.error(`Error making POST request to ${INVENTORY_ENDPOINT}: ${error}`);
    throw error;
  }
};

// Function to make a PUT request to the 'inventory' endpoint
const putInventoryRequest = async (payload: any): Promise<void> => {
  try {
    if(isValidInventoryPayload(payload)) {
      await axios.put(`${API_BASE_URL}${INVENTORY_ENDPOINT}`, payload);
      logger.log(`PUT request to ${INVENTORY_ENDPOINT} successful.`);
    } else {
      throw new Error('Required fields (skuBatchId, skuId, warehouseId) are missing in the payload, or payload is not JSON.');
    }
  } catch (error) {
    logger.error(`Error making PUT request to ${INVENTORY_ENDPOINT}: ${error}`);
    throw error;
  }
};

// Function to make a POST request to the 'inventory-aggregate' endpoint
const postInventoryAggregateRequest = async (payload: any): Promise<void> => {
  try {
    if(isValidInventoryAggregatePayload(payload)) {
      await axios.post(`${API_BASE_URL}${INVENTORY_AGGREGATE_ENDPOINT}`, payload);
      logger.log(`POST request to ${INVENTORY_AGGREGATE_ENDPOINT} successful.`);
    } else {
      throw new Error('Required fields (skuBatchId, skuId) are missing in the payload, or payload is not JSON.');
    }
  } catch (error) {
    logger.error(`Error making POST request to ${INVENTORY_AGGREGATE_ENDPOINT}: ${error}`);
    throw error;
  }
};

// Function to make a PUT request to the 'inventory-aggregate' endpoint
const putInventoryAggregateRequest = async (payload: any): Promise<void> => {
  try {
    if(isValidInventoryAggregatePayload(payload)) {
      await axios.put(`${API_BASE_URL}${INVENTORY_AGGREGATE_ENDPOINT}`, payload);
      logger.log(`PUT request to ${INVENTORY_AGGREGATE_ENDPOINT} successful.`);
    } else {
      throw new Error('Required fields (skuBatchId, skuId) are missing in the payload, or payload is not JSON.');
    }
  } catch (error) {
    logger.error(`Error making PUT request to ${INVENTORY_AGGREGATE_ENDPOINT}: ${error}`);
    throw error;
  }
};

// Function to validate payload for 'inventory' endpoint
const isValidInventoryPayload = (payload: any): boolean => {
  if ((!payload || typeof payload !== 'object' || Array.isArray(payload)) // Validate JSON payload
    || (!payload.skuBatchId || !payload.skuId || !payload.warehouseId)) { // Validate required fields
    return false;
  }

  return true;
};

// Function to validate payload for 'inventory-aggregate' endpoint
const isValidInventoryAggregatePayload = (payload: any): boolean => {
  if ((!payload || typeof payload !== 'object' || Array.isArray(payload)) // Validate JSON payload
    || (!payload.skuBatchId || !payload.skuId)) { // Validate required fields
    return false;
  }

  return true;
};
