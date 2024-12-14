#include <stdio.h>
#include <stdlib.h>

void showAbout() {
    printf("Romokayeja es una tienda de abarrotes cuyo propietario es el señor Jaime Álvarez Chaparro.\n");
    printf("Estamos ubicados en Calle Belisario Domínguez, Colonia Los Pinos, Guachochi.\n");
    printf("Número de teléfono: +52 6491077081\n");
}

int main() {
    int choice;

    while (1) {
        printf("1. Acerca de Nosotros\n");
        printf("2. Salir\n");
        printf("Elige una opción: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                showAbout();
                break;
            case 2:
                exit(0);
            default:
                printf("Opción no válida. Inténtalo de nuevo.\n");
        }
    }

    return 0;
}
