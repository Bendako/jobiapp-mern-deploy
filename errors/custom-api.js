import { StatusCodes } from 'http-status-codes';


// Need to change the name of the class
class CustomAPIError extends Error {
    constructor(message) {
        super(message); 
    }
};

export default CustomAPIError;