module.exports = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testMatch: [
    "**/(*.)+spec.ts"
  ]
}
