var app = new Vue({
    el: '#app',
    data: {
        shoppingCart: [
            { label: 'Apples', cost: 6 },
            { label: 'Bananas', cost: 2 },
            { label: 'Coconuts', cost: 8 }
        ],
        totalCost: 0,
    },

    // Task 2: complete the method that calculates Total Cost.
    methods: {
        calcTotal: function (event) {
            let total = 0;
            for (var i=0; i<this.shoppingCart.length; i++) {
                total += this.shoppingCart[i].cost;
            };
            this.totalCost = total;
       }
    }
});
