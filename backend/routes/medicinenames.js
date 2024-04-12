import express from 'express';

import { 
    createDrugName,
    deleteDrugNameAndBatches,
    insertBatchesForDrugName,
    getDrugNameAndBatches,
    getAllDrugNamesAndBatches,
    getDrugNamesearch,
    getDrugNamesWithPrice,
           } from '../controllers/drugoutsController.js';


const router = express.Router();

// Post a new drug name
router.post('/drugnames', createDrugName);

// Delete a drug name and its associated batches
router.delete('/drugnames/:id', deleteDrugNameAndBatches);

// Insert batches for a drug name
router.post('/drugnames/:id/batches',insertBatchesForDrugName);

// Get all drug names and their associated batches
router.get('/drugnames',getAllDrugNamesAndBatches);

// Get a drug name and its associated batches
router.get('/drugnames/:id/batches', getDrugNameAndBatches);

// Get drug names by search
router.get('/drugnames/:id/search', getDrugNamesearch);
// Get all drug names with price
router.get('/drugnames/withprice', getDrugNamesWithPrice);



export default router;