const fs = require("fs/promises");
const path = require("path");
const source = path.join(__dirname, "/files/");
const destination = path.join(__dirname, "/files-copy/");

// fs.rm(destination, { recursive: true }).fs.mkdir(destination, {
//   recursive: true,
// });

// const list = fs.readdir(source);
// console.log(list);
// for (let item of list) {
//   fs.copyFile(path.join(source, item), path.join(destination, item));
// }

copyFolder();

async function copyFolder() {
  try {
    await fs.rm(destination, { recursive: true, force: true });
    await fs.mkdir(destination, { recursive: true });
    const list = await fs.readdir(source);
    // console.log(list);
    for (let item of list) {
      fs.copyFile(path.join(source, item), path.join(destination, item));
    }
  } catch (err) {
    console.error(err);
  }
}
