export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    const keyValues = [ ...new Set(array.map(item => item[key])) ];
    const result = {};
    keyValues.forEach((value) => {
      const numOfItems = array.filter((item) => item[key] === value).length;
      result[value] = numOfItems / array.length;
    })
    return result;
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none') {
    const keys = path.split('.');

    for (let i = 0; i < keys.length; i++) {
      if (obj[keys[i]]) {
        obj = obj[keys[i]];
      } else {
        obj = defaultValue;
        break;
      }
    }

    return obj;

  },
};
