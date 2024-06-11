export default defineEventHandler(async (event) => {
    console.warn(
        "[🚀 client-api-address.get.ts ~ event]",
        event?.node.req?.socket?.remoteAddress,
    );
    const { res, req } = event.node;

    if (process.server) {
        const ip = req.connection.remoteAddress || req.socket.remoteAddress;
        console.warn("[🚀 client-api-address.get.ts ~ ip]", ip);
    }

    const reqHeaders = getRequestHeaders(event);

    const forwarded = reqHeaders["x-forwarded-for"];
    const ipAddress = forwarded
        ? forwarded.split(/, /)[0]
        : req.socket.remoteAddress;
    console.warn("[🚀 ~ client-api-address.get.ts ~ ipAddress]", ipAddress);

    res.writeHead(200);

    return res.end(ipAddress);
});
