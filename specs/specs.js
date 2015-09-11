describe('replaceWord', function() {

	it("searches one word and returns replaced word", function() {
		expect(replaceWord("hello", "hello", "goodbye")).to.equal("goodbye");
  	});

	it("searches two + words and returns replaced word", function() {
		expect(replaceWord("Hi there, a hello is in order", "hello", "goodbye")).to.equal("Hi there, a goodbye is in order");
  	});

	it("searches two instances of needle and replace", function() {
		expect(replaceWord("Hello, goodbye, hello", "hello", "goodbye")).to.equal("goodbye, goodbye, goodbye");
	});

	it("searches case-insensitive and punctuation", function() {
		expect(replaceWord("Hello. Hello, HeLlO", "hello", "goodbye")).to.equal("goodbye. goodbye, goodbye");
	});
});
