const sqrOfSpeed = (n) => 0.035 * n ** 2

const speedArr = [
  {
    type: "radio",
    id: "speed1",
    name: "speed",
    value: sqrOfSpeed(1),
    label: "1.0м/с",
  },
  {
    type: "radio",
    id: "speed2",
    name: "speed",
    value: sqrOfSpeed(1.6),
    label: "1.6м/с",
  },
  {
    type: "radio",
    id: "speed3",
    name: "speed",
    value: sqrOfSpeed(2),
    label: "2.0м/с",
  },
];

export default speedArr;
