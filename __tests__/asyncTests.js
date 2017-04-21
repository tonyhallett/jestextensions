//the callbacks should have as their last parameter done function?
//what happens to a test if async and do not done or promise
//will it pass regardless

//do a test with an asyn function and the callback 
//to do an expectation that fails
var jestExtensions = require('../index');
var pits = jestExtensions.pits;
var pit = jestExtensions.pit;
var its = jestExtensions.its;

describe('pits works with async', () => {
	beforeEach(() => {
		jest.useRealTimers();
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	})
	pit('a test', 1);
	pits((arg, done) => {
		setTimeout(() => {
			expect(true).toBe(true);
			done();
		}, 1000);
	})
})

describe('setTimeout with done', () => {
	beforeEach(() => {
		jest.useRealTimers();
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	})
	it('works', (done) => {
		var timeout=setTimeout(() => {
			expect(true).toBe(true);
			clearTimeout(timeout);
			done();
		}, 10);
		
	});
	
});
describe('setTimeout without done', () => {
	beforeEach(() => {
		jest.useRealTimers();
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	})
	it('passes when fails', () => {
		var timeout = setTimeout(() => {
			expect(false).toBe(true);
			clearTimeout(timeout);
			
		}, 1000);

	});

});

