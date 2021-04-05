
const sideCWT = cabinArr.filter((it) =>
    it.load === shaft.load &&
    it.BG <= shaft.width - (MIN_CAR_BRACKET + MIN_CWT_BRACKET) - guide(shaft.load) * 2 &&
    it.BG >= shaft.width - (MAX_CAR_BRACKET + MAX_CWT_BRACKET) - guide(shaft.load) * 2 &&
    it.CD <= shaft.depth - C2
)

const backCWT = cabinArr.filter((it) =>
    it.load === shaft.load &&
    it.BG <= shaft.width - (MIN_CAR_BRACKET + MIN_CAR_BRACKET) - guide(shaft.load) * 2 &&
    it.BG >= shaft.width - (MAX_CAR_BRACKET + MAX_CAR_BRACKET) - guide(shaft.load) * 2 &&
    it.CD <= shaft.depth - C2
)

function filterCabinWithSideCWT(arr, type) {
    return arr.filter((it) => {
        if (type === "normal") it.type === "normal";
        if (type === "through") it.type === "through";
    });
}

const cabinBackCWT = filterCabinWithSideCWT(cabinBackCWT, "normal")
const cabinSideCWT = filterCabinWithSideCWT(cabinSideCWT, "normal")
const throughtCabinSideCWT = filterCabinWithSideCWT(cabinSideCWT, "through")

