import JSON5 from "json5";

export const isJson = (str) => {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}


export const formatJsonFormat = (data) => {
  try {
    if (!data) {  
      return []
    } else if (/[\n|\n\r]/.test(data)) {
      // Found line break

      let newArrayOfItemsParsed = []
      let arrayOfItems = data.split("\n")
      
      for (let i = 0; i < arrayOfItems.length; i++) {
        newArrayOfItemsParsed.push(JSON5.parse(arrayOfItems[i]));
      }
      return newArrayOfItemsParsed
    } else if(typeof data == 'string') {
      return JSON.parse(data)
    } else if(isJson(data)) {
      return data
    } else {
      return data
    }
    } catch (err) {
    throw new Error(err);
  }
}
// Used to deal with the incoming client data and return the data in the correct format
export const chartDataParser = (data) => {
  try {
    const arrayOfItems =  formatJsonFormat(data)
    if(checkIfHasInvalidFields(arrayOfItems)) {
      return []
    } else {
      return arrayOfItems
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const checkIfHasInvalidFields = (data) => {
  let hasInvalidFields = false;
  for (let i = 0; i < data.length; i++) {
    const { type, timestamp } = data[i];
    if (!type || !timestamp) {
      hasInvalidFields = true;
      break;
    }
  }
  return hasInvalidFields;
};
