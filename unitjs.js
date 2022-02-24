class TestResult {
	
	constructor(isError, isOk, testName, expected, actual) {
		this.isError = isError
        this.isOk = isOk
		this.testName = testName
		this.expected = expected
		this.actual = actual
	}
}

class TestCase {
	
    constructor() {
        this.currentTestName = undefined;
        this.testResults = []
        this.appendCSS()
		this.resultArea = this.insertTestResultArea()
    }

    appendCSS() {
        let link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'unitjs.css';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    insertTestResultArea() {
        let body = document.getElementsByTagName("body")[0]
        body.appendChild(document.createElement("hr"))
        body.appendChild(document.createElement("h3")).textContent = "Unit tests"
        return body
            .appendChild(document.createElement("div")
            .appendChild(document.createElement("ul")))
    }

    assertEquals(expected, actual) {
        this.addTestResult(new TestResult(false, expected == actual, currentTestName, expected, actual))
    }
	
	addTestResult(testResult) {
		this.testResults.push(testResult)
		this.printTestResult(testResult)	
	}
	
	printTestResults() {
		//for (let testResult of this.testResults) this.printTestResult(testResult)
        //moved into addTestResult : we prefere to print the results in the flow
	}
	
	printTestResult(testResult) {
		if (testResult.isError) {
            this.resultArea.appendChild(this.bullet("error", "Test ", ...this.mark(testResult.testName), 
                " throws an error: ", ...this.mark(testResult.actual)))
        }
		else if (testResult.isOk) {
            this.resultArea.appendChild(this.bullet("ok", "Test ", ...this.mark(testResult.testName), " OK."))
        }
        else {
            this.resultArea.appendChild(this.bullet("ko", "Test ", ...this.mark(testResult.testName), " KO: ",
            "expected: ", ...this.mark(testResult.expected), " actual: ", ...this.mark(testResult.actual)))
        }
	}

    mark(...content) { return ["<mark>", ...content, "</mark>"]}
    
    bullet(klass, ...content) { 
        let li = document.createElement("li")
        li.className = klass
        li.innerHTML = content.join("")
        return li
    }
}

var testCase

window.addEventListener("load", () => {
    testCase = new TestCase()
    assertEquals = (expected, actual) => testCase.assertEquals(expected, actual)
    for (currentTestName in window) {
        if (currentTestName.startsWith("test") && window[currentTestName] instanceof Function) {
			try {
				window[currentTestName]()
			} catch (error) {
				testCase.addTestResult(new TestResult(true, false, currentTestName, null, error))
			}
        }
    }
	
	testCase.printTestResults()
})

