export const arrayToString = array => {
    let result = ""
    array.forEach((element, index) => {
        result += element
        if (index !== (array.length - 1)) result += ", "
    });

    return result
}

export const numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}