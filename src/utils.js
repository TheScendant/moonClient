// these need to be size specific
const rows = [
  {"number": "18", "value": 87},
  {"number": "17", "value": 138},
  {"number": "16", "value": 187},
  {"number": "15", "value": 237},
  {"number": "14", "value": 290},
  {"number": "13", "value": 337},
  {"number": "12", "value": 388},
]

const columns = [
  {"letter": "A", "value": 95},
  {"letter": "B", "value": 145},
  {"letter": "C", "value": 196},
  {"letter": "D", "value": 247},
  {"letter": "E", "value": 296}
]

const getColumn = (num) => {
  for (let c = 0; c < columns.length; c++) {
    if (num < columns[c].value) {
      // calc distances from number
      const diff1 = Math.abs(num - columns[c].value);
      const diff2 = (c !== columns.length - 1) ? Math.abs(num - columns[c+1].value) : Infinity;
      const diff3 = (c !== 0) ? Math.abs(num - columns[c-1].value) : Infinity;
      const minDiff = Math.min(diff1, diff2, diff3);
      // return object corresponding to closest one
      if ( minDiff === diff1) {
        return columns[c];
      } else if (minDiff === diff2) {
        return columns[c+1];
      } else {
        return columns[c-1];
      }
    }
  }
  return num;
}

const getRow = (num) => {
  for (let r = 0; r < rows.length; r++) {
    if (num < rows[r].value) {
      const diff1 = Math.abs(num - rows[r].value);
      const diff2 = (r !== rows.length - 1) ? Math.abs(num - rows[r+1].value) : Infinity;
      const diff3 = (r !== 0) ? Math.abs(num - rows[r-1].value) : Infinity;
      const minDiff = Math.min(diff1, diff2, diff3);
      if ( minDiff === diff1) {
        return rows[r];
      } else if (minDiff === diff2) {
        return rows[r+1];
      } else {
        return rows[r-1];
      }
    }
  }
  return num;
}

const getCord = (x, y) => {
  return `${getColumn(x).letter}${getRow(y).number}`;
}
export {
  getColumn,
  getCord,
  getRow,
}