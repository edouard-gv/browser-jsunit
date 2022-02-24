function computeFB(n) {
	//if (n==3) return "fizz"
    return n;
}

function printResult() {
    let n = parseInt(document.getElementById("n").value);
    for (i=0; i<n; i++) {
        let div = document.createElement("div");
        div.textContent = computeFB(i);
        document.getElementById("answer").appendChild(div);
    }
}

function loadBehavior() {
    document.getElementById("exec").addEventListener('click', () => printResult())
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

/**
 * Unit test unit test (for kevin)
 */

function testOneShouldReturnOneShouldWork() {
	testCase.assertEquals("ok", document.getElementsByTagName("ul")[0].children[0].className)	 
}

function testThreeShouldReturnFizzShouldFail() {
	testCase.assertEquals("ko", document.getElementsByTagName("ul")[0].children[1].className)	 
}

function testShouldRaiseAnErrorShouldRaiseAnError() {
	testCase.assertEquals("error", document.getElementsByTagName("ul")[0].children[2].className)	 
}
