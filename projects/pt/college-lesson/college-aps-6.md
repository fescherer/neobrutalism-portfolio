---
slug: college-aps-6
type: college-lesson
tags: [linux]
date: '2021-10-01T10:00:00.000Z'
title: 'APS 6 | Sistema de gerenciamento restaurante'
github: https://github.com/ofelipescherer/college-projects/tree/main/aps/aps-06-sistemas-operacionais
figma: ''
site: ''
image: https://user-images.githubusercontent.com/62115215/235326317-85bfcceb-64c1-4206-8beb-01df92cce70e.png
description: Sistema de gerenciamento de um restaurante, backup e relatório de dia e mês.
images: [
  https://user-images.githubusercontent.com/62115215/218895463-8f3e54ea-268f-4c6b-90a5-f118070eb61e.png,
  https://user-images.githubusercontent.com/62115215/218895477-5997cd3a-5579-4df1-83ee-b09ad3ca738d.png,
  https://user-images.githubusercontent.com/62115215/218895481-f9ad1b7a-163f-4286-9bbd-1cc0f1594993.png,
  https://user-images.githubusercontent.com/62115215/218895483-0de5eff9-0f3a-4dce-809b-abc3351e112c.png
]
---

# Sistema de gerenciamento restaurante | APS 6

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


