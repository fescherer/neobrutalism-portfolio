---
slug: college-aps-8
type: college-lesson
tags: [backend, fast-api]
date: '2022-10-01T10:00:00.000Z'
title: 'APS 8 | Sistema de redundância'
github: https://github.com/ofelipescherer/college-projects/tree/main/aps/aps-08-sistemas-distribuidos
figma: ''
site: ''
image: https://user-images.githubusercontent.com/62115215/218896385-40b4fcfc-5e6c-4cf4-9672-d56a970b047c.png
description: Projeto APS do 8º semestre de Ciência da Computação
images: [
  https://user-images.githubusercontent.com/62115215/218896385-40b4fcfc-5e6c-4cf4-9672-d56a970b047c.png,
  https://user-images.githubusercontent.com/62115215/218896388-2eca63eb-485a-4fbc-8fcb-7d6900632f0b.png,
  https://user-images.githubusercontent.com/62115215/218896389-fd759002-7e9c-447f-a438-4e777f982a0d.png
]

---

# Sistema de redundância | APS 8

## Introdução

APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do oitavo semestre das minhas aulas de Ciência da Computação.

Naquele semestre, a matéria principal estudada, foi sistemas distribuidos. Como era o último semestre o professor deixou bem claro logo no inicio do semestre qual seria o trabalho. Deveria ser um sistema que tivesse redundância completa, ou seja, por exemplo um site em que se um dos servidores fosse desligado, o site deveria continuar funcionando.

## Sobre

O projeto foi feito utilizando [HaProxy](https://www.haproxy.org) como Load Balancer, [Docker](https://www.docker.com) para rodar o sistema (Foi usada uma simples API ao invés de um site inteiro, mas o funcionamento de redundância seria o mesmo) e o [K6](https://k6.io) para testar a API feita com [FastAPI](https://fastapi.tiangolo.com).

