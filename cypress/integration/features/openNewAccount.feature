Feature: Open New Account

    Feature Description
    
    Scenario: Open a new checking account
    Given Open the application url
    When User enters the valid user credentials and click login
    When Clicks on Open New Account link and then clicks on Open New Account button
    Then New Account is opened successfully

    Scenario: Open a new savings account
    Given Open the application url
    When User enters the valid user credentials and click login
    When Clicks on Open New Account link, selects account type as Savings and then clicks on Open New Account button
    Then New Account is opened successfully