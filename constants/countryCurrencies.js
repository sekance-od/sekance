const countryCurencies = [
  {
    name: 'Afghanistan',
    symbol: 'AFG',
    id: 1
  },
  {
    name: 'Albania',
    symbol: 'ALB',
    id: 2
  },
  {
    name: 'Algeria',
    symbol: 'DZA',
    id: 3
  },
  {
    name: 'Andorra',
    symbol: 'AND',
    id: 4
  },
  {
    name: 'Angola',
    symbol: 'AGO',
    id: 5
  },
  {
    name: 'Antigua and Barbuda',
    symbol: 'ATG',
    id: 6
  },
  {
    name: 'Argentina',
    symbol: 'ARG',
    id: 7
  },
  {
    name: 'Armenia',
    symbol: 'ARM',
    id: 8
  },
  {
    name: 'Australia',
    symbol: 'AUS',
    id: 9
  },
  {
    name: 'Austria',
    symbol: 'AUT',
    id: 10
  },
  {
    name: 'Azerbaijan',
    symbol: 'AZE',
    id: 11
  },
  {
    name: 'Bahamas',
    symbol: 'BHS',
    id: 12
  },
  {
    name: 'Bahrain',
    symbol: 'BHR',
    id: 13
  },
  {
    name: 'Bangladesh',
    symbol: 'BGD',
    id: 14
  },
  {
    name: 'Barbados',
    symbol: 'BRB',
    id: 15
  },
  {
    name: 'Belarus',
    symbol: 'BLR',
    id: 16
  },
  {
    name: 'Belgium',
    symbol: 'BEL',
    id: 17
  },
  {
    name: 'Belize',
    symbol: 'BLZ',
    id: 18
  },
  {
    name: 'Benin',
    symbol: 'BEN',
    id: 19
  },
  {
    name: 'Bhutan',
    symbol: 'BTN',
    id: 20
  },
  {
    name: 'Bolivia',
    symbol: 'BOL',
    id: 21
  },
  {
    name: 'Bosnia and Herzegovina',
    symbol: 'BIH',
    id: 22
  },
  {
    name: 'Botswana',
    symbol: 'BWA',
    id: 23
  },
  {
    name: 'Brazil',
    symbol: 'BRA',
    id: 24
  },
  {
    name: 'Brunei',
    symbol: 'BRN',
    id: 25
  },
  {
    name: 'Bulgaria',
    symbol: 'BGR',
    id: 26
  },
  {
    name: 'Burkina Faso',
    symbol: 'BFA',
    id: 27
  },
  {
    name: 'Burundi',
    symbol: 'BDI',
    id: 28
  },
  {
    name: 'Cabo Verde',
    symbol: 'CPV',
    id: 29
  },
  {
    name: 'Cambodia',
    symbol: 'KHM',
    id: 30
  },
  {
    name: 'Cameroon',
    symbol: 'CMR',
    id: 31
  },
  {
    name: 'Canada',
    symbol: 'CAN',
    id: 32
  },
  {
    name: 'Central African Republic',
    symbol: 'CAF',
    id: 33
  },
  {
    name: 'Chad',
    symbol: 'TCD',
    id: 34
  },
  {
    name: 'Chile',
    symbol: 'CHL',
    id: 35
  },
  {
    name: 'China',
    symbol: 'CHN',
    id: 36
  },
  {
    name: 'Colombia',
    symbol: 'COL',
    id: 37
  },
  {
    name: 'Comoros',
    symbol: 'COM',
    id: 38
  },
  {
    name: 'Congo (Brazzaville)',
    symbol: 'COG',
    id: 39
  },
  {
    name: 'Congo (Kinshasa)',
    symbol: 'COD',
    id: 40
  },
  {
    name: 'Costa Rica',
    symbol: 'CRI',
    id: 41
  },
  {
    name: 'Croatia',
    symbol: 'HRV',
    id: 42
  },
  {
    name: 'Cuba',
    symbol: 'CUB',
    id: 43
  },
  {
    name: 'Cyprus',
    symbol: 'CYP',
    id: 44
  },
  {
    name: 'Czechia',
    symbol: 'CZE',
    id: 45
  },
  {
    name: "Côte d'Ivoire",
    symbol: 'CIV',
    id: 46
  },
  {
    name: 'Denmark',
    symbol: 'DNK',
    id: 47
  },
  {
    name: 'Djibouti',
    symbol: 'DJI',
    id: 48
  },
  {
    name: 'Dominica',
    symbol: 'DMA',
    id: 49
  },
  {
    name: 'Dominican Republic',
    symbol: 'DOM',
    id: 50
  },
  {
    name: 'Ecuador',
    symbol: 'ECU',
    id: 51
  },
  {
    name: 'Egypt',
    symbol: 'EGY',
    id: 52
  },
  {
    name: 'El Salvador',
    symbol: 'SLV',
    id: 53
  },
  {
    name: 'Equatorial Guinea',
    symbol: 'GNQ',
    id: 54
  },
  {
    name: 'Eritrea',
    symbol: 'ERI',
    id: 55
  },
  {
    name: 'Estonia',
    symbol: 'EST',
    id: 56
  },
  {
    name: 'Eswatini',
    symbol: 'SWZ',
    id: 57
  },
  {
    name: 'Ethiopia',
    symbol: 'ETH',
    id: 58
  },
  {
    name: 'Fiji',
    symbol: 'FJI',
    id: 59
  },
  {
    name: 'Finland',
    symbol: 'FIN',
    id: 60
  },
  {
    name: 'France',
    symbol: 'FRA',
    id: 61
  },
  {
    name: 'Gabon',
    symbol: 'GAB',
    id: 62
  },
  {
    name: 'Gambia',
    symbol: 'GMB',
    id: 63
  },
  {
    name: 'Georgia',
    symbol: 'GEO',
    id: 64
  },
  {
    name: 'Germany',
    symbol: 'DEU',
    id: 65
  },
  {
    name: 'Ghana',
    symbol: 'GHA',
    id: 66
  },
  {
    name: 'Greece',
    symbol: 'GRC',
    id: 67
  },
  {
    name: 'Grenada',
    symbol: 'GRD',
    id: 68
  },
  {
    name: 'Guatemala',
    symbol: 'GTM',
    id: 69
  },
  {
    name: 'Guinea',
    symbol: 'GIN',
    id: 70
  },
  {
    name: 'Guinea-Bissau',
    symbol: 'GNB',
    id: 71
  },
  {
    name: 'Guyana',
    symbol: 'GUY',
    id: 72
  },
  {
    name: 'Haiti',
    symbol: 'HTI',
    id: 73
  },
  {
    name: 'Honduras',
    symbol: 'HND',
    id: 74
  },
  {
    name: 'Hungary',
    symbol: 'HUN',
    id: 75
  },
  {
    name: 'Iceland',
    symbol: 'ISL',
    id: 76
  },
  {
    name: 'India',
    symbol: 'IND',
    id: 77
  },
  {
    name: 'Indonesia',
    symbol: 'IDN',
    id: 78
  },
  {
    name: 'Iran',
    symbol: 'IRN',
    id: 79
  },
  {
    name: 'Iraq',
    symbol: 'IRQ',
    id: 80
  },
  {
    name: 'Ireland',
    symbol: 'IRL',
    id: 81
  },
  {
    name: 'Israel',
    symbol: 'ISR',
    id: 82
  },
  {
    name: 'Italy',
    symbol: 'ITA',
    id: 83
  },
  {
    name: 'Jamaica',
    symbol: 'JAM',
    id: 84
  },
  {
    name: 'Japan',
    symbol: 'JPN',
    id: 85
  },
  {
    name: 'Jordan',
    symbol: 'JOR',
    id: 86
  },
  {
    name: 'Kazakhstan',
    symbol: 'KAZ',
    id: 87
  },
  {
    name: 'Kenya',
    symbol: 'KEN',
    id: 88
  },
  {
    name: 'Kiribati',
    symbol: 'KIR',
    id: 89
  },
  {
    name: 'Kuwait',
    symbol: 'KWT',
    id: 90
  },
  {
    name: 'Kyrgyzstan',
    symbol: 'KGZ',
    id: 91
  },
  {
    name: 'Laos',
    symbol: 'LAO',
    id: 92
  },
  {
    name: 'Latvia',
    symbol: 'LVA',
    id: 93
  },
  {
    name: 'Lebanon',
    symbol: 'LBN',
    id: 94
  },
  {
    name: 'Lesotho',
    symbol: 'LSO',
    id: 95
  },
  {
    name: 'Liberia',
    symbol: 'LBR',
    id: 96
  },
  {
    name: 'Libya',
    symbol: 'LBY',
    id: 97
  },
  {
    name: 'Liechtenstein',
    symbol: 'LIE',
    id: 98
  },
  {
    name: 'Lithuania',
    symbol: 'LTU',
    id: 99
  },
  {
    name: 'Luxembourg',
    symbol: 'LUX',
    id: 100
  },
  {
    name: 'Madagascar',
    symbol: 'MDG',
    id: 101
  },
  {
    name: 'Malawi',
    symbol: 'MWI',
    id: 102
  },
  {
    name: 'Malaysia',
    symbol: 'MYS',
    id: 103
  },
  {
    name: 'Maldives',
    symbol: 'MDV',
    id: 104
  },
  {
    name: 'Mali',
    symbol: 'MLI',
    id: 105
  },
  {
    name: 'Malta',
    symbol: 'MLT',
    id: 106
  },
  {
    name: 'Marshall Islands',
    symbol: 'MHL',
    id: 107
  },
  {
    name: 'Mauritania',
    symbol: 'MRT',
    id: 108
  },
  {
    name: 'Mauritius',
    symbol: 'MUS',
    id: 109
  },
  {
    name: 'Mexico',
    symbol: 'MEX',
    id: 110
  },
  {
    name: 'Micronesia',
    symbol: 'FSM',
    id: 111
  },
  {
    name: 'Moldova',
    symbol: 'MDA',
    id: 112
  },
  {
    name: 'Monaco',
    symbol: 'MCO',
    id: 113
  },
  {
    name: 'Mongolia',
    symbol: 'MNG',
    id: 114
  },
  {
    name: 'Montenegro',
    symbol: 'MNE',
    id: 115
  },
  {
    name: 'Morocco',
    symbol: 'MAR',
    id: 116
  },
  {
    name: 'Mozambique',
    symbol: 'MOZ',
    id: 117
  },
  {
    name: 'Myanmar',
    symbol: 'MMR',
    id: 118
  },
  {
    name: 'Namibia',
    symbol: 'NAM',
    id: 119
  },
  {
    name: 'Nauru',
    symbol: 'NRU',
    id: 120
  },
  {
    name: 'Nepal',
    symbol: 'NPL',
    id: 121
  },
  {
    name: 'Netherlands',
    symbol: 'NLD',
    id: 122
  },
  {
    name: 'New Zealand',
    symbol: 'NZL',
    id: 123
  },
  {
    name: 'Nicaragua',
    symbol: 'NIC',
    id: 124
  },
  {
    name: 'Niger',
    symbol: 'NER',
    id: 125
  },
  {
    name: 'Nigeria',
    symbol: 'NGA',
    id: 126
  },
  {
    name: 'North Korea',
    symbol: 'PRK',
    id: 127
  },
  {
    name: 'North Macedonia',
    symbol: 'MKD',
    id: 128
  },
  {
    name: 'Norway',
    symbol: 'NOR',
    id: 129
  },
  {
    name: 'Oman',
    symbol: 'OMN',
    id: 130
  },
  {
    name: 'Pakistan',
    symbol: 'PAK',
    id: 131
  },
  {
    name: 'Palau',
    symbol: 'PLW',
    id: 132
  },
  {
    name: 'Panama',
    symbol: 'PAN',
    id: 133
  },
  {
    name: 'Papua New Guinea',
    symbol: 'PNG',
    id: 134
  },
  {
    name: 'Paraguay',
    symbol: 'PRY',
    id: 135
  },
  {
    name: 'Peru',
    symbol: 'PER',
    id: 136
  },
  {
    name: 'Philippines',
    symbol: 'PHL',
    id: 137
  },
  {
    name: 'Poland',
    symbol: 'POL',
    id: 138
  },
  {
    name: 'Portugal',
    symbol: 'PRT',
    id: 139
  },
  {
    name: 'Qatar',
    symbol: 'QAT',
    id: 140
  },
  {
    name: 'Romania',
    symbol: 'ROU',
    id: 141
  },
  {
    name: 'Russia',
    symbol: 'RUS',
    id: 142
  },
  {
    name: 'Rwanda',
    symbol: 'RWA',
    id: 143
  },
  {
    name: 'Saint Kitts and Nevis',
    symbol: 'KNA',
    id: 144
  },
  {
    name: 'Saint Lucia',
    symbol: 'LCA',
    id: 145
  },
  {
    name: 'Saint Vincent and the Grenadines',
    symbol: 'VCT',
    id: 146
  },
  {
    name: 'Samoa',
    symbol: 'WSM',
    id: 147
  },
  {
    name: 'San Marino',
    symbol: 'SMR',
    id: 148
  },
  {
    name: 'Sao Tome and Principe',
    symbol: 'STP',
    id: 149
  },
  {
    name: 'Saudi Arabia',
    symbol: 'SAU',
    id: 150
  },
  {
    name: 'Senegal',
    symbol: 'SEN',
    id: 151
  },
  {
    name: 'Serbia',
    symbol: 'SRB',
    id: 152
  },
  {
    name: 'Seychelles',
    symbol: 'SYC',
    id: 153
  },
  {
    name: 'Sierra Leone',
    symbol: 'SLE',
    id: 154
  },
  {
    name: 'Singapore',
    symbol: 'SGP',
    id: 155
  },
  {
    name: 'Slovakia',
    symbol: 'SVK',
    id: 156
  },
  {
    name: 'Slovenia',
    symbol: 'SVN',
    id: 157
  },
  {
    name: 'Solomon Islands',
    symbol: 'SLB',
    id: 158
  },
  {
    name: 'Somalia',
    symbol: 'SOM',
    id: 159
  },
  {
    name: 'South Africa',
    symbol: 'ZAF',
    id: 160
  },
  {
    name: 'South Korea',
    symbol: 'KOR',
    id: 161
  },
  {
    name: 'South Sudan',
    symbol: 'SSD',
    id: 162
  },
  {
    name: 'Spain',
    symbol: 'ESP',
    id: 163
  },
  {
    name: 'Sri Lanka',
    symbol: 'LKA',
    id: 164
  },
  {
    name: 'Sudan',
    symbol: 'SDN',
    id: 165
  },
  {
    name: 'Suriname',
    symbol: 'SUR',
    id: 166
  },
  {
    name: 'Sweden',
    symbol: 'SWE',
    id: 167
  },
  {
    name: 'Switzerland',
    symbol: 'CHE',
    id: 168
  },
  {
    name: 'Syria',
    symbol: 'SYR',
    id: 169
  },
  {
    name: 'Tajikistan',
    symbol: 'TJK',
    id: 170
  },
  {
    name: 'Tanzania',
    symbol: 'TZA',
    id: 171
  },
  {
    name: 'Thailand',
    symbol: 'THA',
    id: 172
  },
  {
    name: 'Timor-Leste',
    symbol: 'TLS',
    id: 173
  },
  {
    name: 'Togo',
    symbol: 'TGO',
    id: 174
  },
  {
    name: 'Tonga',
    symbol: 'TON',
    id: 175
  },
  {
    name: 'Trinidad and Tobago',
    symbol: 'TTO',
    id: 176
  },
  {
    name: 'Tunisia',
    symbol: 'TUN',
    id: 177
  },
  {
    name: 'Turkey',
    symbol: 'TUR',
    id: 178
  },
  {
    name: 'Turkmenistan',
    symbol: 'TKM',
    id: 179
  },
  {
    name: 'Tuvalu',
    symbol: 'TUV',
    id: 180
  },
  {
    name: 'Uganda',
    symbol: 'UGA',
    id: 181
  },
  {
    name: 'Ukraine',
    symbol: 'UKR',
    id: 182
  },
  {
    name: 'United Arab Emirates',
    symbol: 'ARE',
    id: 183
  },
  {
    name: 'United Kingdom',
    symbol: 'GBR',
    id: 184
  },
  {
    name: 'United States',
    symbol: 'USA',
    id: 185
  },
  {
    name: 'Uruguay',
    symbol: 'URY',
    id: 186
  },
  {
    name: 'Uzbekistan',
    symbol: 'UZB',
    id: 187
  },
  {
    name: 'Vanuatu',
    symbol: 'VUT',
    id: 188
  },
  {
    name: 'Vatican City',
    symbol: 'VAT',
    id: 189
  },
  {
    name: 'Venezuela',
    symbol: 'VEN',
    id: 190
  },
  {
    name: 'Vietnam',
    symbol: 'VNM',
    id: 191
  },
  {
    name: 'Yemen',
    symbol: 'YEM',
    id: 192
  },
  {
    name: 'Zambia',
    symbol: 'ZMB',
    id: 193
  },
  {
    name: 'Zimbabwe',
    symbol: 'ZWE',
    id: 194
  }
]

module.exports = countryCurencies
