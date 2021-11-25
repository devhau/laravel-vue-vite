
export const HTTP_RESPONSE = {
    SUCCESS: 200,
    SUCCESS_201: 201,
    ERROR_CODE_401: 401,
    ERROR_CODE_400: 400,
    ERROR_CODE_500: 500,
};
export const HttpValidateStatus = (status) => (HTTP_RESPONSE.SUCCESS === status
    || HTTP_RESPONSE.SUCCESS_201 === status
    || HTTP_RESPONSE.ERROR_CODE_400 === status
    || HTTP_RESPONSE.ERROR_CODE_401 === status
    || HTTP_RESPONSE.ERROR_CODE_500 === status);
