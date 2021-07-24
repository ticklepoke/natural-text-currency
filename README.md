# Nautral Speech Currency

Converting currency values in natural speech to well typed values in Typescript. There are many ways to represent monetary values in natural speech which are often specific to local contexts. This project attempts to parse monetary values using parser combinators.

## Usage

### Installation

```sh
yarn add @ticklepoke/natural-text-currency
```

```ts
import { currencyParser } from '@ticklepoke/natural-text-currency';

const Money = currencyParser.tryParse('$100');
```

## Supported Input

## Comparison with NLP

When parsing free form text to well typed data, an extremely popular alternative to parser combinators is NLP. Here is a brief comparison between the two techniques.

- Compared to non-deterministic NLP techniques, parser combinators are completely deterministic as the developer is able to specify the exact semantic structure an input text should have.
- The behaviour of parser combinators can be reproduced with absolute confidence.
- Parser combinators do not require datasets to be trained since their internal structure is entirely programmtic.
- Parser combinators are however limited to a specific DSL whereas NLP techniques can capture a wider range of free form text.
