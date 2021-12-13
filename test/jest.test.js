test('Principais assertivas do jest', () => {
    let number = null
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
}) 

test('Trabalhando com objetos', () => {
    const obj = { name: 'Victor', mail: 'victor@gmail.com' }
    expect(obj).toHaveProperty('name', 'Victor')
    expect(obj.name).toBe('Victor')

    const obj2 = { name: 'Victor', mail: 'victor@gmail.com' }
    expect(obj).toEqual(obj2)
    expect(obj).toBe(obj)
})
