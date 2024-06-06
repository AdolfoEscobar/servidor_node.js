#include <iostream>
#include <string>

class ClaseA {
public:
    virtual ~ClaseA() {}
    virtual std::string agregalos() = 0;
};

class ClaseB : public ClaseA {
private:
    int atri1;
    int atri2;
public:
    ClaseB(int a1, int a2) : atri1(a1), atri2(a2) {}
    std::string agregalos() override {
        return std::to_string(atri1 + atri2);
    }
};

class ClaseC : public ClaseA {
private:
    std::string atri1;
    std::string atri2;
public:
    ClaseC(std::string a1, std::string a2) : atri1(a1), atri2(a2) {}
    std::string agregalos() override {
        return atri1 + atri2;
    }
};

int main() {
    ClaseB b(3, 5);
    std::cout << "Suma en ClaseB: " << b.agregalos() << std::endl;

    ClaseC c("Hola ", "Mundo");
    std::cout << "Concatenación en ClaseC: " << c.agregalos() << std::endl;

    return 0;
}
