const { oddNumber } = require('./odd-number')

describe('OddNumber function test', () => {
    test('input is []', () => {
        expect(oddNumber([])).toBeNull()
    })
    
    test('input is [7]', () => {
        expect(oddNumber([7])).toBe(7)
    })
    
    test('input is [0]', () => {
        expect(oddNumber([0])).toBe(0)
    })
    
    test('input is [1,1,2]', () => {
        expect(oddNumber([1,1,2])).toBe(2)
    })

    test('input is [0,1,0,1,0]', () => {
        expect(oddNumber([0,1,0,1,0])).toBe(0)
    })

    test('input is [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
        expect(oddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4)
    })

    test('invalid input type', () => {
        expect(() => {
            oddNumber('1,1,2')
        }).toThrow('Invalid input type')
    })
})
