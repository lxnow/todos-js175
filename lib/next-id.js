let currentId = 0;

let nextId = () => {
  currentId += 1; // where is currentId value persisted? So it doesn't reset to zero
  return currentId;
};

module.exports = nextId;