# Vitor Hugo Otto

""" Escrever um programa que leia 3 valores inteiros e verifique se eles podem
ser os lados de um triângulo (cada lado deve ser menor que a soma dos
outros dois lados). Se forem, informar qual o tipo de triângulo que eles
formam: equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3
lados diferentes). """

a = int(input("Escreva o valor de a: "))
b = int(input("Escreva o valor de b: "))
c = int(input("Escreva o valor de c: "))

if a < (b + c) and b < (a + c) and c < (a + b):
    if a == b and a == c:
        print("equilatero")
    else:
        if (a == b and a != c) or (a == c and a != b) or (b == c != b != a):
            print("isoceles")
        else:
            # if a != b and a != b and b != c:
                print("escaleno")
else:
    print("Não é um triangulo")