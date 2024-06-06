#include <iostream>
#include <vector>
#include <numeric>
#include <functional>
#include <cmath>

// Función para la suma (∑(datos + 10))
double suma(const std::vector<double>& datos) {
    return std::accumulate(datos.begin(), datos.end(), 0.0, [](double acc, double x) {
        return acc + (x + 10);
    });
}

// Función para la suma2 (∑(datos^2))
double suma2(const std::vector<double>& datos) {
    return std::accumulate(datos.begin(), datos.end(), 0.0, [](double acc, double x) {
        return acc + std::pow(x, 2);
    });
}

// Función para la suma_3 (∑(3datos − 2datos))
double suma_3(const std::vector<double>& datos) {
    return std::accumulate(datos.begin(), datos.end(), 0.0, [](double acc, double x) {
        return acc + (3 * x - 2 * x);
    });
}

int main() {
    std::vector<double> datos = {1.0, 2.0, 3.0, 4.0, 5.0};

    std::cout << "Suma (∑(datos + 10)): " << suma(datos) << std::endl;
    std::cout << "Suma2 (∑(datos^2)): " << suma2(datos) << std::endl;
    std::cout << "Suma_3 (∑(3datos - 2datos)): " << suma_3(datos) << std::endl;

    return 0;
}
