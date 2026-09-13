import { Request, Response } from "express";
import Contact from "../models/Contact";

export const submitContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message sent successfully", id: contact._id });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
