# Incorrect use of $regex in MongoDB query
This repository demonstrates an example of an uncommon error in MongoDB queries. Specifically, it showcases the incorrect use of the `$regex` operator for string matching.

## Problem
The code attempts to query a collection for a specific name using the `$regex` operator, but instead of providing a regular expression object, it passes a plain string. This leads to unexpected results, as the query does not interpret the input as a regular expression, but as a literal string.

## Solution
The solution is to use the `$regex` operator correctly by passing a regular expression object. The regular expression should match the required pattern in the string.