const kangaroo = (x1, v1, x2, v2) => {
  return v2 < v1 && (x2 - x1) % (v1 - v2) == 0;
};

module.exports = kangaroo;

/**
 * * y=mx+c
 *
 * ! 1 case
 * ? 0 3 4 2    true
 * * y=3x       0   3     6   9     12      15
 * * y=2x+4     4   6     8   10    12
 *
 * ? 3x=2x+4  =>  x=4
 *
 * ! 2 case
 * ? 0 2 5 3    false
 * * y=2x       0   2    4   6     8   10
 * * y=3x+5     5   8    11  14   17    20
 *
 * ? 2x=3x+5    =>   x=-5
 */
