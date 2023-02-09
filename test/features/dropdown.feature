Feature: Interactive Investor Dropdown

  Scenario Outline:
    Given I am on the Interactive Investor home page
    When I click on the services tab
        And I click on the <accounts> link
    Then I will be on the correct page with the correct <url>

    Examples:
      | accounts                | url                                              | 
      | Stocks and Shares ISA   | https://www.ii.co.uk/ii-accounts/isa             |
#      | Trading Account         | https://www.ii.co.uk/ii-accounts/trading-account |
#      | SIPP                    | https://www.ii.co.uk/ii-accounts/sipp |
#      | Junior ISA              | https://www.ii.co.uk/ii-accounts/isa/junior-isa |
#      | Cash Savings            | https://www.ii.co.uk/ii-accounts/cash-savings |
#      | See all accounts        | https://www.ii.co.uk/ii-accounts |

