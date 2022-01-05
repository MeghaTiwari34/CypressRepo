Feature: Login

    Feature Description
    @ValidLogin
    Scenario: Valid User Login
    Given Open the application url
    When User enters the valid user credentials and click login
    Then Validate user lands on the Accounts Overview Screen

    Scenario: Invalid User Login
    Given Open the application url
    When User enters the invalid user credentials and click login
    Then Validate user lands on the Accounts Overview Screen

