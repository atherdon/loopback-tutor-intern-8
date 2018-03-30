'use strict';

module.exports = function(Reservation) {

  Reservation.validate('startDate', dateValidator, {message: 'endDate can not be before startDate'});
  function dateValidator(err) {
    if(this.startDate >= this.endDate) {
      err();
    }
  }

};
