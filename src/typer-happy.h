#include <vector>
#include <string>
#include "src/conversions.h"

#ifndef V8_TYPER_HAPPY_H_
#define V8_TYPER_HAPPY_H_

namespace v8 {

namespace internal {

template <typename T>
class Check {
public:
    int id;
    const char * name;
    void (*const checkingFunction)(T);

    Check(int _id, const char * _name, void (*const _checkingFunction)(T)) : 
    id(_id), name(_name), checkingFunction(_checkingFunction) {}
};

class TyperHappy {

    template <class T>
    static void addCheck(std::vector<Check<T>> * list, const char * name, void (*const _checkingFunction)(T)) {
        list->push_back(Check<double> ((int) (list->size()) + 1, name, TyperHappy::checkExpm1));
    }

    static std::vector<Check<double>> * createChecksDouble() {
        std::vector<Check<double>> * checks = new std::vector<Check<double>>();
        addCheck(checks, "expm1", TyperHappy::checkExpm1);
        return checks;
    }

    static const std::vector<Check<double>> * checksDouble;

public:

    static double CheckType(double value, double functionId);

    static int functionIdFromName(char* name);

    static void checkExpm1(double value) {
        CHECK(std::isnan(value) || !IsMinusZero(value));
    }
};

}

}

#endif  // V8_TYPER_HAPPY_H_
