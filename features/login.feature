Feature: User Login

  Background:
    Given I open the suiteondemand home page
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
  # Scenario Outline: Login is refused for <case>
  #   When I click the "Sign In" link
  #   And I log in with email "<email>" and password "<password>"
  #   Then I should see the "User does not exist." text
  #   But I should still see the "Password" field
  #   Examples:
  #     | case           | email                  | password  |
  #     | unknown email  | nobody@example.com     | Wrong@123 |
  #     | wrong password | qa.user@brokerlos.test | Wrong@123 |
  # Scenario Outline: Login <user> with valid credentials
  #   When I log in with username "<user>" and password "<password>"
  #   Then I should see the recently viewed tab
  #   Examples:
  #     | user | password |
  #     | will | will     |

  @smoke @login
  Scenario: Login with valid credentials from environment variables
    When I log in with user and password
    Then I should see the profile icon

  @smoke @invalid-login
  Scenario: Login with invalid credentials from test data file
    When I log in with invalid credentials
    Then I should not see the profile icon
