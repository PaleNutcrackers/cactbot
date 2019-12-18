'use strict';

//ShivaEX
[{
    zoneRegex: /^伊弗利特歼殛战$/,
    timelineFile: 'Ifrit-ex.txt',
    triggers: [
        {
            id: '热风',
            regexCn: / 14:5F9:伊弗利特 starts using 灼热咆哮 on (\y{Name})./,
            condition: function (data, matches) {
                return (matches[1] == data.me);
            },
            alertText: {
                cn: '热风热风',
            },
            infoText: {
                cn: '热风->' + data.ShortName(matches[1]),
            },
        },
        {
            id: '锁链电圈',
            regexCn: / 1A:\y{ObjectId}:(\y{Name}) gains the effect of 火狱之锁/,
            condition: function (data, matches) {
                if (matches[1] == data.me)
                return 
            },
            alertText: {
                cn: '注意热风',
            },
            infoText: {
                cn: '快靠近',
            },
        },
    ],
}];
