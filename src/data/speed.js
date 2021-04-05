const sqrOfSpeed = (n) => (35 * n ** 2) / 100; 

const speedArr = [
  {
    id: "speed1",
    name: "speed",
    value: sqrOfSpeed(10),
    label: "1.0м/с",
  },
  {
    id: "speed2",
    name: "speed",
    value: sqrOfSpeed(16),
    label: "1.6м/с",
  },
 /* {
    id: "speed3",
    name: "speed",
    value: sqrOfSpeed(20),
    label: "2.0м/с",
  },*/
];

export default speedArr;
