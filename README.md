# Gerenciador de Ícones com Vite

Projeto criado com o objetivo de exemplificar um modelo de gerenciamento de ícones próprios em uma aplicação, baseado na importação em lote usando o servidor de desenvolvimento Vite.

## Descrição

Esse modelo de gerenciamento de ícones, utiliza o recurso [`import.meta.glob`](https://vitejs.dev/guide/features#glob-import) do vite que importa arquivos em lote, para simplificar a importação de ícones para uma aplicação que utiliza ícones próprios, como arquivos SVG, importando uma lista chave-valor, onde a chave é o caminho para o arquivo, e o valor uma função de importação. Usando isso, é possível tratar a lista para que a chave seja somente o nome do arquivo, e o valor se mantenha o mesmo.
Após esse tratamento, é possível usar recursos da linguagem utilizada, para importar o recurso de forma assíncrona, como neste exemplo foi utilizado o [`defineAsyncComponent`](https://vuejs.org/guide/components/async) da biblioteca Vue.js.

## Vantagens

- Fácil adição de novos ícones
- Fácil uso na aplicação
- Importação assíncrona, não importando todos os ícones no início

## Desvantagens

- Impossibilidade de usar nomes duplicados para ícones, gerando comportamento indesejado caso haja
- Não possibilidade de confirmar a existencia do ícone buscado
