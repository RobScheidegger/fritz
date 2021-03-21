import express from 'express';

import InteractiveSession from '../models/interactiveSession.js';

export const getSessions = async (req, res) => { 
    try {
        const { userId } = req.params;
        const postMessages = await InteractiveSession.find({ userId: userId });
                
        return res.status(200).json(postMessages);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

export const getSession = async (req, res) => {
    try {
        const { userId } = req.params;
        const postMessages = await InteractiveSession.find({ userId: userId });
                
        return res.status(200).json(postMessages);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};