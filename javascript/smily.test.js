const { countSmileys } = require('./smily')

describe('CountSmileys function test', () => {
    test("input is [':)', ';(', ';}', ':-D']", () => {
        expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2)
    })
    
    test("input is [';D', ':-(', ':-)', ';~)']", () => {
        expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3)
    })
    
    test("input is [';]', ':[', ';*', ':$', ';-D']", () => {
        expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
    })
})
