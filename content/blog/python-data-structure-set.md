---
title: Estructura de datos Set
description: Los sets en Python son una estructura de datos usadas para almacenar elementos de una manera similar a las listas, pero con ciertas diferencias.
slug: python-data-structure-set
img: python-default.jpg
tags: python, programacion, estructura de datos
author: victor hugo
iauthor: "https://lh3.googleusercontent.com/ogw/AOh-ky1WsKqyZAiMN43FUFUKq2KaBlr6gK4JXgJtrIbnjg=s32-c-mo"
created: "2022-11-16T12:25:38.007Z"
---

# Set

<p>Los sets en Python son una estructura de datos usadas para almacenar elementos de una manera similar a las listas, pero con ciertas diferencias.</p>

## Crear set Python

Los <span class="highlight">set</span> en Python son un tipo que permite almacenar varios elementos y acceder a ellos de una forma muy <b class="bolder">similar a las listas</b> pero con ciertas diferencias:

<ul>
  <li>Los elementos de un set son <b class="bolder">únicos</b>, lo que significa que no puede haber elementos duplicados.</li>
  <li>Los set son <b class="bolder">desordenados</b>, lo que significa que no mantienen el orden de cuando son declarados.</li>
  <li>Sus elementos deben ser <b class="bolder">inmutables</b></li>
</ul>

<p>Para entender mejor los <span class="highlight">sets</span>, es necesario entender cirtos conceptos matemáticos como la <b class="bolder">teoría de los conjuntos</b>.</p>
<p>Para <b class="bolder">crear</b> un set en Python se puede hacer con un <span class="highlight">set()</span> y pasando como entrada cualquier tipo iterable, como puede ser una lista. Se puede ver como a pesar de pasar elementos duplicados como dos <span class="highlight">8</span> y en un orden determinado, al imprimir el set no conserva ese orden y los duplicados se han elimiando </p>

```python
s = set([5, 4, 6, 8, 8, 1])
print(s)       #{1, 4, 5, 6, 8}
print(type(s)) #<class 'set'>
```

<p>Se puede hacer lo mismo haciendo uso de <span class="highlight">{}</span> y sin usar la palabra <span class="highlight">set()</span> como se muestra a continuación.</p>

```python
s = {5, 4, 6, 8, 8, 1}
print(s)       #{1, 4, 5, 6, 8}
print(type(s)) #<class 'set'>
```

## Operaciones con sets

<p>A diferencia de las listas, en los set no podemos modificar un elemento a través de un índice. Si lo intentamos, tendremos un <span class="highlight">TypeError</span>.</p>

```python
s = set([5, 6, 7, 8])
#s[0] = 3 #Error! TypeError
```

<p>Lis elementos de un <span class="highlight">set</span> deben ser <b class="bolder">inmutables</b>, por lo que un elemento de un <span class="highlight">set</span> no puede ser ni un diccionario ni una lista. Si lo intenamos tendremos un <span class="highlight">TypeError</span></p>

```python
lista = ["Perú", "Argentina"]
#s = set(["México", "España", lista]) #Error! TypeError
```

<p>Los <span class="highlight">sets</span> se pueden iterar de la misma forma que las listas.</p>

```python
s = set([5, 6, 7, 8])
for ss in s:
    print(ss) #8, 5, 6, 7
```

<p>La función <span class="highlight">len()</span> podemos saber la longitud total del <span class="highlight">set</span>. Como ya hemos indicado, los duplicados son eliminados.</p>

```python
s = set([1, 2, 2, 3, 4])
print(len(s)) #4
```

<p>También podemos saber si un elemento está presente en un set con el operador <span class="highlight">in</span>. Si el valor existe en el set, devolverá un <span class="highlight">True</span>.</p>

```python
s = set(["Guitarra", "Bajo"])
print("Guitarra" in s) #True
```

<p>Los <span class="highlight">sets</span> tienen además diferentes funcionalidades, que se pueden aplicar en forma de operador o de método. Por ejemplo, el operador <span class="highlight">|</span> nos permite realizar la <b class="bolder">unión</b> de dos sets, lo que equivale a juntarlos. El equivalente es el método <span class="highlight">union()</span> que vemos a continuación</p>

```python
s1 = set([1, 2, 3])
s2 = set([3, 4, 5])
print(s1 | s2) #{1, 2, 3, 4, 5}
```

## Métodos sets

<p><span class="highlight">s.add(<elem>)</span></p>
<p>El método <span class="highlight">add()</span> permite añadir un elemento al <span class="highlight">set</span>.</p>

```python
l = set([1, 2])
l.add(3)
print(l) #{1, 2, 3}
```

<p><span class="highlight">s.remove(<elem>)</span></p>
<p>El método <span class="highlight">remove()</span> elimina el elemento que se pasa como parámetro. Si no se encuentra, se lanza la excepción KeyError.</p>

```python
s = set([1, 2])
s.remove(2)
print(s) #{1}
```

<p><span class="highlight">s.discard(<elem>)</span></p>
<p>El método <span class="highlight">discard()</span> es muy parecido al <span class="highlight">remove()</span>, borra el elemento que se pasa como parámetro, y si no se encuentra no hace nada.</p>

```python
s = set([1, 2])
s.discard(3)
print(s) #{1, 2}
```

<p><span class="highlight">s.pop()</span></p>
<p>El método <span class="highlight">pop()</span> elimina un elemento aleatorio del set.</p>

```python
s = set([1, 2])
s.pop()
print(s) #{2}
```

<p><span class="highlight">s.clear()</span></p>
<p>El método <span class="highlight">clear()</span> elimina todos los elementos de set.</p>

```python
s = set([1, 2])
s.clear()
print(s) #set()
```

## Otros

<p>Los sets cuentan con una gran cantidad de métodos que permiten realizar operaciones con dos o más, como la <b class="bolder">unión</b> o la <b class="bolder">intersección</b>.</p>
<p>Podemos calcular la <b class="bolder">unión</b> entre dos sets usando el método <span class="highlight">union()</span>. Esta operación representa la “mezcla” de ambos sets. Nótese que el método puede ser llamado con más parámetros de entrada, y su resultado será la unión de todos los sets.</p>

```python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1.union(s2)) #{1, 2, 3, 4, 5}
```

<p>También podemos calcular la <b class="bolder">intersección</b> entre dos o más set. Su resultado serán aquellos elementos que pertenecen a ambos sets.</p>

```python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1.intersection(s2)) #{3}
```

<p>Los set en Python tiene gran cantidad de métodos, por lo que lo dejaremos para otro capítulo, pero aquí os dejamos con un listado de ellos:</p>

<lu>
  <li>s1.union(s2[, s3 ...])</li>
  <li>s1.intersection(s2[, s3 ...])</li>
  <li>s1.difference(s2[, s3 ...])</li>
  <li>s1.symmetric_difference(s2)</li>
  <li>s1.isdisjoint(s2)</li>
  <li>s1.issubset(s2)</li>
  <li>s1.issuperset(s2)</li>
  <li>s1.update(s2[, s3 ...])</li>
  <li>s1.intersection_update(s2[, s3 ...])</li>
  <li>s1.difference_update(s2[, s3 ...])</li>
  <li>s1.symmetric_difference_update(s2)</li>
</lu>
