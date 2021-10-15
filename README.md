# delacon-nuxt
A wrapper of Delacon's call tracking script to swap number immediately when `/?gclid=xx` is detected in the address bar.

## Setup

1. Add `delacon-nuxt` dependency to your project

```
npm install delacon-nuxt
```
or
```
yarn add delacon-nuxt
```

2. Add `delacon-nuxt` to the `modules` section of `nuxt.config.js`
```
{
    modules: [
        ['delacon-nuxt', {
            mid: 598,
            cid: ['xxxxx']
        }]
    ]
}
```

## Options
### `mid` (required)
The MID provided by Delacon
- Type: `Integer`

### `cid` (required)
The CID provided by Delacon.
- Type: `[]`


## License
[MIT License](./LICENSE)

Copyright (c) Juno W.