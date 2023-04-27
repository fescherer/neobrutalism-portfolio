---
id: 6
slug: college-aps-6
type: college-lesson
tags: [java]
date: '2021-01-01T10:00:00.000Z'
title: APS 6 Sistemas Operacionais
github: https://github.com/ofelipescherer/APS-4Semestre
site: alura-quiz.ofelipescherer.vercel.app
image: https://user-images.githubusercontent.com/62115215/208798426-0b528230-530f-446f-9c1e-04df1b18835d.png
description: Projeto APS do 6º semestre de Ciência da Computação
images:
  [
    'https://user-images.githubusercontent.com/62115215/219414481-5e742828-8b76-45ef-8d0a-f98fdfba2aa1.gif',
    'https://user-images.githubusercontent.com/62115215/219412486-cc05d257-6e7a-4c3f-b0c7-9ea58169fbeb.png',
    'https://user-images.githubusercontent.com/62115215/219412526-7d154ee9-a50a-42cc-bc03-d4a1ed9bb78c.png',
    'https://user-images.githubusercontent.com/62115215/219412571-adeed80b-7312-42d7-8168-c9fedda435c3.png',
    'https://user-images.githubusercontent.com/62115215/219412604-9b51845a-e2ff-47ab-b455-6e5385436bb9.png',
    'https://user-images.githubusercontent.com/62115215/219412638-af593bc1-0bd8-41e2-b9d6-012aee99146d.png',
    'https://user-images.githubusercontent.com/62115215/219412678-a7654024-8cef-41e2-a0cd-011ab7daa3a3.png',
    'https://user-images.githubusercontent.com/62115215/219412706-125e60de-96f6-4af6-8afb-de8ad085b0ff.png'
  ]
---

# APS 6º Semestre

## Introdução

APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do sexto semestre das minhas aulas de Ciência da Computação.

Naquele semestre, a matéria principal estudada foi sistemas operacionais, por isso, o projeto deveria ser criar uma simulação de como um sistema de backup em Linux funcionaria utilizando 3 ou mais máquinas virtuais, elas deveriam estar conectadas, assim fazendo redundância de backup dos arquivos

## Sobre

Esse é um projeto desenvolvido para fazer backup de comandas de um restaurante. Nele temos 3 máquinas virtuais (Caixa, Server e Administrador), e eles estão conectados na mesma rede.

Como é uma simulação, o `Caixa` tem um script em Python que gera comandas aleatórias em tempos aleatórios entre 12h e 15h (Possível horário de funcionamento do caixa).

Entre 15h e 15h10, será gerado um backup diário e mandado para o server

Às 15h15 será um relatório das comandas e mandado para o servidor

Entre 15h20 e 15h25, será feito um relatório do que aconteceu no dia para a máquina administrador

Cada máquina tem um firewall cadastrado, por isso, o caixa não consegue se comunicar com o administrador
Além disso, um proxy configurado baseado no papel de cada máquina

## Gifs, Imagens e Vídeos

