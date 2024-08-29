export function info(req, res, next) {
  const startTime = Date.now();

  // Log request information
  console.log(`Incoming request: ${req.method} ${req.url}`);

  // Continue to the next middleware or route handler
  
  // Log response and time taken
  const endTime = Date.now();
  console.log(
      `Response sent: ${res.statusCode} ${req.url} (Took ${
          endTime - startTime
        } ms)`
    );
    next();
}
