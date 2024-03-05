export default function orderByProps(obj, orderList) {
    // Использую for in для перебора свойств объекта
    // UPD: Заменил на Object.keys(obj)
  
    // const objKeys = [];
    // for (let key in obj) {
    //   objKeys.push(key);
    // }
  
    //Сортирую ключи по алфавиту
    const objKeys = Object.keys(obj).sort();
  
    const result = [];
  
    for (let i in orderList) {
      // Если ключ из order есть в объекте, добавляю в итоговый массив
      if (objKeys.includes(orderList[i])) {
        result.push({ key: orderList[i], value: obj[orderList[i]] });
      }
    }
  
    for (let i in objKeys) {
      // Добавляю остальные key:value в итоговый массив
      if (!orderList.includes(objKeys[i])) {
        result.push({ key: objKeys[i], value: obj[objKeys[i]] });
      }
    }
    return result;
  }