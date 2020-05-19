
Feature: Login
  @Sprint1
  Scenario: Show Homepage after Log with valid credentials
    Given The login screen is displayed on browser
    When The User login with hist credentials
    Then The homepage will be shown
  @Sprint2
  Scenario Outline: Show Error Message after logining with invalid credentials
    Given The login screen is displayed on browser
    When The user attempt to login with valid "<username>" and invalid "<password>"
    Then The system displays the error "<message>"
    Examples:
    |username|password|message|
    |khanh.tx@live.com|abc|password incorrect|
    |khanh.tx         |abc123|Email is invalid|
  @Sprint3
  Scenario: Show user with valid keyword search
    Given The user input information for 10 record
            |fullname| birthday| whereborn|
            | 1      | 01/11/1996| Ha Nam |
            | abc    | 02/02/1998| Nam Dinh|
    And The user find with the keyword "abc"
    Then The information about abc is shown


