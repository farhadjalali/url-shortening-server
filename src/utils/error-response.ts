import StatusCode = require("http-status-codes")

export class ErrorResponse extends Error {
	public constructor(
		public code: number,
		public message: string,
		public data?: unknown
	) {
		super(message);
	}
}

export function toErrorResponse(err: number | string | ErrorResponse | unknown): ErrorResponse {
	if (err) {
		if (err instanceof ErrorResponse) {
			return err
		} else if (typeof err === 'number') {
			return new ErrorResponse(err, StatusCode.getStatusText(err))
		} else if (typeof err === 'string') {
			return new ErrorResponse(StatusCode.INTERNAL_SERVER_ERROR, err)
		}
	}
	return null
}
