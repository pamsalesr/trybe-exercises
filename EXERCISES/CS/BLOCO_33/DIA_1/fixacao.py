import statistics


# Exercicio 1 - Crie uma função que receba dois números e retorne o maior deles

def biggest_number(a, b):
    if b > a:
        return b
    return a


# Exercicio 2 - Calcule a média aritmética dos valores contidos em uma lista.

def list_average(list):
    return statistics.mean(list)

# Outra maneira:


def average(numbers):
    total = 0
    for number in numbers:
        total += number
    return total/len(numbers)


# Exercicio 3 - Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

def print_square(size):
    for row in range(size):
        print(size*'*')


# Exercicio 4 -  Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. 

def biggest_name(names):
    biggest = names[0]
    for name in names:
        if len(name) > len(biggest):
            biggest = name
    return biggest


# Exercicio 5 - Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. 
# Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

def cans_and_price(area):
    area_per_can = 54
    can_price = 80
    necessary_cans = area_per_can / area
    price = necessary_cans * can_price
    return f"Necessary cans: {necessary_cans} | Price: {price}"


# Exercicio 6 - Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.

def triangle_type(s1, s2, s3):
    is_triangle = (
        s1 + s2 > s3 and
        s2 + s3 > s1 and
        s1 + s3 > s2
    )
    if not is_triangle:
        return 'não é triângulo'
    elif s1 == s2 == s3:
        return 'Triângulo Equilátero'
    elif s1 == s2 or s2 == s3 or s1 == s3:
        return 'Triângulo Isósceles'
    return 'Triângulo Escaleno'


# BONUS

# Exercicio 1 - Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .

def smallest_number(list):
    smallest = list[0]
    for number in list:
        if number < smallest:
            smallest = number
    return smallest


# Exercicio 2 - Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um triângulo retângulo com n asteriscos de base.

def print_triangle(size):
    for row in range(size):
        print((row + 1)*'*')


# Exercicio 3 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N .

def somatory_of(number):
    somatory = 0
    for index in range(number):
        somatory += index + 1
    return somatory

# Exercicio 4 - Um posto está vendendo combustíveis com a seguinte tabela de descontos:
#  Álcool:
#    - Até 20 litros, desconto de 3% por litro;
#    - Acima de 20 litros, desconto de 5% por litro.
#  Gasolina:
#    - Até 20 litros, desconto de 4% por litro;
#    - Acima de 20 litros, desconto de 6% por litro.
#
# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def gas_total_price(quantity, type):
    gasoline_price = 2.5
    gasoline_4_descount = gasoline_price * 0.96
    gasoline_6_descount = gasoline_price * 0.94
    alcohol_price = 1.9
    alcohol_3_descount = alcohol_price * 0.97
    alcohol_5_descount = alcohol_price * 0.95
    total = 0
    if type == 'G':
        if quantity < 20:
            total = quantity * gasoline_4_descount
        else:
            total = quantity * gasoline_6_descount
    elif type == 'A':
        if quantity < 20:
            total = quantity * alcohol_3_descount
        else:
            total = quantity * alcohol_5_descount
    return total
