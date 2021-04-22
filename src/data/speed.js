const sqrOfSpeed = (n, buffer) => (35 * n ** 2) / 100 + buffer

const speedArr = [
  {
    id: "speed1",
    name: "speed",
    value: sqrOfSpeed(10, 120),
    label: "1.0м/с",
  },
  {
    id: "speed2",
    name: "speed",
    value: sqrOfSpeed(16, 215),
    label: "1.6м/с",
  },
  {
    id: "speed3",
    name: "speed",
    value: sqrOfSpeed(20),
    label: "2.0м/с",
  },
]

export default speedArr
