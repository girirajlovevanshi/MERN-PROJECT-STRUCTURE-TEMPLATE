import { ApiError } from "../../utils/ApiErrors.utils.js";

const testApiError = () => {
    // Test case 1: Default error
    const defaultError = new ApiError(500);
    console.log("Default Error:", defaultError);

    // Test case 2: Custom error with additional details
    const customError = new ApiError(
        400,
        "Invalid input data",
        ["Field 'email' is required", "Field 'password' must be at least 6 characters"]
    );
    console.log("Custom Error:", customError);

    // Test case 3: Custom stack trace
    const stackError = new ApiError(401, "Unauthorized", [], "Custom stack trace");
    console.log("Error with Custom Stack:", stackError);
};

testApiError();