import orderByProps from "../functions";

test.each([
  ['Default', 
  { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 },
  ["name", "level"],
  [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ]
 ],
 ['Custom 1', 
  { name: "Лучник", health: 110, level: 37, attack: 80, defence: 40 },
  ["defence", "attack"],
  [
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 110 },
    { key: 'level', value: 37 },
    { key: 'name', value: 'Лучник' }
  ]
 ],
 ['Custom 2 без порядкового списка', 
  { name: "Зомби", health: 37, level: 2, attack: 50, defence: 1 },
  [],
  [
    { key: 'attack', value: 50 },
    { key: 'defence', value: 1 },
    { key: 'health', value: 37 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'Зомби' }
  ]
 ],
 ['Custom 3 с несуществующими свойствами для сортировки', 
  { name: "Зомби", health: 37, level: 2, attack: 50, defence: 1 },
  ['test', 'long'],
  [
    { key: 'attack', value: 50 },
    { key: 'defence', value: 1 },
    { key: 'health', value: 37 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'Зомби' }
  ]
 ],
])('check my sorting function %s', (name, params, order, result) => {
  const obj = params;
  const testResult = orderByProps(obj, order);
  for (let i in testResult) {
    expect(testResult[i].key).toBe(result[i].key);
    expect(testResult[i].value).toBe(result[i].value);
  }
  // expect(true).toBe(true)
});
