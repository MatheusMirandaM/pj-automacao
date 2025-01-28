Feature: Cadastro de usuario
  Cadastrando um usuario na plataforma

  Scenario Outline: "<caso_teste>"
    Given usuario acessando a home do portal
    When o usuario informar o Nome "<firstName>" e o Sobrenome "<lastName>"
    And informar o DD do pais "<pais>"
    And informar numero para contato "<contato>"
    And informar a sua empresa "<nomeEmpresarial>"
    And informar o seu email "<email>"
    And informar o resultado da soma entres os numeros "<numb1>" "<numb2>"
    And clicar no botão de cadastrar
    Then o cadastro será realizado com sucesso

    Examples:
      | caso_teste  | firstName | lastName      | pais       | contato      | nomeEmpresarial     | email           | numb1 | numb2 |
      | Fluxo Feliz | Kira      | Aleixo Batista | Brazil +55 | 88 888888888 | Mirandas Tecnologia | email@gmail.com | numb2 | numb2 |
