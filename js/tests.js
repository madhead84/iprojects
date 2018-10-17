var assert = chai.assert;
var expect = chai.expect;
chai.should();

describe('Группа единых по духу тестов', function() {
    it('Тест проверяет работоспособность функции first', function() {
        assert.equal(first([3,4,5]), 3);
        assert.equal(first([4,4,5]), 4);
        assert.equal(first([8,4,5]), 8);
        assert.equal(first([3,4,5]), 3);
        expect(first([7,4,5])).to.equal(7);
        first([12,4,5]).should.equal(12);
        assert.lengthOf([3,4,5], 3);
    });

    it('Тест проверяет работоспособность функции last', function() {
        assert.equal(last([3,4,5]), 5);
        assert.equal(last([4,4,9]), 9);
        expect(last([7,4,6])).to.equal(6);
        last([12,4,15]).should.equal(15);
    });
});


describe('Группа единых по духу тестов', function() {
    it('Тест проверяет работоспособность функции first', function() {
        assert.equal(first([3,4,5]), 3);
        assert.equal(first([4,4,5]), 4);
        assert.equal(first([8,4,5]), 8);
        assert.equal(first([3,4,5]), 3);
        expect(first([7,4,5])).to.equal(7);
        first([12,4,5]).should.equal(12);
    });

    it('Тест проверяет работоспособность функции last', function() {
        assert.equal(last([3,4,5]), 5);
        assert.equal(last([4,4,9]), 9);
        expect(last([7,4,6])).to.equal(6);
        last([12,4,15]).should.equal(15);
    });
});


