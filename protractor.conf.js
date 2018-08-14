var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    allScriptsTimeout: 300000,
    suites: {
        default: './e2e/test-suites/*.e2e-spec.ts',
    },
    capabilities: {
        "browserName": "chrome"
    },
    params: {
		username: "gueststudentqa01",
		userdomain:"gmail.com",
        password: "GuestStudendqa01$",
        file: "beemo.jpg"
    },
    directConnect: true,
    baseUrl: 'https://mail.google.com/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {
        }
    },
    onPrepare() {
        require('ts-node').register({
            project: './tsconfig.json'
        });
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './Report/e2e'
            , docTitle: 'Gmail Automated Test'
            ,spec: {
                displayStacktrace: true
            }
        }).getJasmine2Reporter());
    }
};