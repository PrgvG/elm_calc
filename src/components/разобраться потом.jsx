  // условие при котором оголовок будет подсвечен красным
  const redHead = (n) => {
    if (value.load === 1000)
      return n < D_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    if (value.type !== "mr" && value.height > 40)
      return n < C_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    if (value.type !== "mr" && value.height < 40)
      return n < B_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    return n < A_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
  };
  const headStyle = redHead(value.head)

  // условие при котором приямок будет подсвечен красным
  const redPit = (n) => {
    if (value.type === "mr" && n + value.head < HEAD_AND_PIT && n > 0 && value.head > 0)
      return "ShaftInput Red";
    if (value.load === 1000)
      return n < D_PIT && n > 0 ? "ShaftInput Red" : "ShaftInput";
    return n < A_PIT && n > 0 ? "ShaftInput Red" : "ShaftInput";
  };



  const A_HEAD = 3271 + value.speed;
  const B_HEAD = 3371 + value.speed;
  const C_HEAD = 4071 + value.speed;
  const D_HEAD = 3871 + value.speed;
  const A_PIT = 1050;
  const D_PIT = 1400;
  const HEAD_AND_PIT = 4450;
