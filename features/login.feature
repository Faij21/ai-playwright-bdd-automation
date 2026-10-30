Feature: Login

  Background:
    Given I open the BrokerLOS home page
  # Scenario: Home page shows the Sign In link
  #   Then I should see the "Sign In" link
  # Scenario: Sign In opens the login form
  #   When I click the "Sign In" link
  #   Then I should see the "Email" field
  #   And I should see the "Password" field

  # Scenario Outline: Login form shows the <field> field
  #   When I click the "Sign In" link
  #   Then I should see the "<field>" field

  #   Examples:
  #     | field    |
  #     | Email    |
  #     | Password |

  Scenario Outline: Login is refused for <case>
    When I click the "Sign In" link
    And I log in with email "<email>" and password "<password>"
    Then I should see the "User does not exist." text
    But I should still see the "Password" field

    Examples:
      | case           | email                  | password  |
      | unknown email  | nobody@example.com     | Wrong@123 |
      | wrong password | qa.user@brokerlos.test | Wrong@123 |
