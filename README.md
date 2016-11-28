# deku-element-select

> A Select component for Deku with element() syntax

This component was inspired by another [Select component](github.com/gillstrom/deku-select) for [Deku](https://github.com/anthonyshort/deku)


## Install

```
npm install deku-element-select --save
```


## Usage

```js
import Select from 'deku-element-select';

const options = [{
    label: 'Denver',
    value: 'denver'
}, {
    active: true,
    label: 'Manitowoc',
    value: 'manitowoc'
}, {
    disabled: true,
    label: 'San Diego',
    value: 'san-diego'
}, {
    label: 'Bishop',
    value: 'bishop'
}];

const onChange = val => {
    console.log(val);
};

element(Select, { options, onChange });
```


## License
Copyright (c) 2016, LOVATA

Written by Aleksandra Shinkevich (https://github.com/neesoglasnaja)

For licensing, see LICENSE.md