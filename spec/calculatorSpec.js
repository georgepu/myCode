describe('A calculator', function() {
    it('should be able to add two numbers', function() {
        // Arrange
        var number1 = 100,
            number2 = 200,
            expectedResult = 300;
        // Act
        var result = add(number1, number2);
        // Assert
        expect(result).toBe(expectedResult);
    });
});