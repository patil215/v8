#include <vector>
#include <string>
#include "src/conversions.h"
#include "src/compiler/types.h"
#include "src/date.h"

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

    // Creates list of checking functions for anything that can be represented as a double/number type.
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

        addCheck(checks, "acos", TyperHappy::checkNumberType);
        addCheck(checks, "acosh", TyperHappy::checkNumberType);
        addCheck(checks, "asinh", TyperHappy::checkNumberType);
        addCheck(checks, "atan", TyperHappy::checkNumberType);
        addCheck(checks, "atanh", TyperHappy::checkNumberType);
        addCheck(checks, "cbrt", TyperHappy::checkNumberType);
        addCheck(checks, "cos", TyperHappy::checkNumberType);
        addCheck(checks, "fround", TyperHappy::checkNumberType);
        addCheck(checks, "log", TyperHappy::checkNumberType);
        addCheck(checks, "log1p", TyperHappy::checkNumberType);
        addCheck(checks, "log10", TyperHappy::checkNumberType);
        addCheck(checks, "log2", TyperHappy::checkNumberType);
        addCheck(checks, "sin", TyperHappy::checkNumberType);
        addCheck(checks, "sqrt", TyperHappy::checkNumberType);
        addCheck(checks, "tan", TyperHappy::checkNumberType);

        addCheck(checks, "sign", TyperHappy::checkMinusOneToOneOrMinusZeroOrNaNUnionType);

        addCheck(checks, "atan2", TyperHappy::checkNumberType);
        addCheck(checks, "pow", TyperHappy::checkNumberType);
        addCheck(checks, "max", TyperHappy::checkNumberType);
        addCheck(checks, "min", TyperHappy::checkNumberType);

        addCheck(checks, "imul", TyperHappy::checkSigned32Type);

        addCheck(checks, "clz32", TyperHappy::checkClz32);

        addCheck(checks, "now", TyperHappy::checkNow);
        addCheck(checks, "getDate", TyperHappy::checkGetDate);
        addCheck(checks, "getDay", TyperHappy::checkGetDay);
        addCheck(checks, "getFullYear", TyperHappy::checkGetFullYear);
        addCheck(checks, "getHours", TyperHappy::checkGetHours);
        addCheck(checks, "getMilliseconds", TyperHappy::checkGetMilliseconds);
        addCheck(checks, "getMinutes", TyperHappy::checkGetMinutes);
        addCheck(checks, "getMonth", TyperHappy::checkGetMonth);
        addCheck(checks, "getSeconds", TyperHappy::checkGetSeconds);
        addCheck(checks, "getTime", TyperHappy::checkGetTime);

        return checks;
    }

    static const std::vector<Check<double>> * checksDouble;

public:

    static double CheckType(double value, double functionId);

    static int functionIdFromName(char* name);

    static void checkClz32(double value) {
        CHECK(0 <= value && value <= 32);
    }

    static void checkSigned32Type(double value) {
        //CHECK(IsUint32Double(value));
    }

    static void checkMinusOneToOneOrMinusZeroOrNaNUnionType(double value) {
        CHECK(
            (-1.0 <= value && value <= 1.0) ||
            IsMinusZero(value)              ||
            isnan(value)
        );
    }

    static void checkPlainNumberType(double value) {
        /*Type::bitset BitsetType::Lub(double value) {
        DisallowHeapAllocation no_allocation;
        if (IsMinusZero(value)) return kMinusZero;
        if (std::isnan(value)) return kNaN;
        if (IsUint32Double(value) || IsInt32Double(value)) return Lub(value, value);
        return kOtherNumber;
        }*/

        // TODO more checks, but IDK if there's anything we can really do here.
        CHECK(!IsMinusZero(value));
    }

    static void checkNumberType(double value) {
        // Number = Signed32 + Unsigned32 + Double
        // TODO is there anything to actually do here?
        //CHECK(IsInt32Double(value) || IsUint32Double(value));
        
        // number is everything except bigint
    }

    static void checkIntegerMinusZeroNaNUnionType(double value) {
        CHECK(isnan(value) || IsMinusZero(value) || compiler::RangeType::IsInteger(value));
    }

    static void checkRangeType(double value, double min, double max) {
        CHECK(min <= value && value <= max);
    }

    static void checkPlainNumberNaNUnionType(double value) {
        // TODO more checks for PlainNumber, but idk if there's really much we can do here
        CHECK(std::isnan(value) || !IsMinusZero(value));
    }

    static void checkNow(double value) {
        checkRangeType(value, -DateCache::kMaxTimeInMs, DateCache::kMaxTimeInMs);
    }

    static void checkGetDate(double value) {
        CHECK(
            1 <= value && value <= 31.0 ||
            std::isnan(value)
        );
    }

    static void checkGetDay(double value) {
        CHECK(
            0 <= value && value <= 6.0 ||
            std::isnan(value)
        );
    }

    static void checkGetFullYear(double value) {
        /*CHECK(
            //IsInt32Double(value)    ||
            std::isnan(value)
        );*/
    }

    static void checkGetHours(double value) {
        CHECK(
            0 <= value && value <= 23.0 ||
            std::isnan(value)
        );
    }

    static void checkGetMilliseconds(double value) {
        CHECK(
            0 <= value && value <= 999.0 ||
            std::isnan(value)
        );
    }

    static void checkGetMinutes(double value) {
        CHECK(
            0 <= value && value <= 59.0 ||
            std::isnan(value)
        );
    }

    static void checkGetMonth(double value) {
        CHECK(
            0 <= value && value <= 11.0 ||
            std::isnan(value)
        );
    }

    static void checkGetSeconds(double value) {
        checkGetMinutes(value);
    }

    static void checkGetTime(double value) {
        CHECK(
            -DateCache::kMaxTimeInMs <= value && value <= DateCache::kMaxTimeInMs ||
            std::isnan(value)
        );
    }

};

}

}

#endif  // V8_TYPER_HAPPY_H_
