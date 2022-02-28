function computeFB(n) {
	//if (n==3) return "fizz"
    return n;
}

function printResult() {
    let n = parseInt(document.getElementById("n").value)
    for (i=0; i<n; i++) {
        let div = document.createElement("div")
        div.textContent = computeFB(i)
        document.getElementById("answer").appendChild(div)
    }
}

function greet() {
    let div = document.createElement("div")
    div.textContent = "Hello unit world!"
    div.id = "greetings"
    document.getElementById("answer").appendChild(div)
}

function loadBehavior() {
    document.getElementById("exec").addEventListener('click', () => printResult())
    document.getElementById("greet").addEventListener('click', () => greet())
}

window.addEventListener('load', () => loadBehavior());


/**
 * Unit tests
 */

function testOneShouldReturnOne() {
    testCase.assertEquals(1, computeFB(1));
}

function testThreeShouldReturnFizz() {
    testCase.assertEquals("fizz", computeFB(3));
}

function testShouldRaiseAnError() {
    testCase.assertEquals(null, undefined.getFoo());
}

function testShouldBeAbleToHaveTwoAssertions() {
    testCase.assertEquals(1, computeFB(1));
    testCase.assertEquals(2, computeFB(2));
}

function testWhenIClickThenMessageShouldAppear() {
    testCase.clickOnId("greet")
    testCase.assertTextContentContains("greetings", "Hello unit world!")
    testCase.assertTextContentContains("greetings", "Hello")
    testCase.assertTextContentContains("greetings", "unit")
    testCase.assertTextContentContains("greetings", "!")
}


/**
 * Unit test unit test (for kevin)
 */

function testOneShouldReturnOneShouldWork() {
	testCase.assertEquals("ok", document.getElementById("testOneShouldReturnOne").className)	 
}

function testThreeShouldReturnFizzShouldFail() {
	testCase.assertEquals("ko", document.getElementById("testThreeShouldReturnFizz").className)	 
}

function testShouldRaiseAnErrorShouldRaiseAnError() {
	testCase.assertEquals("error", document.getElementById("testShouldRaiseAnError").className)	 
}

function testShouldBeAbleToHaveTwoAssertionsShouldHaveTwoMessages() {
	testCase.assertEquals("ok", document.getElementById("testShouldBeAbleToHaveTwoAssertions").className) 
	testCase.assertEquals("ok", document.getElementById("testShouldBeAbleToHaveTwoAssertions-2").className) 
}

function testWhenIClickThenMessageShouldAppearShouldWork() {
	testCase.assertEquals("ok", document.getElementById("testWhenIClickThenMessageShouldAppear").className)	 
}
