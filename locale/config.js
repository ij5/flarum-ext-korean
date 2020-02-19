moment.locale('ko', {
    months: '1월,2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1 월_2월_3 월_4 월_5 월_6 월_7 월_8 월_9 월_10 월_11 월_12 월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin : '일._월._화._수._목._금._토.'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'M 월 D 일',
      LL: 'YYYY  M 월 DD 일',
      LLL: 'YYYY-MM-DD HH:mm',
      LLLL: 'YYYY-MM-DD HH:mm:ss',
      l: 'M/D',
      ll: 'YY/M/D',
      lll: 'YYYY-MM-DD HH:mm',
      llll: 'YYYY-MM-DD HH:mm:ss'
    },
    calendar : {
      sameDay: '[오늘] LT',
      nextDay: '[내일] LT',
      nextWeek: 'dddd [의] LT',
      lastDay: '[어제] LT',
      lastWeek: 'dddd [의] LT',
      sameElse: 'L'
    },
    ordinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '일';
        case 'M':
          return number + '월';
        case 'w':
        case 'W':
          return number + '주';
        default:
          return number;
      }
    },
    relativeTime : {
      future : '후 %s',
      past : '%s 전',
      s : '몇초',
      m : '몇분',
      mm : '%d 분',
      h : '한시간',
      hh : '%d 시간',
      d : '하루',
      dd : '%d 일',
      M : '한달',
      MM : '%d 개월',
      y : '일년',
      yy : '%d 년'
    },
    week: {
      dow: 1,
      doy: 4 
    }
  });