Feature: Register

    Feature Description
    @ValidRegistration
    Scenario: Register a new user
    Given Open the application url
    When User clicks on Register link, enters his details and clicks on Register button
    Then User is registered successfully

    # Scenario: Validate error on registering a user with existing username
    # Given Open the application url
    # When User clicks on Register link, enters  details with an existing username and clicks on Register button
    # Then Error is displayed and registration is unsuccessful

