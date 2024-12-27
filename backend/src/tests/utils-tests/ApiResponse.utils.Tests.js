import { ApiResponse } from "../../utils/apiResponse.utils.js";

const apiResponseTest = () => {
    
    // Test case 1: Success response
    const successResponse = new ApiResponse(200, { id: 1, name: "Test" });
    console.log("Success Response:", successResponse);

    // Test case 2: Error response
    const errorResponse = new ApiResponse(404, null, "Not Found");
    console.log("Error Response:", errorResponse);
};

apiResponseTest();