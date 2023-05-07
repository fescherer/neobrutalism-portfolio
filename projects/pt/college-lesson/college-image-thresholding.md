---
slug: college-image-thresholding
type: college-lesson
tags: [java]
date: '2021-01-01T10:00:00.000Z'
title: Limiarização de imagens
github: https://github.com/ofelipescherer/college-projects/tree/main/algorithm-thresholding
figma: ''
site: ''
image: https://user-images.githubusercontent.com/62115215/235332500-e3fd97b9-7d9a-4e2b-84bd-b3c0aa73010e.png
description: Projeto que contém diversos métodos pra testar a limiarização de imagens
images: [
  https://user-images.githubusercontent.com/62115215/236691953-8eeb04a5-93f1-4de6-9479-d40e1acd69c9.png,
  https://user-images.githubusercontent.com/62115215/236691965-4ee1de5b-9d2f-4701-ba16-8ef7574c55da.png,
  https://user-images.githubusercontent.com/62115215/236691976-14aeb920-b887-4956-b91a-40c54bebac29.png,
  https://user-images.githubusercontent.com/62115215/236691998-3251449e-0355-4b24-abd2-9236f86ab868.png,
  https://user-images.githubusercontent.com/62115215/236692002-bf575b7d-e39a-45f2-ba4d-39724c6e5c36.png,
  https://user-images.githubusercontent.com/62115215/236692009-2eac359d-2a91-4196-a491-42d9c1e8949d.png
]
---

# Thresholding Image

## Introdução

Esse projeto foi feito durante a aula de processamento de imagem. É um script em Python que realiza a limiarização de imagens.

## Sobre

Limiarização é transformar a imagem em binária. Uma imagem é composta por um conjunto de valores de cores, pode ser RGB por exemplo, ou seja se transformarmos esses valores em 0 ou o máximo 255, podemos ter uma imagem com somentes pixels pretos (255,255,255) ou brancos(0,0,0), a ideia do projeto é criar um algoritmo para saber diferenciar quando transformar o pixel em branco ou preto. Pode parecer simples, mas para gerar o valor de corte, tem muita matemática envolvida.
