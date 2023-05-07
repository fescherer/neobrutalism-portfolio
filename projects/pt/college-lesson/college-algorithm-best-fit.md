---
slug: college-algorithm-best-fit
type: college-lesson
tags: [python, algorithm]
date: '2020-10-01T10:00:00.000Z'
title: Algoritmo Best Fit
github: https://github.com/ofelipescherer/college-projects/tree/main/algorithm-best-fit
figma: ''
site: ''
image: https://user-images.githubusercontent.com/62115215/235323706-c99b6e54-cfb7-4337-a146-158520af5f9e.png
description: Um algoritmo de demonstração do gerenciamento de memória baseado no Best Fit Algoritm.
images: [
  https://user-images.githubusercontent.com/62115215/235323706-c99b6e54-cfb7-4337-a146-158520af5f9e.png
]
---

# Best Fit Algorithm

## Introdução

Best fit foi um trabalho de faculdade feito na aula de sistemas operacionais

## Sobre

O algoritmo de best fit é relacionado com o gerenciamento de memória em um computador. Basicamente é um algoritmo que diz como os processos serão alocados na memória, ou seja, qual a regra de negócio que será usada para retirar e colocar eles, que é colocar um processo no menor espaço que é grande o suficiente para ele. Mais informações em [Wiki](https://en.wikipedia.org/wiki/Best-fit_bin_packing)

No caso esse projeto leva algumas coisas em consideração:
- É uma simulação e não uma implementação pronta para produção, apenas testes;
- A memória será representada por um conjunto de 100 elementos;
- Cada elemento representa o id do processo, com exceção do -1 que significa um espaço vago;
- Cada processo pode ter um valor de peso (tamanho) aleatório;
- O programa cria dois processos novos e excluí um (simbolizando que já foi utilizado);
- A alocação é feita a partir de verificações para encontrar o menor espaço grande o suficiente para aquele processo;
- A simulação para quando a memória fica lotada;
