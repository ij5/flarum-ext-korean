moment.locale('ko', {
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin : '일._월._화._수._목._금._토.'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'M월 D일',
      LL: 'YYYY년 M월 DD일',
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
      future : '%s 후',
      past : '%s 전',
      s : '몇초',
      m : '몇분',
      mm : '%d분',
      h : '한시간',
      hh : '%d시간',
      d : '하루',
      dd : '%d일',
      M : '한달',
      MM : '%d개월',
      y : '1년',
      yy : '%d년'
    },
    week: {
      dow: 1,
      doy: 4 
    }
  });