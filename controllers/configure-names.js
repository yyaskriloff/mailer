const joinNames = (...names) => {
    if (names.length === 0) return names.replace(",", "")
    return names.join().replaceAll(",", " ")
}

exports.seperateNames = (name) => {
    const [fullName, years = "20"] = name.split("|")
    const splitName = fullName.split(" ")
    const lastName = splitName.shift()
    const firstName = joinNames(splitName)
    return {
        firstName,
        lastName,
        years
    }
}