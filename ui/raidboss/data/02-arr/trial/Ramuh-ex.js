'use strict';

//ShivaEX
[{
    zoneRegex: /^拉姆歼殛战$/,
    timelineFile: 'Ramuh-ex.txt',
    triggers: [
        {
            id: '混乱',
            regexCn: / 1B:\y{ObjectId}:(\y{Name}):....:....:0001:0000:0000:0000:/,
            condition: function (data, matches) {
                return (matches[1] == data.me);
            },
            alertText: {
                cn: '魅惑点你',
            },
            infoText: {
                cn: '去1点',
            },
        },
        {
            id: '电圈',
            regexCn: / 1B:\y{ObjectId}:(\y{Name}):0000:....:0015:....:0000:0000/,
            condition: function (data, matches) {
                return (matches[1] == data.me);
            },
            alertText: {
                cn: '雷圈点你',
            },
            infoText: {
                cn: '电人或分散',
            },
        },
    ],
}];
