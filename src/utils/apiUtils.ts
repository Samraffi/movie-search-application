export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export const handleAPIError = (error: unknown): APIError => {
  if (error instanceof APIError) {
    return error;
  }

  if (error instanceof Response) {
    return new APIError(
      'Server error occurred',
      error.status
    );
  }

  if (error instanceof Error) {
    return new APIError(error.message);
  }

  return new APIError('An unknown error occurred');
};

export const isNetworkError = (error: unknown): boolean => {
  return error instanceof Error && 
    (error.message.includes('Failed to fetch') ||
     error.message.includes('Network request failed'));
};

export const formatErrorMessage = (error: unknown): string => {
  const apiError = handleAPIError(error);
  
  switch (apiError.status) {
    case 401:
      return 'Authentication failed. Please check your API key.';
    case 404:
      return 'The requested resource was not found.';
    case 429:
      return 'Too many requests. Please try again later.';
    case 500:
    case 502:
    case 503:
    case 504:
      return 'Server error. Please try again later.';
    default:
      return apiError.message;
  }
};

// Example usage:
/*
try {
  await fetchMovies();
} catch (error) {
  if (isNetworkError(error)) {
    // Handle offline state
  } else {
    // Show error message to user
    const message = formatErrorMessage(error);
  }
}
*/
