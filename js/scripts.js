$(document).ready(function () {
  $(".build-list form").submit(function (event) {
    event.preventDefault();
    $(".build-list").toggle();
    var shoppingList = [];
    var formItems = ["item1", "item2", "item3", "item4", "item5", "item6"];
    formItems.forEach(function (formItem) {
      var toInsert = $("#" + formItem).val();
      if (toInsert) {
        shoppingList.push(toInsert);
      }
    });
    shoppingList.sort();
    var upperList = shoppingList.map(function (item) {
      return item.toUpperCase();
    });
    upperList.forEach(function (item) {
      $("#list").append("<li>" + item + "</li>");
    });
    $(".results").show();
  });
});