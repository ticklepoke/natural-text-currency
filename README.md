# Nautral Text Currency

Converting currency values in natural text to well typed values in Typescript. There are many ways to represent monetary values in natural text which are often specific to local contexts. This project attempts to parse monetary values using parser combinators.

This project is specific to Singapore.

Try the demo [here](https://ticklepoke.github.io/natural-text-currency-ui/).

## Usage

### Installation

```sh
yarn add @ticklepoke/natural-text-currency
```

```ts
import { currencyParser } from '@ticklepoke/natural-text-currency';

const Money = currencyParser.tryParse('$100');
```

`Money` has the following structure:

```ts
class Money {
    this.value: string;
    this.currency: string; // "SGD" for now
}
```

## Supported Input

Some of the supported input is listed here. Please raise a ticket if you find an unsupported input format.

| Input                  | Output: `Money.value` |
| ---------------------- | --------------------- |
| $1000                  | 1000                  |
| 100SGD                 | 100                   |
| 100k SGD               | 100000                |
| $100k                  | 100000                |
| 10k sgd                | 10000                 |
| 10 k singapore dollars | 10000                 |
| 10 k cents             | 100                   |
| 10k dollars            | 10000                 |
| 0.01 cents             | 0.0001                |

## Comparison with NLP

When parsing free form text to well typed data, an extremely popular alternative to parser combinators is NLP. Here is a brief comparison between the two techniques.

- Compared to non-deterministic NLP techniques, parser combinators are completely deterministic as the developer is able to specify the exact semantic structure an input text should have.
- The behaviour of parser combinators can be reproduced with absolute confidence.
- Parser combinators do not require datasets to be trained since their internal structure is entirely programmtic.
- Parser combinators are however limited to a specific DSL whereas NLP techniques can capture a wider range of free form text.
