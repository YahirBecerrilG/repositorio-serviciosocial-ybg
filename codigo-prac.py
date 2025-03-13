import random

def adivina_el_numero():
    numero_secreto = random.randint(0, 50)
    intentos = 5
    
    print("Adivina el número entre 0 y 50. Tienes 5 intentos.")
    
    for i in range(intentos):
        try:
            intento = int(input(f"Intento {i+1}: "))
            
            if intento == numero_secreto:
                print("¡Felicidades! Adivinaste el número.")
                return
            elif intento < numero_secreto:
                print("Más arriba")
            else:
                print("Más abajo")
            
        except ValueError:
            print("Por favor, ingresa un número válido.")
    
    print(f"Lo siento, el número era {numero_secreto}.")

adivina_el_numero()