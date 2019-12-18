'use strict';

//ShivaEX
[{
    zoneRegex: /^(Akh Afah Amphitheatre \(Extreme\)|希瓦歼殛战)$/,
    timelineFile: 'Shiva-ex.txt',
    triggers: [
        {
            id: 'ShivaEx Frost Blade',
            regexCn: /1A:\y{ObjectId}:希瓦 gains the effect of 冰霜之剑/,
            alertText: {
                cn: '冰印剑分摊',
            },
            infoText: {
                cn: '背后分摊',
            },
        },
        {
            id: 'ShivaEx Glacier Bash',
            regexCn: /14:BE9:希瓦 starts using 冰河怒击 on 希瓦./,
            alarmText: {
                cn: '穿背躲避',
            },
        
        },
        {
            id: 'Frost Brand',
            regex: / 1B:\y{ObjectId}:(\y{Name}):....:....:001D:0000:0000:0000:/,
            condition: function (data, matches) {
                return (matches[1] == data.me);
            },
            alertText: {
                cn: '分散',
            },
        },
        {
            id: 'TitanEx Double Weight',
            regexCn: /14:BE3:希瓦 starts using 永久冻土 on Unknown./,
            alertText: {
                cn: '冰地板',
            },
        },
        {
            id: 'Frost Brand',
            regex: / 1B:\y{ObjectId}:(\y{Name}):....:....:001A:0000:0000:0000:/,
            condition: function (data, matches) {
                return (matches[1] == data.me);
            },
            alertText: {
                cn: '击退出人群',
            },
        },
        {
            id: 'ShivaEx Frost Blade',
            regexCn: /1A:\y{ObjectId}:希瓦 gains the effect of 冰霜之弓/,
            alarmText: {             
                cn: '去背后',
            },
            infoText: {
                cn: '270°AOE',
            },
        },
    ],
    timelineReplace: [
        {
            'locale': 'cn',
            'replaceSync': {
                'Engage!': '战斗开始！',
                'Shiva': '希瓦',
            },
            'replaceText': {
                'Frost Brand': '冰霜之杖',
                'Hailstorm': '冰雹',
                'Absolute Zero': '绝对零度',
                'Melt': '武器融化',
                'Icicle Impact': '冰柱冲击',
                'Dreams of Ice': '寒冰的幻想',
                'Frost Blade': '冰霜之剑',
                'Icebrand': '冰印剑',
                'Heavenly Strike': '天降一击',
                'Glacier Bash': '冰河怒击',
                'Diamond Dust': '钻石星尘',
                'Permafrost': '永久冻土',
                'Frost Bow': '冰霜之弓',
                'Glass Dance': '冰雪乱舞',
                'Avalanche': '雪崩',
                'Whiteout': '白化视界',
            },
            '~effectNames': {
                'Damage Up': '伤害提高',
                'Vulnerability Up': '受伤加重',
                'Frost Brand': '冰霜之杖',
                'Frost Blade': '冰霜之剑',
                'Frost Bow': '冰霜之弓',
                'Stun': '眩晕',
                'Blunt Resistance Down': '打击耐性降低',
                'Slashing Resistance Down': '斩击耐性降低',
                'Deep Freeze': '冻结',
                'Frostbite': '冻伤',
                'Thin Ice': '冰面',
            },
        },

    ],
}];
