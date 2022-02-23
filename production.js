function computeFB(n) {
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

