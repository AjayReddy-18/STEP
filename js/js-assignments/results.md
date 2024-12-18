
# MATRIX MULTIPLICATION

| STATUS | MATRIX A  |   MATRIX B   |  EXPECTED   |   ACTUAL    |
|:------:|:---------:|:------------:|:-----------:|:-----------:|
|   ✅   |     1     |      2       |      2      |      2      |
|   ✅   |    1,2    |    1,2,3     |     NaN     |     NaN     |
|   ✅   |           |              |     NaN     |     NaN     |
|   ✅   |           |              |             |             |
|   ✅   |    0,0    |     0,0      |   0,0,0,0   |   0,0,0,0   |
|   ✅   |    1,2    |     2,1      |      4      |      4      |
|   ✅   |   1,2,3   |    2,3,4     |     20      |     20      |
|   ✅   |1,2,3,4,5,6|7,8,9,10,11,12|58,64,139,154|58,64,139,154|
|   ✅   |    1,2    |      1       |     NaN     |     NaN     |
|   ✅   |1,2,3,4,5,6|     1,2      |   5,11,17   |   5,11,17   |


# NUMBER TO WORDS

| STATUS |   NUMBER   |                                                          EXPECTED                                                          |                                                           ACTUAL                                                           |
|:------:|:----------:|:--------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|
|   ✅   |     0      |                                                            zero                                                            |                                                            zero                                                            |
|   ✅   |     1      |                                                            one                                                             |                                                            one                                                             |
|   ✅   |     12     |                                                           twelve                                                           |                                                           twelve                                                           |
|   ✅   |     13     |                                                          thirteen                                                          |                                                          thirteen                                                          |
|   ✅   |     40     |                                                           forty                                                            |                                                           forty                                                            |
|   ✅   |    123     |                                                  one hundred twenty three                                                  |                                                  one hundred twenty three                                                  |
|   ✅   |   23456    |                                        twenty three thousand four hundred fifty six                                        |                                        twenty three thousand four hundred fifty six                                        |
|   ✅   |   100001   |                                                  one hundred thousand one                                                  |                                                  one hundred thousand one                                                  |
|   ✅   |   200001   |                                                  two hundred thousand one                                                  |                                                  two hundred thousand one                                                  |
|   ✅   |    1111    |                                              one thousand one hundred eleven                                               |                                              one thousand one hundred eleven                                               |
|   ✅   |   80001    |                                                    eighty thousand one                                                     |                                                    eighty thousand one                                                     |
|   ✅   |  1000000   |                                                        one million                                                         |                                                        one million                                                         |
|   ✅   |  1000001   |                                                      one million one                                                       |                                                      one million one                                                       |
|   ✅   | 100000000  |                                                    one hundred million                                                     |                                                    one hundred million                                                     |
|   ✅   | 987654321  |                 nine hundred eighty seven million six hundred fifty four thousand three hundred twenty one                 |                 nine hundred eighty seven million six hundred fifty four thousand three hundred twenty one                 |
|   ✅   |999999999999|nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine|nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine|


# POWER SET

| STATUS | ARRAY |                            EXPECTED                            |                             ACTUAL                             |
|:------:|:-----:|:--------------------------------------------------------------:|:--------------------------------------------------------------:|
|   ✅   |       |                                                                |                                                                |
|   ✅   |   1   |                               ,1                               |                               ,1                               |
|   ✅   | 1,2,3 |                    ,3,2,2,3,1,1,3,1,2,1,2,3                    |                    ,3,2,2,3,1,1,3,1,2,1,2,3                    |
|   ✅   |  1,2  |                            ,2,1,1,2                            |                            ,2,1,1,2                            |
|   ✅   |1,2,3,4|,4,3,3,4,2,2,4,2,3,2,3,4,1,1,4,1,3,1,3,4,1,2,1,2,4,1,2,3,1,2,3,4|,4,3,3,4,2,2,4,2,3,2,3,4,1,1,4,1,3,1,3,4,1,2,1,2,4,1,2,3,1,2,3,4|

