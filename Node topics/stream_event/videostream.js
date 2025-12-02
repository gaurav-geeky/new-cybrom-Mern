const express = require("express");
const fs = require("fs");
const app = express();


// 👉 1. HOME ROUTE (HTML with <video> tag)
app.get("/", (req, res) => {
    res.send(`
        <h2>Node.js Video Streaming</h2>
        <video width="600" controls>
            <source src="/video" type="video/mp4">
        </video>
    `);
});

// 👉 2. VIDEO STREAM ROUTE
app.get("/video", (req, res) => {
    const path = "./video.mp4";
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (!range) {
        res.status(400).send("Requires Range header");
        return;
    }

    const CHUNK_SIZE = 1 * 1e6; // 1MB chunk
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": "video/mp4"
    };

    res.writeHead(206, headers);

    const stream = fs.createReadStream(path, { start, end });
    stream.pipe(res);
});

app.listen(3000, () => console.log("Server running on port 3000"));
