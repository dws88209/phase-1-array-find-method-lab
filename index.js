// code your solution here
function superbowlWin(record){
    let records = record.find(({result}) => result === "W")
    if (records ===undefined){
        return undefined
    } else {
    return records.year
}
} 
//console.log(record.find(superbowlWin))