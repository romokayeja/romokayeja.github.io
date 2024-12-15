#include <iostream>
#include <cstdlib>

void showAbout() {
    std::cout << "Romokayeja es una tienda de abarrotes cuyo propietario es el señor Jaime Álvarez Chaparro.\n";
    std::cout << "Estamos ubicados en Calle Belisario Domínguez, Colonia Los Pinos, Guachochi.\n";
    std::cout << "Número de teléfono: +52 6491077081\n";
}

int main() {
    int choice;

    while (true) {
        std::cout << "1. Acerca de Nosotros\n";
        std::cout << "2. Salir\n";
        std::cout << "Elige una opción: ";
        std::cin >> choice;

        switch (choice) {
            case 1:
                showAbout();
                break;
            case 2:
                exit(0);
            default:
                std::cout << "Opción no válida. Inténtalo de nuevo.\n";
        }
    }

    return 0;
}
