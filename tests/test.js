const date = require('../src/index')

test('year', () => {
    const day = new date.GetDate('1999', '1', '26')
    expect(day.year).toBe(1999)
})

test('Yr', () => {
    const day = new date.GetDate('1999', '1', '26')
    expect(day.yr).toBe(99)
})

test('Month', () => {
    const day = new date.GetDate('1999', '1', '26')
    expect(day.month).toBe('February')
})

test('Mon', () => {
    const day = new date.GetDate('1999', '1', '26')
    expect(day.mon).toBe('Feb')
})

test('Day', () => {
    const day = new date.GetDate('1999', '1', '26')
    expect(day.day).toBe('Friday')
})

test('Dy', () => {
    const day = new date.GetDate('1999', '1', '26')
    expect(day.dy).toBe('Fri')
})

test('Hours', () => {
    const day = new date.GetDate('1999', '1', '26', 18)
    expect(day.hours).toBe(18)
})

test('Min', () => {
    const day = new date.GetDate('1999', '1', '26', 11, 45)
    expect(day.min).toBe(45)
})

test('when', () => {
    const day = new date.GetDate('1999', '1', '26')
    expect(day.when()).toBe('23 years ago')
}) 