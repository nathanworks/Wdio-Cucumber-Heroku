Feature: Apply multiple filters on eBay

  Scenario Outline: Access a product via category after applying multiple filters
    Given user is on eBay homepage
    When user navigates to Cell Phones & accessories
    And user selects Cell Phones & Smartphones
    And user applies filters Condition, Price, and Item location
    Then user verifies filters are applied
