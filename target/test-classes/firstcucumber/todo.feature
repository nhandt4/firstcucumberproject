# Them n item, sau do refresh lai trinh duyet, kiem tra lai thu tu cac item tren trinh duyet  -> ko thay doi thu tu va k thieu item
Feature: Todo
  @Sprint1
  Scenario: Hien thi dung danh sach da them sau khi refresh
    Given The ToDo link is displayed on screen and enter list keyword
          |keyword|
          |play   |
          |run    |
          |eat    |
          |sleep  |
          |code   |
    When User attempt to refresh the Toto link
    Then The system displays the list that looks like the original list