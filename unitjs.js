class TestCase {
    constructor() {
        this.currentTestName = undefined;
        this.testResult = this.insertTestResultArea()
    }

    insertTestResultArea() {
        let body = document.getElementsByTagName("body")[0]
        body.appendChild(document.createElement("hr"))
        body.appendChild(document.createElement("h3")).textContent = "Unit tests"
        return body
            .appendChild(document.createElement("div")
            .appendChild(document.createElement("ul")));
    }

    assertEquals(expected, actual) {
        if (actual == expected) {
            this.testResult.appendChild(this.bullet("ok", "Test ", ...this.mark(currentTestName), " OK."));
        }
        else {
            this.testResult.appendChild(this.bullet("ko", "Test ", ...this.mark(currentTestName), " KO: ",
            "expected: ", ...this.mark(expected), " actual: ", ...this.mark(actual)));
        }
    }

    mark(...content) { return ["<mark>", ...content, "</mark>"]}
    
    bullet(klass, ...content) { 
        let li = document.createElement("li")
        li.className = klass
        li.innerHTML = content.join("");
        return li;
    }
}

var testCase

window.addEventListener("load", () => {
    testCase = new TestCase()
    assertEquals = (expected, actual) => testCase.assertEquals(expected, actual)
    for (currentTestName in window) {
        if (currentTestName.startsWith("test") && window[currentTestName] instanceof Function) {
            window[currentTestName]();
        }
    }
})

