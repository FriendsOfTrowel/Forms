var MDFormGroups = function(elements) {
    this._elements = elements;

    this._elements.forEach(function(element, index) {
        element_obj = new MDFormGroup(element);
    })
}

var MDFormGroup = function(element) {
    this._group = element;
    this._label = this._group.querySelector('[data-flag="mdf-label"]');
    this._input = this._group.querySelector('[data-flag="mdf-input"]');
    this._dataGroup = {
        'name': 'data-mdform',
        'fold': 'folded',
        'unfold': 'unfolded',
    };

    this._init();
}

MDFormGroup.prototype._init = function() {
    this._listener();
    this.foldController();
}

MDFormGroup.prototype._listener = function() {
    this._input.addEventListener('focus', function(event) {
        this.unfold();
    }.bind(this), false);

    this._input.addEventListener('focusout', function(event) {
        this.foldController();
    }.bind(this), false);
}

MDFormGroup.prototype.foldController = function() {
    if (this._input.value.length) {
        this.unfold();
    } else {
        this.fold();
    }
}

MDFormGroup.prototype.fold = function() {
    this._label.setAttribute(this._dataGroup.name, this._dataGroup.fold);
}

MDFormGroup.prototype.isFolded = function() {
    return this._label.getAttribute(this._dataGroup.name) === this._dataGroup.fold;
}

MDFormGroup.prototype.unfold = function() {
    this._label.setAttribute(this._dataGroup.name, this._dataGroup.unfold);
}

MDFormGroup.prototype.isUnfolded = function() {
    return this._label.setAttribute(this._dataGroup.name) === this._dataGroup.unfold;
}
