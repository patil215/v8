#include <vector>
#include <string>
#include "src/conversions.h"
#include "src/compiler/types.h"

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
    static void addCheck(std::vector<Check<T>> * list, const char * name, void (*const checkingFunction)(T)) {
        list->push_back(Check<double> ((int) (list->size()) + 1, name, checkingFunction));
    }

    static std::vector<Check<double>> * createChecksDouble() {
        std::vector<Check<double>> * checks = new std::vector<Check<double>>();

        addCheck(checks, "random", TyperHappy::checkPlainNumberType);
        addCheck(checks, "floor", TyperHappy::checkIntegerMinusZeroNaNUnionType);
        addCheck(checks, "ceil", TyperHappy::checkIntegerMinusZeroNaNUnionType);
        addCheck(checks, "round", TyperHappy::checkIntegerMinusZeroNaNUnionType);
        addCheck(checks, "trunc", TyperHappy::checkIntegerMinusZeroNaNUnionType);
        addCheck(checks, "abs", TyperHappy::checkPlainNumberNaNUnionType);
        addCheck(checks, "exp", TyperHappy::checkPlainNumberNaNUnionType);
        addCheck(checks, "expm1", TyperHappy::checkPlainNumberNaNUnionType);

        return checks;
    }

    static const std::vector<Check<double>> * checksDouble;

public:

    static double CheckType(double value, double functionId);

    static int functionIdFromName(char* name);

    static void checkPlainNumberType(double value) {
        // TODO more checks
        CHECK(!IsMinusZero(value));
    }

    static void checkNumberType(double value) {

    }

    static void checkIntegerMinusZeroNaNUnionType(double value) {
        CHECK(isnan(value) || IsMinusZero(value) || compiler::RangeType::IsInteger(value));
    }

    static void checkRangeType(double value, double min, double max) {
        CHECK(min <= value && value <= max);
    }

    static void checkPlainNumberNaNUnionType(double value) {
        // TODO implement better
        CHECK(std::isnan(value) || !IsMinusZero(value));
    }
};

}

}

#endif  // V8_TYPER_HAPPY_H_
