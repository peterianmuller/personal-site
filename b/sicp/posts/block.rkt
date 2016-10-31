#lang racket

We've looked at incremental construction of of our square root procedure by using various auxilar procedures toegether
to accomplish the larger task of finding the square root of a number x.

However our current incarnation of sqrt is a smattering of auxiliar procedures, some of which really might only be relevant
to sqrt.

(define (square x)
  (* x x))

(define (sqrt-iter guess x)
  (if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x) x)))

(define (improve guess x)
  (average guess (/ x guess)))


(define (average x y)
  (/ (+ x y) 2))


(define (good-enough? guess x)
  ( < (abs ( - (square guess) x)) 0.001))


(define (sqrt x)
  (sqrt-iter 1.0 x))

(sqrt 5)


However our current incarnation of sqrt is a smattering of auxiliar procedures, some of which really might only be relevant
to sqrt. Let's say we have another program that needs to use a different procedure to perform successive approximations.
Becuase we are perfoming "procedural epistemology", we might want to call our other successive approximation
procedure good-enough? We can't have a single name point to two distinct procedures (38). In order to avoid
this pollution of the enviornemt with repeated names of distinct procedures, we can define procedures relevant to sqrt
within the body of sqrt, thereby binding these names to the body of sqrt. We can thus have another function that requires
a different good-enough? (such as cube-root) that is bound to that function. Each good-enough? should thus not know
about each other yet co-exist.


(define (sqrt-block x)
  (define  (good-enough? guess x)
    (< (abs (- (square guess) x)) 0.001))
  (define (improve guess x) (average guess (/ x guess)))
  (define (sqrt-iter guess x)
    (if (good-enough? guess x)
        guess
        (sqrt-iter (improve guess x) x)))
  (sqrt-iter 1.0 x))
(sqrt-block 5)


Above, x is bound to the definition of sqrt. Also, because we're using bracket structure, the procedures
defind within sqrt good-enough?, improve, and sqrt-iter are all bound to the definition of sqrt.

"Since x is bound in the definition of sqrt, the procedures good-enough?, improve, and sqrt-iter, which are defined
internally are in the scope of x. Thus it is not necessary to pass x explicetly to each of these procedures. Instead,
we allow x to be a free variable in the internal definitions as shown below" (39).

For the internal definitions, x is a free variable, thus a value that is determined elsewhere, as abs and square are. In this case, x is defined
as the formal paramter for the parent function, but in all places in scope is set to that value. We don't
ever want to change x from the value set in formal parameters of sqrt.

So we can remove x from the parameters of the internal functions. good-enough?, improve, sqrt-iter all can
reason about x without x being declared as a formal parameter to those procedures.


This process is called "lexical scoping" (39). All internal procedures can reason about thier parent's formal parameters. In fact, those
formal parameters become free variables, set just as primitive operators, square, abs etc. In this case x is a bound variable when passed
into sqrt, but then becomes a free variable for the invocations of the sub-procedures that are within the body of sqrt.


(define (sqrt-lex x)
  (define (good-enough? guess)
    (< ( abs (- (square guess) x)) 0.001))
  (define (improve guess)
    (average guess (/ x guess)))
  (define (sqrt-iter guess)
    (if (good-enough? guess)
        guess
        (sqrt-iter (improve guess))))
  (sqrt-iter 1.0))

(sqrt-lex 5)

(= (sqrt-block 5) (sqrt-lex))
;; #t






