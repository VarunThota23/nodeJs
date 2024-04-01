const asyncHandler = require("express-async-handler");
const contact = require("../")
const createContact = asyncHandler(async (req, res) => {
    console.log("body...", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400).json({ error: "Missing required fields: name, email, or phone" });
        return;
    }
    res.status(200).json({ message: "Contact created successfully" });
});

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

module.exports = {
    getContact,
    createContact,
    deleteContact,
    updateContact
};
