const { scanReceipt } = require("../services/scanReceipt");
const { getIcon } = require("../utils/iconMap");
const { validateAIExpense } = require("../utils/validateExpenseAI");

exports.scanBillController = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: "No bill uploaded" });


        const data = await scanReceipt(req.file.buffer, req.file.mimetype);


        // Validate AI Output
        const validation = validateAIExpense(data);
        if (!validation.valid) {
            return res.status(422).json({
                success: false,
                error: "AI extraction failed",
                reason: validation.message,
            });
        }


        // Assign icon only after validation
        data.icon = getIcon(data.category);


        // DO NOT SAVE HERE (auto-fill only)
        res.json({
            success: true,
            extractedData: data,
        });


    } catch (err) {
        console.error("Scan Controller Error:", err);
        res.status(500).json({ error: "Bill scan failed" });
    }
};