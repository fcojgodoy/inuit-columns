
# inuit-columns
Simple columns helpers for Inuitcss framework.

## Installation

With npm

```shell
npm i inuit-columns -S
```

With bower

```shell
bower install inuit-columnss --save
```

You can download the latest version or checkout all the releases [here](https://github.com/fcojgodoy/inuit-columns/releases).

## Examples

It generate helper clasess, e.g.:

```sass
.u-columns-2
.u-columns-3
.u-columns-4
```

By default, it apply half of columns count on tablets and below. You
can change this below. Depends on Sass-mq.

By default, it apply simple columns until mobile. You
can change this below. Depends on Sass-mq.

If we’re using Sass-MQ, automatically generate responsive helpers for each of our
defined breakpoints, and give them a Responsive Suffix, e.g.:

```scss
.u-columns-2@mobile
.u-columns-3@tablet
```
You can imagine the other variations.

## Usage

You can import this plugin into a project sample code like this:

```scss
@import "node_modules/inuit-columns/inuit-columns.scss";
```

You can override settings with writing your custom definitions before import plugin.

A list of columns count that get generated as helper classes:

```scss
$inuit-columns-count-list: (
       2,
       3,
       4,
       6
) !default;
```

The utility apply half of columns count on tablets and below. If you desire more
control you can set it to false.
Depends on Sass-mq.

```scss
$inuit-columns-half-of-columns-count-on-tablet: true;
```

For the function 'apply half of columns count on tablets': type of Sass round:
ceil (rounds a number up to the next whole number) or
floor (rounds a number down to the previous whole number).

```scss
$inuit-columns-count-decrease-round-type: ceil;
```

The utility apply simple column until mobile. If you desire more
control you can set it to false.
Depends on Sass-mq.

```scss
$inuit-columns-simple-column-until-mobile: true;
```

Widths of gaps modifiers

```scss
$inuit-columns-gap-tiny:   5px !default;
$inuit-columns-gap-small:  10px !default;
$inuit-columns-gap-normal: 20px !default;
$inuit-columns-gap-large:  40px !default;
$inuit-columns-gap-huge:   60px !default;
```

Optionally we can use the Inuitcss global spacing units

```scss
$inuit-columns-activate-inuit-global-spacing-unit: false;
```

## Contributing

The contributions are very welcome.
