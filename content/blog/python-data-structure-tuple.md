---
title: Estructura de datos Tuple
description: Las tuplas en Python son un tipo o estructura de datos que permite almacenar datos de una manera muy parecida a las listas, con la salvedad de que son inmutables.
slug: python-data-structure-tuple
img: python-default.jpg
tags: python, programacion, estructura de datos
author: victor hugo
iauthor: "https://lh3.googleusercontent.com/ogw/AOh-ky1WsKqyZAiMN43FUFUKq2KaBlr6gK4JXgJtrIbnjg=s32-c-mo"
created: "2022-11-16T14:30:00.007Z"
---

# Tupla (tuple)

<p>Las tuplas en Python o tuples son muy similares a las listas, pero con dos diferencias. Son inmutables, lo que significa que no pueden ser modificadas una vez declaradas, y en vez de inicializarse con corchetes se hace con (). Dependiendo de lo que queramos hacer, las tuplas pueden ser más rápidas.</p>

## Crear tupla Python

<p>Las tuplas en Python o <span class="highlight">tuples</span> son muy similares a las listas, pero con dos diferencias. Son <b class="bolder">inmutables</b>, lo que significa que no pueden ser modificadas una vez declaradas, y en vez de inicializarse con corchetes se hace con <span class="highlight">()</span>. Dependiendo de lo que queramos hacer, <b class="bolder">las tuplas pueden ser más rápidas</b>.</p>

```python
tupla = (1, 2, 3)
print(tupla) #(1, 2, 3)
```

<p>También pueden declararse sin <span class="highlight">()</span>, separando por <span class="highlight">,</span> todos sus elementos.</p>

```python
tupla = 1, 2, 3
print(type(tupla)) #<class 'tuple'>
print(tupla)       #(1, 2, 3)
```

## Operaciones con tuplas

<p>Como hemos comentado, las tuplas son tipos <b class="bolder">inmutables</b>, lo que significa que una vez asignado su valor, no puede ser modificado. Si se intenta, tendremos un <span class="highlight">TypeError</span>.</p>

```python
tupla = (1, 2, 3)
#tupla[0] = 5 # Error! TypeError
```

<p>Al igual que las listas, las tuplas también pueden ser anidadas.</p>

```python
tupla = 1, 2, ('a', 'b'), 3
print(tupla)       #(1, 2, ('a', 'b'), 3)
print(tupla[2][0]) #a
```

<p>Y también es posible convertir una lista en tupla haciendo uso de al función <span class="highlight">tuple()</span>.</p>

```python
lista = [1, 2, 3]
tupla = tuple(lista)
print(type(tupla)) #<class 'tuple'>
print(tupla)       #(1, 2, 3)
```

<p>Se puede iterar una tupla de la misma forma que se hacía con las listas.</p>

```python
tupla = [1, 2, 3]
for t in tupla:
    print(t) #1, 2, 3
```

<p>Y se puede también asignar el valor de una tupla con n elementos a n variables.</p>

```python
l = (1, 2, 3)
x, y, z = l
print(x, y, z) #1 2 3
```

<p>Aunque tal vez no tenga mucho sentido a nivel práctico, es posible crear una tupla de un solo elemento. Para ello debes usar <span class="highlight">,</span> antes del paréntesis, porque de lo contrario <span class="highlight">(2)</span> sería interpretado como int.</p>

```python
tupla = (2,)
print(type(tupla)) #<class 'tuple'>
```

## Métodos tuplas

<p><span class="highlight">count(<obj>)</span></p>
<p>El método <span class="highlight">count()</span> cuenta el número de veces que el objeto pasado como parámetro se ha encontrado en la lista.</p>

```python
l = [1, 1, 1, 3, 5]
print(l.count(1)) #3
```

<p><span class="highlight">index(<obj>[,index])</span></p>
<p>El método <span class="highlight">index()</span> busca el objeto que se le pasa como parámetro y devuelve el índice en el que se ha encontrado.</p>

```python
l = [7, 7, 7, 3, 5]
print(l.index(5)) #4
```

<p>En el caso de no encontrarse, se devuelve un ValueError.</p>

```python
l = [7, 7, 7, 3, 5]
#print(l.index(35)) #Error! ValueError
```

<p>El método <span class="highlight">index()</span> también acepta un segundo parámetro opcional, que indica a partir de que índice empezar a buscar el objeto.</p>

```python
l = [7, 7, 7, 3, 5]
print(l.index(7, 2)) #2
```
