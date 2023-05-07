---
slug: college-lights-out
type: college-lesson
tags: [java]
date: '2021-03-01T10:00:00.000Z'
title: Lights Out
github: https://github.com/ofelipescherer/college-projects/tree/main/lights-out
figma: ''
site: ''
image: https://user-images.githubusercontent.com/62115215/235331961-e215158a-bafa-44b1-acbc-3bf0934c11e5.png
description: Lights Out é um jogo que precisa desligar todas as luzes de uma matriz, porém toda vez que aperta uma luz para desliga-la, as adjacentes acendem.
images: [
  https://user-images.githubusercontent.com/62115215/236691169-b3374c02-2a7d-462a-8da5-32a39e30888d.png,
  https://user-images.githubusercontent.com/62115215/236691199-70483455-154b-4f33-a86d-cdba7ee7fcea.png,
  https://user-images.githubusercontent.com/62115215/111791516-0a128f00-88a2-11eb-9a3a-a1c03833acc8.png
]
---

# Lights Out

## Introdução

Esse projeto foi feito na aula de inteligência artificial e simula a [busca no espaço de estados](https://www.ime.usp.br/~slago/IA-Busca.pdf), um método bem simples e rudimentar para encontrar a resposta que precisa que é basicamente pedindo para a máquina fazer todas as possibilidades até encontrar a resposta que precisa.

## Sobre

O projeto consiste em um sistema que resolve o jogo [***Light's Out***](https://en.wikipedia.org/wiki/Lights_Out_(game)). Nele há uma matriz de números (0-1) ou valores booleanos (true, false) em que ao tentar desligar um (clicando nele, trocando seu valor), os valores adjacentes desse número também trocarão de valor, o objetivo do jogo é desligar todos os números da matriz.
