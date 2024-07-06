const { permutation } = require('./permutations')

describe('Permutation function test', () => {
    test('input is a', () => {
        expect(permutation('a')).toEqual(['a'])
    })
    
    test('input is ab', () => {
        expect(permutation('ab')).toEqual(['ab', 'ba'])
    })
    
    test('input is abc', () => {
        expect(permutation('abc')).toEqual(['abc','acb','bac','bca','cab','cba'])
    })
    
    test('input is aabb', () => {
        expect(permutation('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
    })
    
    test('input is caabb', () => {
        expect(permutation('caabb')).toEqual([
            'aabbc', 'aabcb', 'aacbb', 'ababc',
            'abacb', 'abbac', 'abbca', 'abcab',
            'abcba', 'acabb', 'acbab', 'acbba',
            'baabc', 'baacb', 'babac', 'babca',
            'bacab', 'bacba', 'bbaac', 'bbaca',
            'bbcaa', 'bcaab', 'bcaba', 'bcbaa',
            'caabb', 'cabab', 'cabba', 'cbaab',
            'cbaba', 'cbbaa'
          ])
    })

    test('invalid input type', () => {
        expect(() => {
            permutation(1234)
        }).toThrow('Invalid input type')
    })
})
