const sqrOfSpeed = (n) => (35 * n ** 2) / 100; // Math.round((35 * n ** 2) / 10)

const speedArr = [
  {
    type: "radio",
    id: "speed1",
    name: "speed",
    value: sqrOfSpeed(10),
    label: "1.0м/с",
  },
  {
    type: "radio",
    id: "speed2",
    name: "speed",
    value: sqrOfSpeed(16),
    label: "1.6м/с",
  },
 /* {
    type: "radio",
    id: "speed3",
    name: "speed",
    value: sqrOfSpeed(20),
    label: "2.0м/с",
  },*/
];

export default speedArr;
