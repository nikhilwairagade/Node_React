
/**
 * This method constructs error response object
 * @param {*} error 
 * @returns {Object}
 */
const getFailureResponse = (error) => {
   let json = {
      code: Number(error.code),
      message: error.message
   };
   return json;
};
/**
 * Method to creates response object 
 * @param {*} err 
 * @param {*} responseData 
 * @return {Object}
 */
exports.responseBuilder = (err, responseData) => {
   if (err) {
      return {
         error: getFailureResponse(err)
      };
   }
   let { data, message } = responseData;
   return { data, message };
};


// _handleException(error, res) {
//     let customError = {
//       code: STATUS_CODES.INTERNAL_ERROR,
//       message: 'Sorry! something went wrong'
//     };
//     if (error.name === 'ValidationError') {
//       customError = error;
//     }
//     res.status(customError.code).send(responseBuilder(customError));
//   }