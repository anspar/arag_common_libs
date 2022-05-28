# Arag Common Libs 

## Collection of frequently used libs for [Arag](https://github.com/anspar/arag) dapps.

![release](https://github.com/anspar/arag_common_libs/actions/workflows/release.yml/badge.svg?branch=main)


### Import 
1. In html file
```
    {{web_component "https://github.com/anspar/arag_common_libs/releases/download/<release-version>/build.html"}}
```
2. In arag.yml
```
    dependencies:
        - https://github.com/anspar/arag_common_libs/releases/download/<release-version>/build.html
```
#### OR
Download the `build.html` file and add it to the project with
```
    {{import_content "path/to/build.html"}}
```

### Included Libs

    jquery 3.6.0
    bootstrap@5.0.2
    fontawesome-free-6.1.1
    ethers-5



### Available Classes
`ar-btn-primary` | `ar-btn-secondary` | `ar-bg-light` | `ar-bg-dark` | `ar-text-light` | `ar-text-dark` | `ar-shadow` | `loading`

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
`<span class="ar-theme-switch"></span>`


## Ask question at [Discord](https://discord.gg/ENQfPEcrZJ)

[anspar.io](https://anspar.io)
