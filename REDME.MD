Claro, aqui estão os passos para criar um novo repositório no GitHub e fazer o primeiro commit a partir de um sistema Ubuntu:

1. **Crie um novo repositório no GitHub**: Faça login na sua conta do GitHub e clique em "New repository" no menu à esquerda. Dê um nome ao seu repositório e clique em "Create repository".

2. **Clone o repositório para o seu sistema local**: Abra o terminal no Ubuntu e navegue até o diretório onde você deseja clonar o repositório. Use o comando `git clone`, seguido pela URL do repositório que você acabou de criar. Por exemplo:

```bash
git clone https://github.com/seu_usuario/nome_do_repositorio.git
```

3. **Navegue até o diretório do repositório**: Use o comando `cd` para entrar no diretório do repositório que você acabou de clonar:

```bash
cd nome_do_repositorio
```

4. **Crie um novo arquivo ou faça alterações em um arquivo existente**: Você pode usar qualquer editor de texto para fazer isso. Por exemplo, para criar um novo arquivo chamado `README.md`, você pode usar o comando `touch`:

```bash
touch README.md
```

5. **Adicione as alterações ao stage do Git**: Use o comando `git add` para isso. Para adicionar todos os arquivos modificados ao stage, use:

```bash
git add .
```

6. **Faça o commit das suas alterações**: Use o comando `git commit` para isso. Lembre-se de adicionar uma mensagem de commit descritiva:

```bash
git commit -m "Adicionado README"
```

7. **Faça o push das suas alterações para o GitHub**: Finalmente, use o comando `git push` para enviar suas alterações para o repositório no GitHub:

```bash
git push origin master
```

# Puxe as alterações do repositório remoto e rebase suas alterações locais se der erro
git pull origin master --rebase

# adicione o repositorio remoto
git remote add origin 'url do seu repositorio'
# Puxe as alterações do repositório remoto
git pull origin master

# Faça o push para o repositório remoto
git push origin master

Lembre-se de substituir "master" por "main" se o seu repositório usar "main" como o branch principal.

E é isso! Você acabou de criar um novo repositório no GitHub, fez alterações em um arquivo e enviou essas alterações para o GitHub.