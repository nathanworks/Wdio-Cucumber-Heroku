Feature: Search for a product on eBay

  Scenario Outline: Access a product via search
    Given user is on eBay homepage
    When user searches for "MacBook"
    And user selects Computers/Tablets & Networking category
    Then user verifies search results
