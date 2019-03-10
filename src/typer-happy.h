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

    /*void addCheck(std::vector& v, Check& check) {
        v.push_back(check);
        index++;
    }

    std::vector<int> CheckList() {
        std::vector v;
        addCheck(v, Check<double>("expm1", TyperHappy::checkExpm1);
        return v;
    }

    int index = 0;
    std::vector checkList = CheckList(); // can be const if you like*/
    // https://stackoverflow.com/questions/16210707/c-vector-of-template-class

    static std::vector<Check<double>> * createChecksDouble() {
        std::vector<Check<double>> * checks = new std::vector<Check<double>>();
        checks->push_back(Check<double> (1, "expm1", TyperHappy::checkExpm1));
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
