# Arag Common Libs 

## Collection of frequently used libs for [Arag](https://github.com/anspar/arag) dapps.

![release](https://github.com/anspar/arag_common_libs/actions/workflows/release.yml/badge.svg?branch=main)


### Import 
In html file
```
    {{web_component "https://github.com/anspar/arag_common_libs/releases/download/<release-version>/build.html"}}
```
#### OR
Download the `build.html` file and add it to the project with
```
    {{import_content "path/to/build.html"}}
```

### Included Libs

    jquery 3.6.0
    bootstrap@5.0.2
    ethers-5



### Available Classes
`ar-btn-primary` | `ar-btn-secondary` | `ar-bg-light` | `ar-bg-dark` | `ar-text-light` | `ar-text-dark` | `ar-shadow` | `loading` | `pointer`  & many more

Check [css](static/css) folder for full list

### Available Colors
    --ar-dark: #1c2541;
    --ar-dark-dim: #3a506b1a;
    --ar-light: #fffffff9;
    --ar-light-dim: #ffffffa0;
    --ar-success: #a1c181;
    --ar-danger: #de3f4f;
    --ar-warning: #fcca46;
    --ar-primary: #5bc0be;
    --ar-secondary: #3a506b;


### Add theme switch
`<div class="ar-theme-switch" style="width: 30px;"></div>`

### Display messages to users

`showMsg("your message", "primary", 10)` // 10 sec

`showMsg("warning message", "warning", 60)` // 1 min

`showMsg("important message", "danger", null)` // user must dismiss it




## Ask question at [Discord](https://discord.gg/ENQfPEcrZJ)

[anspar.io](https://anspar.io)
