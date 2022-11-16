---
title: Introducción a Pinia y Vue 3
description: Con Vue 3 y su Composition API, no tenemos nueva versión de Vuex sino su reemplazo, Pinia. En este DevTip aprenderás a dar los primeros pasos con Pinia.
slug: vue-store-pinia
img: vue-store-pinia.jpg
tags: vue, framework, javascript
author: victor hugo
iauthor: "https://lh3.googleusercontent.com/ogw/AOh-ky1WsKqyZAiMN43FUFUKq2KaBlr6gK4JXgJtrIbnjg=s32-c-mo"
created: "2022-11-17T08:00:00.007Z"
---

## ¿Qué es Pinia?

<p>Pinia elimina gran parte de la complejidad de Vuex en varias áreas:</p>
<ul>
  <li>Ya no existen módulos como tal, sino diferentes stores (como las hojas de una piña 🍍) que se pueden comunicar facilmente.</li>
  <li>No existen mutaciones porque no son necesarias para llevar el control de los cambios de estado (con la API de reactividad de Vue 3 expuesta, podemos mutar state desde cualquier lugar).</li>
  <li>Es mucho más sencillo importar nuestras stores en cualquier componente o composable.</li>
  <li>Mejor soporte (por defecto) para TypeScript.</li>
  <li>Soporte nativo para Vue DevTools 🔥.</li>
  <li>Extremadamente ligera: alrededor de 1.5kb.</li>
</ul>
<p>Documentación <a class="link-to" href="https://pinia.vuejs.org/">oficial de Pinia</a>.</p>

## Instalación de Pinia

<p>Lo primero, por supuesto, es instalar Pinia y añadirla a nuestro setup. Así que <span class="highlight">yarn add pinia</span> y luego lo configuramos:</p>

```javascript
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
```

## Crear una store con Pinia

Ahora podemos crear nuestra store, por ejemplo, en <span class="highlight">stores/counter.js</span>. Aquí haremos uso del método de Pinia <span class="highlight">defineStore</span> para crear una nueva store con al menos la propiedad options para el estado, una acción <span class="highlight">increment</span> para mutarla y un getter <span class="highlight">totalClicks</span> que nos devolverá un valor computado.

```javascript
// stores/counter.js

import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    options: {
      a: 0,
      b: 0,
      c: 0,
    },
  }),
  actions: {
    increment(option) {
      this.options[option]++;
    },
  },
  getters: {
    totalClicks() {
      return Object.values(this.options).reduce((total, current) => {
        return total + current;
      }, 0);
    },
  },
});
```

## Utilizando una store creada con Pinia

<p>Para usar una store creada con Pinia solo tenemos que importarla en cualquier componente o composable Vue 3, así que vamos a importar <span class="highlight">useCounterStore</span> para luego ejecutar la función que nos devolverá la store.</p>
<p>Guardamos todo ello en la constante <span class="highlight">store</span>.</p>

```javascript
<!-- Component.vue -->

<script setup>
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();
</script>
```

<p>Ahora podemos hacer uso de sus propiedades: estado, acciones y getters. Al usar la sintaxis <span class="highlight">script setup</span> tenemos acceso directo a todo ello en el template.</p>
<p>Fíjate como interpolamos el getter <span class="highlight">totalCkicks</span> (reactivo, por supuesto), mostramos el valor de cada propiedad de <span class="highlight">options</span> con <span class="highlight">store.options[option]</span> y llamamos a la acción <span class="highlight">store.increment[option]</span> como si fuera un método más (lo es).</p>

```javascript
<!-- Component.vue -->

<template>
  <h2>Total Clics: {{ store.totalClicks }}</h2>

  <div class="card">
    <button type="button" @click="store.increment('a')">
      Option A clicked {{ store.options['a'] }} times
    </button>

    <button type="button" @click="store.delayedIncrement('b')">
      Option B clicked {{ store.options['b'] }} times
    </button>

    <button type="button" @click="store.increment('c')">
      Option C clicked {{ store.options['c'] }} times
    </button>
  </div>
</template>
```

## Acciones asíncronas con Pinia

<p>Igual que con Vuex, las acciones de Pinia también puede ser asíncronas. Imagina un caso en la que realizas una petición HTTP y tienes que esperar a obtener la respuesta para actualizar el estado o llamar a otras acciones.</p>
<p>Vamos a crear <span class="highlight">delayedIncrement</span> para que espere una cantidad de milisegundos antes de actualizar <span class="highlight">options</span>.</p>
<p>Tan sencillo como esto:</p>

```javascript
// stores/counter.js

const wait = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const useCounterStore = defineStore('counter', {
  ...
  actions: {
    ...
	    async delayedIncrement(option) {
	    await wait();
	    this.options[option]++;
    },
  },
	...
});
```

## Desestructurar Pinia con storeToRefs

<p>Igual que con la API <span class="highlight">reactive</span> de Vue 3, no podemos desestructurar los valores resultantes al instanciar nuestra store. Esto no funcionará:</p>

```javascript
const store = useCounterStore();
const { options, increment, totalClicks } = useCounterStore(); // ❌
```

<p>Para evitar perder la reactividad en tu store usa el helper de Pinia <span class="highlight">storeToRefs:</span></p>

```javascript
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { options, increment, totalClicks } = storeToRefs(store); // ✅
```
