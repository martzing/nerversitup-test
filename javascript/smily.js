const countSmileys = (faces) => {
    if (faces.length === 0) return 0 
    let result = 0
    for (const face of faces) {
        if (face.length < 2 || face.length > 3) {
            continue
        } else {
            if (isSmileys(face)) {
                result++
            }
        }
    }
    return result
}

const isSmileys = (face) => {
    const eyes = [':', ';']
    const noses = ['-', '~']
    const mouths = [')', 'D']
    let result = false
    if (face.length === 2) {
        if (!eyes.includes(face.charAt(0))) {
            return result
        }
        if (!mouths.includes(face.charAt(1))) {
            return result
        }
    } else if (face.length === 3) {
        if (!eyes.includes(face.charAt(0))) {
            return result
        }
        if (!noses.includes(face.charAt(1))) {
            return result
        }
        if (!mouths.includes(face.charAt(2))) {
            return result
        }
    } else {
        return result
    }
    return true
}

module.exports = { countSmileys }
