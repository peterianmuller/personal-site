#lang racket


;;Why pretty printing is helpful to see the operators and operands.



(+ (* 3
      (+ (* 2 4)
         (+ 3 5)))
   (+ (- 10 7)
      6))
;;The plus sign is the operator and it's operands are the compound expressions that starts with (*... and (+....
One level more nested into the top nested expression , the (+ is the operator and the operands are the compound expressions (* 2 4) and (+ 3 5).
Under this expression, the operator (+  (- 10 7) and 6 are the operands.
Note that we could align more simple expressions this way as well:



;;Above, the operator * takes the operands 4 and 5. Let's bulid this up. We'll see how we can keep arranging the operands vertically
;;in respect to the operators.


(+ 48
   9)

(+ (* 3
      16)
   9)

;;One more step:

(+ (* 3
      (+ 8 8))
   (+ 3
      6))

;;And finally:

(+ (* 3
      (+ (* 2 4)
         (+ 3 5)))
   (+ (- 10 7)
      6))

;;All the while the operators are aligned vertically. All of these values can be resolved to a value.