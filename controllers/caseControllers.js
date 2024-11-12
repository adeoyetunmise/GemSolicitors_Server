import Case from '../models/caseModel.js';
import mongoose from 'mongoose';
import Client from '../models/caseModel.js'

// Get all cases
export const getAllCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cases' });
  }
};

// Create a new case
export const createCase = async (req, res) => {
  try {
    const newCase = new Case(req.body);
    await newCase.save();
    res.status(201).json(newCase);
  } catch (error) {
    res.status(400).json({ message: 'Error creating case' });
  }
};


export const getSingleClient = async (req, res) => {
  const {_id} = req.params

  try{
      if(!mongoose.Types.ObjectId.isValid(_id)){
          return res.status(400).json({error: "invalid client"})
      }

      const client = await Client.findById(_id)
      if (!client){
          return res.status(404).json({error: "client not found"})
      }
      res.json({ client });
  }catch(error){
      res.status(400).json({error:  "error"})
  }
}

export const editClient = async (req, res) => {
  const {_id} = req.params
  try {
      if(!mongoose.Types.ObjectId.isValid(_id)){
          return res.status(400).json({error: "Invalid client id"})
      }
      const client = await Client.findByIdAndUpdate(_id, req.body, {new: true})
      if(!client){
          return res.status(404).json({error: "client not found"})
      }
      res.status(200).json({client})
  }catch(error){
      res.status(400).json({error: error.message})
  }
}



export const removeClient = async (req, res) => {
  const {_id} = req.params
  try{
      if(!mongoose.Types.ObjectId.isValid(_id)){
          return res.status(400).json({error: "Invalid client id"})
      }
      const client = await Client.findByIdAndDelete(_id)
      if(!client){
          return res.status(404).json({error: "client not found"})
      }
      res.status(200).json({message: "Successfully deleted"})
  }catch(error){
      res.status(400).json({error: error.message})
  }
}
