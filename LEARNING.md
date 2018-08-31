# Overview

> this explanation assume you have created your vue project using the vue-cli 3.0

A vue-cli-plugin allow you to extend your existing project so you do not have to copy/paste all the things normally you do in an app.

### Example

Let's assume you have a new idea for an app and it needs a login page. The second assumption is you have already did this like all the time in all your apps and sure you can easily copy/paste the login page from other app to the new one, but what about if you can setup the whole login page from the terminal in one command.

Something like:

```bash
vue add my-awesome-login
```

It can print some questions like

```bash
What will be the title of the login form? My New App - Login
What will be the route of the login form? /my-new-app-login
```

And then install your login component, create the files with all the necessary work to have your awesome login component working in the new app.

Would not that be great?

### [vue-cli-plugins](https://cli.vuejs.org/guide/plugins-and-presets.html#plugins)
