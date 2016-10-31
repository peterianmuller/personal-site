#lang racket


(define(abs x)
  (cond ((> x 0) x)
        ((= x 0) 0)
        ((< x 0) (- x))))


(define (minus-two x)
  (cond ((> x 0) (- x 2))
        ((= x 0) x)
        ((< x 0) (- x))))

(define (minus-two-issue x)
  (cond ((> x 0) - x 8764)
        ((= x 0) x)
        ((< x 0) (- x))))

(minus-two-issue 10)
(minus-two-issue 500)

;above we saw the need to wrap expressions as consequents in parenthesis.

;applicative-order eval does evaluate arguemtns and hten apply operand.
;normal-order eval is when we first apply the operand to the arguments before evaluating arguments. It expands
;the procedure out completey.

(define (p) (p))

(define (test x y)
  (if (= x 0) 0 y))

;if we define our own procedure using if, the interpreter evaluate argments b4 getting to body of func
;when we use native sp. form if interpreter expands procedure completey. 






