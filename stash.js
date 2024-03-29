// Generated by CoffeeScript 1.8.0

/* (C) 2014 Narazaka : Licensed under The MIT License - http://narazaka.net/license/MIT?2014 */
var MiyoFilters;

if (typeof MiyoFilters === "undefined" || MiyoFilters === null) {
  MiyoFilters = {};
}

MiyoFilters.stash = {
  type: 'through',
  filter: function(argument, request, id, stash) {
    var name;
    if ((argument != null ? argument.stash : void 0) == null) {
      throw 'argument.stash must be a hash';
    }
    for (name in argument.stash) {
      name = name.replace(/\.[^.]+$/, '');
      stash[name] = this.property(argument.stash, name, request, id, stash);
    }
    return argument;
  }
};

if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
  module.exports = MiyoFilters;
}

//# sourceMappingURL=stash.js.map
