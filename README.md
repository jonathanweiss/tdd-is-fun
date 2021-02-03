# TDD is fun!

Workshop to explain why and how to use test driven development.

Our goal is to implement a function that converts an integer (which is a collection of arabic numerals) into a string that represent the Roman numerals.

This is a [good description](http://www.novaroma.org/via_romana/numbers.html) of Roman numerals in detail, but here's how it works in a nutshell:

These symbols represent numbers:

I = 1

V = 5

X = 10

L = 50

C = 100

D = 500

M = 1000

A symbol can be repeated to display a different number:

II = 2

III = 3

But any symbol can only be repeated three times.

To represent a 4, an "I" is placed before an "V", because a "smaller" symbol in front of a larger symbol means "subtraction"

IV = "V minus I" => 4

IX = "X minus I" => 9

XL = "L minus X" => 40

XCIX = "C minus X" plus "X minus I" => 99
