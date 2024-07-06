const permutation = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Invalid input type')
    }
    str = str.split('').sort().join('');
    const results = []
    const used = new Array(str.length).fill(false)
    backtrack(str, [], used, results)
    return results
}

const backtrack = (str, path, used, results) => {
    if (path.length === str.length) {
        results.push(path.join(''))
        return
    }

    for (let i = 0; i < str.length; i++) {
        if (used[i]) {
            continue
        }
        if (i > 0 && str.charAt(i) === str.charAt(i - 1) && !used[i - 1]) {
            continue
        }
        used[i] = true
        path.push(str.charAt(i))
        backtrack(str, path, used, results)
        path.pop()
        used[i] = false
    }
}

module.exports = { permutation }