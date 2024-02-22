const bcrypt = require("bcrypt");

async function hashPass(pw) {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
}

async function checkPass(pw, hash) {
  const result = await bcrypt.compare(pw, hash);
  console.log(result);
}

hashPass("yessir");
checkPass(
  "yessir",
  "$2b$12$m35Y3as0dU.d0hj/ZnUnsOuduE.Qet7kup1.RQbX5i5/vTwhR8/Ni"
);
