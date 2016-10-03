(function() {
    "use strict"
    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


    ToBuyController.$inject = ["ShoppingListCheckOffService"]

    function ToBuyController(ShoppingListCheckOffService) {
        var tbc = this;

        tbc.itemsToBuy = ShoppingListCheckOffService.itemsToBuy;

        tbc.markAsBought = function(itemIndex) {
            ShoppingListCheckOffService.markAsBought(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"]

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var abc = this;

        abc.itemsAlreadyBought = ShoppingListCheckOffService.itemsAlreadyBought;
    }

    function ShoppingListCheckOffService() {
        var service = {
            itemsToBuy: [{
                name: "cookies",
                quantity: 10
            }, {
                name: "soda",
                quantity: 5
            }, {
                name: "potato chips",
                quantity: 2
            }, {
                name: "chocolates",
                quantity: 3
            }, {
                name: "cakes",
                quantity: 6
            }],

            itemsAlreadyBought: [],

            markAsBought: function(itemIndex) {
                service.itemsAlreadyBought.push(service.itemsToBuy[itemIndex]);
                service.itemsToBuy.splice(itemIndex, 1)
            }
        };

        return service;
    }

})();
