// these need to be size specific
const rows = [
  {"number": "18", "value": 87},
  {"number": "17", "value": 138},
  {"number": "16", "value": 187},
  {"number": "15", "value": 237},
  {"number": "14", "value": 290},
  {"number": "13", "value": 337},
  {"number": "12", "value": 388},
  {"number": "11", "value": 439},
  {"number": "10", "value": 490},
  {"number": "9", "value": 540},
  {"number": "8", "value": 590},
  {"number": "7", "value": 639},
  {"number": "6", "value": 689},
  {"number": "5", "value": 739},
  {"number": "4", "value": 789},
  {"number": "3", "value": 837},
  {"number": "2", "value": 889},
  {"number": "1", "value": 939},
]

const columns = [
  {"letter": "A", "value": 95},
  {"letter": "B", "value": 145},
  {"letter": "C", "value": 196},
  {"letter": "D", "value": 247},
  {"letter": "E", "value": 296},
  {"letter": "F", "value": 347},
  {"letter": "G", "value": 396},
  {"letter": "H", "value": 447},
  {"letter": "I", "value": 496},
  {"letter": "J", "value": 546},
  {"letter": "K", "value": 596},
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

const postJSON = async (data, url) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(`Error: ${response.status}`);
    }
    console.warn(body);
    return body;
  } catch (e) {
    console.error(e);
    return;
  }
};

export {
  getColumn,
  getCord,
  getRow,
  postJSON,
}