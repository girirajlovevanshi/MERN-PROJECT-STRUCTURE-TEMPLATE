import { asyncHandler } from "../../utils/AsyncHandler.utils.js";

const mockHandler = async (req, res) => {
    if (req.query.error) {
        throw new Error("Test error");
    }
    res.status(200).json({ message: "Success" });
};

// Mock objects
const req = { query: { error: true } }; // Change `true` to `false` to test success
const res = {
    status: (code) => {
        console.log(`Status: ${code}`);
        return res;
    },
    json: (data) => console.log(`Response:`, data),
};
const next = (err) => {
    if (err) {
        console.log(`Error handled: ${err.message}`);
    }
};

// Test the asyncHandler
const asyncHandlerTest = asyncHandler(mockHandler);
asyncHandlerTest(req, res, next);