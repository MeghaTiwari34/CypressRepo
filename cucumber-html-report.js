const report = require('multiple-cucumber-html-reporter');


report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: 'cypress/CucumberHtmlreports',
    metadata:{
        browser: {
            name: 'chrome',
            version: '96'   
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'CypressPOC'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'}
        ]
    }
});