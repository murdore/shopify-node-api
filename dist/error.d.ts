export declare class ShopifyError extends Error {
    constructor(...args: any);
}
export declare class InvalidHmacError extends ShopifyError {
}
export declare class InvalidShopError extends ShopifyError {
}
export declare class InvalidJwtError extends ShopifyError {
}
export declare class MissingJwtTokenError extends ShopifyError {
}
export declare class SafeCompareError extends ShopifyError {
}
export declare class UninitializedContextError extends ShopifyError {
}
export declare class PrivateAppError extends ShopifyError {
}
export declare class HttpRequestError extends ShopifyError {
}
export declare class HttpMaxRetriesError extends ShopifyError {
}
interface HttpResponseData {
    code: number;
    statusText: string;
    body?: {
        [key: string]: unknown;
    };
    headers?: {
        [key: string]: unknown;
    };
}
interface HttpResponseErrorParams extends HttpResponseData {
    message: string;
}
export declare class HttpResponseError extends ShopifyError {
    readonly response: HttpResponseData;
    constructor({ message, code, statusText, body, headers, }: HttpResponseErrorParams);
}
export declare class HttpRetriableError extends HttpResponseError {
}
export declare class HttpInternalError extends HttpRetriableError {
}
interface HttpThrottlingErrorData extends HttpResponseData {
    retryAfter?: number;
}
interface HttpThrottlingErrorParams extends HttpThrottlingErrorData {
    message: string;
}
export declare class HttpThrottlingError extends HttpRetriableError {
    readonly response: HttpThrottlingErrorData;
    constructor({ retryAfter, ...params }: HttpThrottlingErrorParams);
}
export declare class RestResourceError extends ShopifyError {
}
export declare class InvalidOAuthError extends ShopifyError {
}
export declare class SessionNotFound extends ShopifyError {
}
export declare class CookieNotFound extends ShopifyError {
}
export declare class InvalidSession extends ShopifyError {
}
export declare class InvalidWebhookError extends ShopifyError {
}
export declare class SessionStorageError extends ShopifyError {
}
export declare class MissingRequiredArgument extends ShopifyError {
}
export declare class UnsupportedClientType extends ShopifyError {
}
export {};
//# sourceMappingURL=error.d.ts.map