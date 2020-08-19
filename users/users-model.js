const db = require("../database/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}

//need to write FIND BY
function findBy(filter) {
  return db("users")
    .where(filter)
    .select("users.id", "users.username", "users.password", "users.department")
    .orderBy("users.id")
}

function findById(id) {
    return db("users")
        .where({ id })
        .first();
}

async function add(user) {
    try{
        const [id] = await db("users")
            .insert(user, "id");
            return findById(id);
    } catch (error) { 
        throw error;
    }
};
