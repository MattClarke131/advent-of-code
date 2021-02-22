import { PasswordGenerator } from './passwordGenerator'

describe('PasswordGenerator', () => {
  describe('passwordIsValid(password)' , () => {
    // Invalid Passwords
    test('hijklmmn is invalid', () => {
      const input = 'hijklmmn'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.passwordIsValid(input)

      expect(actual).toBeFalsy()
    })
    test('abbceffg is invalid', () => {
      const input = 'abbceffg'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.passwordIsValid(input)

      expect(actual).toBeFalsy()
    })
    test('abbcegjk is invalid', () => {
      const input = 'abbcegjk'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.passwordIsValid(input)

      expect(actual).toBeFalsy()
    })
    test('aabbcc is invalid', () => {
      const input = 'aabbcc'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.passwordIsValid(input)

      expect(actual).toBeFalsy()
    })
    test('aabbpjy is invalid', () => {
      const input = 'aabbpjy'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.passwordIsValid(input)

      expect(actual).toBeFalsy()
    })

    // Valid Passwords
    test('aabbcd is valid', () => {
      const input = 'aabbcd'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.passwordIsValid(input)

      expect(actual).toBeTruthy()
    })
  })

  describe('getNextPassword(password)', () => {
    test('the password after aabbca is aabbcd', () => {
      const input = 'aabbca'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.getNextPassword(input)
      const expected = 'aabbcd'

      expect(actual).toBe(expected)
    })
    test('the password after aabbphz is aabbpqr', () => {
      const input = 'aabbphz'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.getNextPassword(input)
      const expected = 'aabbpqr'

      expect(actual).toBe(expected)
    })
    test('the password after abcdefgh is abcdffaa', () => {
      const input = 'abcdefgh'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.getNextPassword(input)
      const expected = 'abcdffaa'

      expect(actual).toBe(expected)
    })
    test('the password after ghijklmn is ghjaabcc', () => {
      const input = 'ghijklmn'
      const passwordGenerator = new PasswordGenerator()
      const actual = passwordGenerator.getNextPassword(input)
      const expected = 'ghjaabcc'

      expect(actual).toBe(expected)
    })
  })
})
