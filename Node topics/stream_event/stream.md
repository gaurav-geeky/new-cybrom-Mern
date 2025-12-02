
# create zip file

app.get("/createzip", (req, res) => {
    fs.createReadStream("./sample.txt").pipe(
        zlib.createGzip().pipe(fs.createWriteStream("./outputmyzip.zip"))
    );
    res.end("Your zip file created !");
})


OR


const read = fs.createReadStream("sample.txt");
const zip = zlib.createGzip();
const write = fs.createWriteStream("output.zip");

read.on("data", chunk => zip.write(chunk));
read.on("end", () => zip.end());

zip.on("data", chunk => write.write(chunk));
zip.on("end", () => write.end());

