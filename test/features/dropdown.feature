Feature: Interactive Investor Dropdown

Background:
  Given I am on the Interactive Investor home page

  Scenario Outline: As a user, I can view and visit all the Accounts services

    When I click on the services tab
      And I click on the <accounts> link
    Then I will be on the correct page with the correct <url>

    Examples:
      | accounts                                                                            | url                                              | 
      | //a[@class='chakra-link chakra-link ii-y41h9l' and text()='Stocks and Shares ISA']  | https://www.ii.co.uk/ii-accounts/isa             |
      | //a[@class='chakra-link chakra-link ii-y41h9l' and text()='Trading Account']        | https://www.ii.co.uk/ii-accounts/trading-account |
      | //a[@class='chakra-link chakra-link ii-y41h9l' and text()='SIPP']                   | https://www.ii.co.uk/ii-accounts/sipp |
      | //a[@class='chakra-link chakra-link ii-y41h9l' and text()='Junior ISA']             | https://www.ii.co.uk/ii-accounts/isa/junior-isa |
      | //a[@class='chakra-link chakra-link ii-y41h9l' and text()='Cash Savings']           | https://www.ii.co.uk/ii-accounts/cash-savings |
      | //a[@class='chakra-link chakra-link ii-y41h9l' and text()='See all accounts']       | https://www.ii.co.uk/ii-accounts |


      #| //a[@class='chakra-link chakra-link ii-y41h9l' and text()='Stocks and Shares ISA'] | https://www.ii.co.uk/ii-accounts/isa             |

