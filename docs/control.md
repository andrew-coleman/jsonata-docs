---
id: control
title: Creating multi-stage and conditional query logic
sidebar_label: Composite Queries
---

So far, we have introduced all the parts of the language that allow us to extract data from an input JSON document, combine the data using string and numeric operators, and format the structure of the output JSON document.  What follows are the parts that turn this into a Turing complete, functional programming language.

## Conditional expressions

If/then/else constructs can be written using the ternary operator "? :".

`predicate ? expr1 : expr2`

The expression `predicate` is evaluated.  If its effective boolean value (see definition) is `true` then `expr1` is evaluated and returned, otherwise `expr2` is evaluated and returned.

## Parenthesized expressions and blocks

Used to override the operator precedence rules.  E.g.

- `(5 + 3) * 4`

Used to compute complex expressions on a context value

- `Product.(Price * Quantity)` - both Price and Quantity are fields of the Product value

Used to support 'code blocks' - multiple expressions, separated by semicolons

`(expr1; expr2; expr3)`

Each expression in the block is evaluated _in sequential order_; the result of the last expression is returned from the block.

