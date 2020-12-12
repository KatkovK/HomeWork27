var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(brand, body, typeEngine) {
        this.brand = brand;
        this.body = body;
        this.typeEngine = typeEngine;
    }
    Car.prototype.getInfo = function () {
        return "Brand: " + this.brand + ", Body: " + this.body + ", Engine type: " + this.typeEngine;
    };
    return Car;
}());
var Mersedes = (function (_super) {
    __extends(Mersedes, _super);
    function Mersedes(model, body, typeEngine, color, winNumber) {
        var _this = _super.call(this, 'Mersedes', body, typeEngine) || this;
        _this.model = model;
        _this.body = body;
        _this.typeEngine = typeEngine;
        _this.color = color;
        _this.winNumber = winNumber;
        return _this;
    }
    Mersedes.prototype.getInfo = function () {
        return "model:" + this.model + ", " + _super.prototype.getInfo.call(this) + ", color: " + this.color + ", win: " + this.winNumber;
    };
    return Mersedes;
}(Car));
var Nissan = (function (_super) {
    __extends(Nissan, _super);
    function Nissan(model, body, typeEngine, color, winNumber) {
        var _this = _super.call(this, 'Nissan', body, typeEngine) || this;
        _this.model = model;
        _this.body = body;
        _this.typeEngine = typeEngine;
        _this.color = color;
        _this.winNumber = winNumber;
        return _this;
    }
    Nissan.prototype.getInfo = function () {
        return "model:" + this.model + ", " + _super.prototype.getInfo.call(this) + ", color: " + this.color + ", win: " + this.winNumber;
    };
    return Nissan;
}(Car));
var Ford = (function (_super) {
    __extends(Ford, _super);
    function Ford(model, body, typeEngine, sistem, color, winNumber) {
        var _this = _super.call(this, 'Ford', body, typeEngine) || this;
        _this.model = model;
        _this.body = body;
        _this.typeEngine = typeEngine;
        _this.sistem = sistem;
        _this.color = color;
        _this.winNumber = winNumber;
        return _this;
    }
    Ford.prototype.getInfo = function () {
        return "model:" + this.model + ", " + _super.prototype.getInfo.call(this) + ", color: " + this.color + ", sistem: " + this.sistem + " win: " + this.winNumber;
    };
    return Ford;
}(Car));
var slc = new Mersedes('SLS', 'cupe', 'petrol', 'red', '45ER785758');
var vito = new Mersedes('Vito', 'Minivan', 'dizel', 'blue', 'GY6578987');
console.log(slc.getInfo());
console.log(vito.getInfo());
var fiesta = new Ford('Fiesta', 'hatchback', 'petrol', 'grey', 'EcoBoost', 'UG45333254');
var ecoSport = new Ford('EcoSport', 'SUV', 'dizel', 'green', 'EcoBoost', 'QW65432568');
console.log(fiesta.getInfo());
console.log(ecoSport.getInfo());
var leaf = new Nissan('Leaf', 'hatchback', 'electro', 'white', 'NM754444');
var patrol = new Nissan('Patrol', 'SUV', 'petrol', 'blak', 'YY567854389');
console.log(leaf.getInfo());
console.log(patrol.getInfo());
//# sourceMappingURL=main.js.map