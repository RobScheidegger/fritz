import express from 'express';
import bcrypt from 'bcrpyt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import { hash } from 'bcrypt';

const secret = process.env.PASSWORD_SECRET;

export const getUser = async (req, res) => { 
    try {
        const { userId } = req.params;
        const postMessages = await User.findOne({ _id: userId });
                
        return res.status(200).json(postMessages);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        var dbUser = await User.findOne({ email: email });

        const isPasswordValid = await bcrypt.compare(password, dbUser.password);

        if(!isPasswordValid) return res.status(400).json({message: "Credential not valid."});

        const token = jwt.sign({ email: dbUser.email, id: dbUser._id }, secret, { expiresIn: "1d"});

        res.status(200).json({token, user: { ...dbUser, password: "" } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({ name, email, password: hashedPassword });

        const token = jwt.sign({ email: user.email, id: user._id }, secret, {expiresIn: "1d"});

        res.status(201).json({ user: { ...user, password: "" }, token });
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};