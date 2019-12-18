'use strict';

[{
  zoneRegex: /^(Thok Ast Thok \(Extreme\)|罗波那歼殛战)$/,
  timelineFile: 'ravana-ex.txt',
    triggers: [
        {
            id: '黑圈',
            regexCn: / 1B:\y{ObjectId}:\y{Name}:....:....:0039:0000:0000:0000:/,
            condition: function (data, matches) {
                if (matches[1] == data.me)
                    return
            },
            alertText: {
                cn: '黑圈点你',
            },
            infoText: {
                cn: '去边缘不重叠',
            },
        }, 
        {
            id: '破',
            regexCn: / 14:EC0:罗波那 starts using 光焰【破】 on 罗波那./,
            alertText: {
                cn: '背面集合',
            },
            beforeSeconds: 13,
            infoText: {
                cn: '不动看冲锋',
            },
        },
        {
            id: '破',
            regexCn: / 14:EBC:罗波那 starts using 光焰【序】 on 罗波那./,
            alertText: {
                cn: '背面集合',
            },
            beforeSeconds: 13,
            infoText: {
                cn: '快远离',
            },
        },
        {
            id: '两侧防御',
            regexCn: / 14:EA2:罗波那 starts using 两翼防御 on 罗波那./,
            alertText: {
                cn: '去正面',
            },
        },
        {
            id: '右翼防御',
            regexCn: / 罗波那 starts using 右翼防御 on 罗波那./,
            alertText: {
                cn: '去左边',
            },
        },
        {
            id: '左翼防御',
            regexCn: / 罗波那 starts using 左翼防御 on 罗波那./,
            alertText: {
                cn: '去右边',
            },
        },
   ],
}];
